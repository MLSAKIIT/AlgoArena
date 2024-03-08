"use server";

import { authOptions } from "@/server/auth/options";
import { db } from "@/server/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const forkLearningPathAction = async (id) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return { error: "You need to login before doing this" };
  }
  const result = await handleForkLearningPathCreation(id,session.user.id);
  if (result.error) {
    return result;
  }
  redirect(result.redirectTo);
};

const handleForkLearningPathCreation = async (id,userId) => {
  try {
    const originalLearningPath = await db.learningPath.findUnique({
      where: {
        id,
      },
      include: {
        sections: {
          include: {
            chapters: true,
          },
        },
      },
    });

    if (!originalLearningPath) {
      return { error: "Learning path not found" };
    }

    const existingFork = await db.learningPath.findFirst({
      where: {
        forkedFromId: id,
        user: {
          id: userId
        },
      },
    });

    if (existingFork) {
      return { error: "You can't fork the same learning path twice" };
    }

    const forkedLearningPath = await db.learningPath.create({
      data: {
        title: originalLearningPath.title,
        description: originalLearningPath.description,
        tags: originalLearningPath.tags,
        domain: originalLearningPath.domain,
        isPublished: false,
        isForked: true,
        forkedFromId: originalLearningPath.id,
        user: {
            connect: { id: userId },
        },
        sections: {
          create: originalLearningPath.sections.map((section) => {
            return {
              title: section.title,
              chapters: {
                create: section.chapters.map((chapter) => {
                  return {
                    title: chapter.title,
                    content: chapter.content,
                  };
                }),
              },
            };
          }),
        },
      },
    });
    console.log("forkedLearningPath", forkedLearningPath);
    return {
      success: "Learning path forked successfully",
      redirectTo: `/learning-paths/edit/${forkedLearningPath.id}`,
    };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong" };
  }
};
