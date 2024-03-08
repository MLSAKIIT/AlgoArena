"use client";

import { CiPlay1 } from "react-icons/ci";
import { MdOutlineReplay } from "react-icons/md";
import { Circle, Loader2 } from "lucide-react";
import React, { useTransition } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { updateUserProgress } from "@/actions/updateUserProgress";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { Button } from "../ui/button";

const LearningPathSectionItem = ({ info, teacher, isCompleted }) => {
  const [isPending, startTransition] = useTransition();
  const searchParams = useParams();
  console.log(info);
  const { content, title, id } = info;

  const handleSubmit = (e) => {
    e.preventDefault();
    startTransition(() => {
      updateUserProgress(searchParams.domain, id, isCompleted)
        .then((data) => {
          if (data.error) {
            toast.error(data.error);
          } else {
            toast.success(data.success);
          }
        })
    });
  };

  return (
    <div className="flex justify-between my-2 items-center m-2">
      <div className="flex  gap-3 items-center my-1">
        <div>
          {isCompleted ? (
            <FaRegCheckCircle className="text-green-500 text-2xl" />
          ) : (
            <Circle />
          )}
        </div>
        <div>
          <div className="font-[600] text-md line-clamp-1 font-popins">
            {title}
          </div>
          <div className="text-xs font-[500] font-popins">
            Taught by {teacher}
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <Button
          disabled={isPending}
          variant="ghost"
          size="icon"
          className="mr-2"
        >
          {isPending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : isCompleted ? (
            <MdOutlineReplay className="h-5 w-5" />
          ) : (
            <CiPlay1 className="h-5 w-5 hover:font-bold" />
          )}
        </Button>
      </form>
    </div>
  );
};

export default LearningPathSectionItem;
