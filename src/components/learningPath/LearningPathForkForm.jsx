"use client";
import { forkLearningPathAction } from "@/actions/forklearningpath";
import React, { useTransition } from "react";
import { GitFork, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";

const LearningPathForkForm = ({ id }) => {
  const forkLearningPathActionWithId = forkLearningPathAction.bind(null, id);
  const [pending, startTransition] = useTransition();
  const handleSubmit = (e) => {
    e.preventDefault();
    startTransition(() => {
      forkLearningPathActionWithId().then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success("Learning path forked successfully");
        }
      });
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit" className="flex gap-2">
        {pending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Fork
            <GitFork className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
};

export default LearningPathForkForm;
