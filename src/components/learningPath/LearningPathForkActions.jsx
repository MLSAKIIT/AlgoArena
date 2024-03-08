import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { forkLearningPathAction } from "@/actions/forklearningpath";
import { cn } from "@/lib/utils";
import { GitFork } from "lucide-react";
import SubmitButton from "@/components/SubmitButton";
import LearningPathForkForm from "./LearningPathForkForm";

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

async function LearningPathForkActions({ isForked, parentPathId, id }) {
  const parentLearningPath = isForked
    ? await getParentLearningPath(parentPathId)
    : null;

  return (
    <div className="mx-10">
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
      {!isForked && (
        <LearningPathForkForm id={id} />
      )}
    </div>
  );
}

export default LearningPathForkActions;
