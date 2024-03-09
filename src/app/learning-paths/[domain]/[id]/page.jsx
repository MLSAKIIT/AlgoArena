import React from "react";
import LearningPathSection from "@/components/learningPath/LearningPathSection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth/options";
import LearningPathHeader from "@/components/learningPath/LearningPathHeader";
import LearningPathActions from "@/components/learningPath/LearningPathActions";
import { calculateProgress } from "@/data/dashboard";
import { getLearningPathData } from "@/data/learning-paths";
import Navbar from "@/components/ui/Navbar";

const page = async ({ params }) => {
  const session = await getServerSession(authOptions);
  const learningPathData = await getLearningPathData(params.id);
  const { id, title, description, sections, user, isForked, forkedFromId } =
    learningPathData;

  const { progress, completedChapters, totalChapters } =
    await calculateProgress(learningPathData, session);
  return (
    <>
      <Navbar />
      <LearningPathHeader
        title={title}
        description={description}
        progress={progress}
        createdBy={user.name}
        videosCount={totalChapters}
      />
      <LearningPathActions
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
