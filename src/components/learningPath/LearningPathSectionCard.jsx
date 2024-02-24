"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import LearningPathSectionItem from "./LearningPathSectionItem";

const LearningPathSectionCard = ({ section, showItem, setShowIndex }) => {
  const [sectionOpen, setSectionOpen] = useState(true);
 

  const handleClick = () => {
    setShowIndex();
  };

  const { id, title, time, videos } = section;

  const eachVideoPoint = 100/ videos.length;

  return (
    <div className="border-[3px] border-color-2 rounded-xl  m-4 items-center p-3 md:max-w-6xl mx-auto w-10/12 md:w-9/12">
      <div
        className="flex justify-between items-center md:max-w-6xl cursor-pointer"
        onClick={handleClick}
      >
        <div>
          <div className="text-lg font-bold font-popins line-clamp-1">
            {title}
          </div>
          <div className="flex text-sm font-popins font-[500]">
            {videos.length} Videos | {time} Hours
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
      {showItem &&
        videos.map((video) => (
          <LearningPathSectionItem key={video.id} info={video} point={eachVideoPoint} />
        ))}
    </div>
  );
};

export default LearningPathSectionCard;
