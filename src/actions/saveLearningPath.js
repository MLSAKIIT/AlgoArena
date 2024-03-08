"use server";

import { authOptions } from "@/server/auth/options";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export const saveLearningPathAction = async (id, domain) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return { error: "You need to login before doing this" };
    }

    const exisitngData = await db.savedLearningPath.findUnique({
      where: {
        userId_learningPathId: {
          userId: session.user.id,
          learningPathId: id,
        },
      },
    });

    if (exisitngData) {
      await db.savedLearningPath.delete({
        where: {
          userId_learningPathId: {
            userId: session.user.id,
            learningPathId: id,
          },
        },
      });
      return { success: "Learning path removed from saved" };
    }

    await db.savedLearningPath.create({
      data: {
        user: {
          connect: { id: session.user.id },
        },
        learningPath: {
          connect: { id },
        },
      },
    });
    return { success: "Learning path saved successfully" };
  } catch (error) {
    return { error: "Something went wrong" };
  } finally {
    revalidatePath(`/learning-paths/${domain}/${id}`);
  }
};
