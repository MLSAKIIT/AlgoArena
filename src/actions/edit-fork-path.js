"use server";

import { domains } from "@/constants";
import { authOptions } from "@/server/auth/options";
import { db } from "@/server/db";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const SubmitEditedFork = async (data) => {
  try {
    await db.learningPath.update({
      data: {
        title: data.title,
        description: data.title,
        domain: data.domain,
        tags: data.tags,
      },
      where: {
        id: data.id,
      },
    });
    data.sections.forEach((element) => {});
    return {
      success: "Learning path forked successfully",
    };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong" };
  }
};
