import React from "react";
import Header from "./Header";
import { db } from "@/server/db";
import LearningPathSection from "@/components/learningPath/LearningPathSection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth/options";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { forkLearningPathAction } from "@/actions/forklearningpath";
import { cn } from "@/lib/utils";
import { GitFork } from "lucide-react";
import SubmitButton from "@/components/SubmitButton";

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

const getParentLearningPath = async (id) => {
  const data = await db.learningPath.findUnique({
    where: {
      id,
      isPublished: true,
    },
    include: {
      user: {
        select: { name: true },
      },
    },
  });
  return data;
};

const page = async ({ params }) => {
  const session = await getServerSession(authOptions);
  const learningPathData = await getLearningPathData(params.id);
  const { id, title, description, domain, sections, user, isForked, forkedFromId } =
    learningPathData;

  const parentLearningPath = isForked ? await getParentLearningPath(forkedFromId) : null;
  const parentData = parentLearningPath
    ? {
        user: parentLearningPath.user.name,
        title: parentLearningPath.title,
      }
    : null;

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
  const forkLearningPathActionWithId = forkLearningPathAction.bind(null, id);

  return (
    <>
      <Header
        title={title}
        description={description}
        videos={chaptersCount}
        hours="16"
        creator={user.name}
      />
      <div className="mx-10">
        {isForked && (
          <div>
            <span className="text-muted-foreground text-sm">Forked from</span>
            <Link
              href={
                parentData
                  ? `/learning-paths/${domain}/${parentLearningPath.id}`
                  : null
              }
              className={cn(buttonVariants({ variant: "link" }), "px-2")}
            >
              {parentData.title
                ? `${parentData.user}/${parentData.title}`
                : "Deleted"}
            </Link>
          </div>
        )}
        {!isForked && (
          <form action={forkLearningPathActionWithId}>
            <SubmitButton type="submit" className="mt-4 flex gap-2">
              Fork
              <GitFork className="w-4 h-4" />
            </SubmitButton>
          </form>
        )}
      </div>
      <LearningPathSection sections={sections} />
    </>
  );
};

export default page;
