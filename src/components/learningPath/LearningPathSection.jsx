import React from "react";
import LearningPathSectionCard from "./LearningPathSectionCard";

const LearningPathSection = ({ sections }) => {
  // console.log(sections);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="font-bold font_the_bold_font bg-gradient-videos bg-clip-text text-[transparent] text-3xl justify-center m-3 mb-4 hidden md:flex">
        ALL VIDEOS
      </div>
      {sections &&
        sections.map((section) => (
          <LearningPathSectionCard key={section.id} section={section} />
        ))}
    </div>
  );
};

export default LearningPathSection;
