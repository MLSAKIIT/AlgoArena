import React from "react";
import { db } from "@/server/db";
import LearningPathSection from "@/components/learningPath/LearningPathSection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth/options";
import LearningPathHeader from "@/components/learningPath/LearningPathHeader";
import LearningPathForkActions from "@/components/learningPath/LearningPathForkActions";

const getLearningPathData = async (id) => {
  const data = await db.learningPath.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
      sections: {
        include: {
          chapters: true,
        },
      },
    },
  });
  return data;
};

const getCurrentUserProgress = async (userId, learningPathId) => {
  const data = await db.userProgress.findMany({
    where: {
      userId,
      chapter: {
        section: {
          learningPathId,
        },
      },
      isCompleted: true,
    },
  });
  return data;
};

const page = async ({ params }) => {
  const session = await getServerSession(authOptions);
  const learningPathData = await getLearningPathData(params.id);
  const { id, title, description, sections, user, isForked, forkedFromId } =
    learningPathData;

  let completedChapters = session
    ? await getCurrentUserProgress(session.user.id, params.id)
    : null;
  
  if (completedChapters) {
    completedChapters = completedChapters.map((chapter) => chapter.chapterId)
  }

  console.log(completedChapters);

  const chaptersCount = sections
    .map((section) => section.chapters.length)
    .reduce((a, b) => a + b, 0);

  const progress = completedChapters
    ? Math.floor((completedChapters.length / chaptersCount) * 100)
    : 0;

  return (
    <>
      <LearningPathHeader
        title={title}
        description={description}
        progress={progress}
        createdBy={user.name}
        videosCount={chaptersCount}
      />
      <LearningPathForkActions
        id={id}
        isForked={isForked}
        parentPathId={forkedFromId}
      />
      <LearningPathSection
        sections={sections}
        teacher={user.name}
        completedChapters={completedChapters}
      />
    </>
  );
};

export default page;
