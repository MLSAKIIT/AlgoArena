"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";
import LearningPathSectionItem from "./LearningPathSectionItem";

const LearningPathSectionCard = ({ section, showItem, setShowIndex, teacher, completedChapters }) => {
  const handleClick = () => {
    setShowIndex();
  };

  const { title, chapters } = section;

  return (
    <div className="border-[3px] border-color-2 rounded-xl  m-4 items-center p-3 md:max-w-6xl mx-auto w-10/12 md:w-9/12 backdrop-blur-[7px]">
      <div
        className="flex justify-between items-center md:max-w-6xl cursor-pointer"
        onClick={handleClick}
      >
        <div>
          <div className="text-lg font-bold font-popins line-clamp-1">
            {title}
          </div>
          <div className="flex text-sm font-popins font-[500]">
            {chapters.length} Videos
          </div>
        </div>
        <div>
          {showItem ? (
            <ChevronUp className="text-5xl font-bold mr-3 transition-all duration-300 ease-in-out" />
          ) : (
            <ChevronDown className="text-5xl font-bold mr-3" />
          )}
        </div>
      </div>
      {showItem && chapters &&
        chapters.map((chapter) => (
          <LearningPathSectionItem
            key={chapter.id}
            info={chapter}
            teacher={teacher}
            isCompleted={completedChapters.includes(chapter.id)}
          />
        ))}
    </div>
  );
};

export default LearningPathSectionCard;
