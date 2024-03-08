"use server";

import { authOptions } from "@/server/auth/options";
import { db } from "@/server/db";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export const updateUserProgress = async (domain, chapterId, currentState) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return { error: "You must be logged in to update your progress" };
    }
    const updateProgress = await db.userProgress.upsert({
      where: {
        userId_chapterId: {
          userId: session.user.id,
          chapterId,
        },
      },
      create: {
        userId: session.user.id,
        chapterId,
        isCompleted: true,
      },
      update: {
        isCompleted: !currentState,
      },
    });
    revalidatePath(`/learning-paths/${domain}/${chapterId}`)
    return { success: "Your progress has been updated" };
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while updating your progress" };
  }
};
