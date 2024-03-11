import React from "react";
import { Progress } from "@/components/ui/progress";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";

const RecommendedCard = ({ course }) => {
  const { id, title, description, domain, videos, sections, hours } = course;
  const href = `/learning-paths/${domain}/${id}`;

  let chapterCount = 0;
  let progress = 0;
  sections.length > 0 &&
    sections.forEach((element) => {
      chapterCount += element.chapters.length;
      element.chapters &&
        element.chapters.forEach((chapter) => {
          if (chapter.userProgress && chapter?.userProgress[0]?.isCompleted) {
            progress++;
          }
        });
    });

  const progressPercentage = (progress / chapterCount) * 100;

  return (
    <div className="m-2">
    <Link
      href={href}>
     <div className="border rounded-xl border-color-2 p-4 backdrop-blur-[5px] hover:shadow-[0_0_10px_3px_#4a0f87] cursor-pointer text-[white] hover:text-color-2 "
    >
      <div>
      <div className=" flex gap-3">
        <div className="w-10/12 ">
          <div className="font-poppins text-xl md:text-2xl mb-4 md:mb-2 font-[900] bg-clip-text bg-gradient-course text-transparent line-clamp-1">
            {title}
          </div>
          <div className="text-xs text-[white] font-popins font-[500] line-clamp-3 h-12">
            {description}
          </div>
          {/* <div className="text-xs text-[white] font-popins font-[300] my-4">
            {videos} Videos
          </div> */}
          
        </div>
        <div
          //   href={`/learning-paths/${domain}/${id}`}
          className="w-2/12 flex justify-center items-center hover:cursor-pointer mt-6"
        >
          <FaArrowCircleRight className="text-3xl" />
        </div>
        
      </div>
      {progress == 0 ? (
            <div className="my-2 mt-4 h-2"></div>
          ) : (
            <Progress value={progressPercentage} className="my-2 mt-4" />
          )}

      </div>
      </div>
    </Link>
    </div>
  );
};

export default RecommendedCard;
