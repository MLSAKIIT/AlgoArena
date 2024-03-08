import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

const ChapterEdit = ({ index, chapter, handleChange }) => {
  const [editing, setEditing] = useState(false);

  return (
    <>
      {!editing ? (
        <div className="flex w-full justify-evenly items-center border-dotted border-2 border-color-2 rounded-xl py-2 gap-4">
          <h1>{chapter.title}</h1>
          <Button type="button" onClick={() => setEditing(true)}>
            Edit
          </Button>
        </div>
      ) : (
        <div className=" border-dotted border-2 p-2 border-color-2 w-full rounded-xl pt-2 pb-10">
          <div className="w-full flex justify-end">
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="text-color-2 transition-colors hover:text-white text-4xl"
            >
              <IoIosClose />
            </button>
          </div>
          <div className="flex flex-col w-full space-y-2 gap-2">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                name="title"
                placeholder="Title"
                type="text"
                value={chapter.title}
                onChange={(e) => handleChange(index, e)}
                //   onBlur={handleBlur}
                //   className={cn(errors.title && "border-red-500")}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Content</Label>
              <Input
                name="content"
                placeholder="Content"
                type="text"
                className="bg-[url('/assets/icons/link.png')]"
                value={chapter.content}
                onChange={(e) => handleChange(index, e)}
                //   onBlur={handleBlur}
                //   className={cn(errors.title && "border-red-500")}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChapterEdit;
