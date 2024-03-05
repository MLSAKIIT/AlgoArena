import React from "react";
import Header from "./Header";
import { db } from "@/server/db";
import LearningPathSection from "@/components/learningPath/LearningPathSection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth/options";

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
  const data = await db.userProgress.count({
    where: {
      userId,
      chapter: {
        section: {
          learningPathId,
        },
      },
    },
  });
  return data;
};

const page = async ({ params }) => {
  const session = await getServerSession(authOptions);

  const learningPathData = await getLearningPathData(params.id);
  const { id, title, description, tags, domain, sections, user } =
    learningPathData;
  const currentUserCompletedChapters = session
    ? await getCurrentUserProgress(session.user.id, params.id)
    : null;

  const chaptersCount = sections
    .map((section) => section.chapters.length)
    .reduce((a, b) => a + b, 0);

  const progress = currentUserCompletedChapters
    ? Math.floor((currentUserCompletedChapters / chaptersCount) * 100)
    : 0;

  console.log(progress);

  return (
    <>
      <Header
        title={title}
        description={description}
        videos={chaptersCount}
        hours="16"
        creator={user.name}
      />
      <LearningPathSection sections={sections} />
    </>
  );
};

export default page;
