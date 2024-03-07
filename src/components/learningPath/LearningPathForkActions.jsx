import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { forkLearningPathAction } from "@/actions/forklearningpath";
import { cn } from "@/lib/utils";
import { GitFork } from "lucide-react";
import SubmitButton from "@/components/SubmitButton";

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
  const forkLearningPathActionWithId = forkLearningPathAction.bind(null, id);

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
        <form action={forkLearningPathActionWithId}>
          <SubmitButton type="submit" className="mt-4 flex gap-2">
            Fork
            <GitFork className="w-4 h-4" />
          </SubmitButton>
        </form>
      )}
    </div>
  );
}

export default LearningPathForkActions;
