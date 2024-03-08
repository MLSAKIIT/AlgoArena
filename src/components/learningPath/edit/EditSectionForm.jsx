import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import ChapterEdit from "./ChapterEdit";

const EditSectionForm = ({ section, handleChange }) => {
  // const handleSectionChange = (section) => {
  //   section.
  // }
  return (
    <>
      <div className="z-20 top-10 flex justify-center items-center">
        <Card className="sm:bg-color-7 p-0 w-full sm:w-96 sm:rounded-2xl rounded-none  border-none">
          <CardContent className="flex p-0 justify-center flex-col gap-4 items-center">
            <Label className="w-full text-start">Chapters</Label>

            {section.chapters.length > 0 &&
              section.chapters.map((chapter, index) => (
                <ChapterEdit
                  key={index}
                  index={index}
                  handleChange={handleChange}
                  chapter={chapter}
                />
              ))}
            <Button className="max-w-[12rem]">Add Chapter</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default EditSectionForm;
