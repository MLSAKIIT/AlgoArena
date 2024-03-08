import { authOptions } from "@/server/auth/options";
import { db } from "@/server/db";
import { getServerSession } from "next-auth";

export const getAllLearningPathsWithProgress = async () => {
  const session = await getServerSession(authOptions);
  if (!session) return null;

  const learningPathsWithSomeProgress =
    await db.learningPath.findMany({
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
            chapters: true
          }
        }
      }
    });
  const progressInEachLearningPath = await Promise.all(
    learningPathsWithSomeProgress.map(async (learningPath) => {
      const data = await db.userProgress.findMany({
        where: {
          userId: session.user.id,
          chapter: {
            section: {
              learningPathId: learningPath.id,
            },
          },
          isCompleted: true,
        },
      });
      let completedChapters;
      if (data) {
        completedChapters = data.map((chapter) => chapter.chapterId);
      }
    
      const totalChaptersInLearningPath = learningPath.sections
        .map((section) => section.chapters.length)
        .reduce((a, b) => a + b, 0);
    
      const progress = completedChapters.length > 0 ? (completedChapters.length / totalChaptersInLearningPath) * 100 : 0;

      // remove unnecessary data
      const {sections, authorId, isForked, forkedFromId, ...rest} = learningPath
      return {
        ...rest,
        progress
      };
    })
  );
  return progressInEachLearningPath;
};


// Use them incase they are being rendered in different pages

export const getCurrentlyWatchingLearningPathsWithProgress = async () => {
  const data = await getAllLearningPathsWithProgress();
  if (!data) return null;
  return data.filter((learningPath) => learningPath.progress < 100);
}

export const getCompletedLearningPaths = async () => {
  const data = await getAllLearningPathsWithProgress();
  if (!data) return null;
  return data.filter((learningPath) => learningPath.progress === 100);
}