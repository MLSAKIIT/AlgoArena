import { ALLOWED_DOMAINS } from "@/constants";
import { authOptions } from "@/server/auth/options";
import { db } from "@/server/db";
import { getServerSession } from "next-auth";

export const calculateProgress = async (learningPath, session) => {
  const data = session ? await db.userProgress.findMany({
    where: {
      userId: session.user.id,
      chapter: {
        section: {
          learningPathId: learningPath.id,
        },
      },
      isCompleted: true,
    },
  }) : null;
  
  let completedChapters = [];
  if (data) {
    completedChapters = data.map((chapter) => chapter.chapterId);
  }

  const totalChaptersInLearningPath = learningPath.sections
    .map((section) => section.chapters.length)
    .reduce((a, b) => a + b, 0);

  const progress =
    completedChapters.length > 0
      ? (completedChapters.length / totalChaptersInLearningPath) * 100
      : 0;

  return {
    progress,
    totalChapters: totalChaptersInLearningPath,
    completedChapters,
  };
};

export const getAllLearningPathsWithProgress = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return [];

    const learningPathsWithSomeProgress = await db.learningPath.findMany({
      where: {
        sections: {
          some: {
            chapters: {
              some: {
                userProgress: {
                  some: {
                    userId: session.user.id,
                    isCompleted: true,
                  },
                },
              },
            },
          },
        },
      },
      include: {
        sections: {
          include: {
            chapters: true,
          },
        },
      },
    });
    const progressInEachLearningPath = await Promise.all(
      learningPathsWithSomeProgress.map(async (learningPath) => {
        const { progress } = await calculateProgress(learningPath, session);

        // remove unnecessary data
        const { sections, authorId, isForked, forkedFromId, ...rest } =
          learningPath;
        return {
          ...rest,
          progress,
        };
      })
    );
    return progressInEachLearningPath;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getSavedLearningPathsWithProgress = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return null;

    const savedLearningPaths = await db.savedLearningPath.findMany({
      where: {
        userId: session.user.id,
        learningPath: {
          // we will only be able to see the learning path if it is published
          isPublished: true,
        },
      },
      include: {
        learningPath: {
          include: {
            sections: {
              include: {
                chapters: true,
              },
            },
          },
        },
      },
    });

    const savedLearningPathsWithProgress = await Promise.all(
      savedLearningPaths.map(async (savedLearningPath) => {
        const { progress, totalChapters } = await calculateProgress(
          savedLearningPath.learningPath,
          session
        );

        // remove unnecessary data
        const { sections, authorId, isForked, forkedFromId, ...rest } =
          savedLearningPath.learningPath;
        return {
          ...rest,
          progress,
          videos: totalChapters,
        };
      })
    );

    return savedLearningPathsWithProgress;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// Use them incase they are being rendered in different pages

export const getCurrentlyWatchingLearningPathsWithProgress = async () => {
  const data = await getAllLearningPathsWithProgress();
  if (!data) return null;
  return data.filter((learningPath) => learningPath.progress < 100);
};

export const getCompletedLearningPaths = async () => {
  const data = await getAllLearningPathsWithProgress();
  if (!data) return null;
  return data.filter((learningPath) => learningPath.progress === 100);
};

