"use client";
import React, { useState } from "react";
import LearningPathSectionCard from "./LearningPathSectionCard";

const LearningPathSection = ({ sections }) => {
  const [showIndex, setShowIndex] = useState(0);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="font-bold font-theboldfont bg-gradient-videos bg-clip-text text-[transparent] text-3xl justify-center m-3 mb-4 hidden md:flex">
        ALL VIDEOS
      </div>
      {sections &&
        sections.map((section, i) => (
          <LearningPathSectionCard
            key={section.id}
            section={section}
            showItem={i === showIndex ? true : false}
            setShowIndex={
              showIndex === i ? () => setShowIndex(null) : () => setShowIndex(i)
            }
          />
        ))}
    </div>
  );
};

export default LearningPathSection;
