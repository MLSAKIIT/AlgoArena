import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LearningPathForkForm from "./LearningPathForkForm";
import { checkIfLearningPathIsSaved } from "@/data/learning-paths";
import LearningPathSaveForm from "./LearningPathSaveForm";

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

async function LearningPathActions({ isForked, parentPathId, id }) {
  const parentLearningPath = isForked
    ? await getParentLearningPath(parentPathId)
    : null;

  const isSaved = await checkIfLearningPathIsSaved(id);

  return (
    <div className="mx-10 flex items-center gap-2 mt-4">
      {isForked && (
        <div>
          <span className="text-muted-foreground text-sm">Forked from</span>
          <Link
            href={
              parentLearningPath
                ? `/learning-paths/${parentLearningPath.domain}/${parentLearningPath.id}`
                : null
            }
            className={cn(buttonVariants({ variant: "link" }), "px-2")}
          >
            {parentLearningPath
              ? `${parentLearningPath.user.name}/${parentLearningPath.title}`
              : "Deleted"}
          </Link>
        </div>
      )}
      {!isForked && <LearningPathForkForm id={id} />}

      <LearningPathSaveForm isSaved={isSaved} id={id} />
    </div>
  );
}

export default LearningPathActions;
