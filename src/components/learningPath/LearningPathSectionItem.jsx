"use client";
import { CiPlay1 } from "react-icons/ci";
import { MdOutlineReplay } from "react-icons/md";
import { Circle } from "lucide-react";
import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const LearningPathSectionItem = ({ info }) => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    if (opened === false) {
      setOpened(true);
    }
  };
  const { title, teacher, completed, progress } = info;
  return (
    <div className="flex justify-between my-2 items-center m-2">
      <div className="flex  gap-3 items-center my-1">
        <div>
          {opened ? (
            <FaRegCheckCircle className="text-green-500 text-2xl" />
          ) : (
            <Circle />
          )}
        </div>
        <div>
          <div className="font-[600] text-md line-clamp-1">{title}</div>
          <div className="text-xs">Taught by {teacher}</div>
        </div>
      </div>
      <div onClick={handleClick} className="cursor-pointer">
        {opened ? (
          <MdOutlineReplay className="text-xl mr-2" />
        ) : (
          <CiPlay1 className="mr-2 text-xl hover:text-color-2 hover:font-bold" />
        )}
      </div>
    </div>
  );
};

export default LearningPathSectionItem;
