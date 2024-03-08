"use client";

import React, { useTransition } from "react";
import { Button } from "../ui/button";
import { Bookmark, BookmarkCheck, Loader2 } from "lucide-react";
import { saveLearningPathAction } from "@/actions/saveLearningPath";
import { useParams } from "next/navigation";
import { toast } from "sonner";

const LearningPathSaveForm = ({ isSaved, id }) => {
  const { domain } = useParams();
  const [pending, startTransition] = useTransition();
  const handleSubmit = (e) => {
    e.preventDefault();
    startTransition(() => {
      saveLearningPathAction(id, domain).then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(data.success);
        }
      });
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit" size="icon" className="bg-transparent hover:bg-transparent">
        {pending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            {isSaved ? (
              <BookmarkCheck className="h-6 w-6 text-primary" />
            ) : (
              <Bookmark className="h-6 w-6" />
            )}
          </>
        )}
      </Button>
    </form>
  );
};

export default LearningPathSaveForm;
