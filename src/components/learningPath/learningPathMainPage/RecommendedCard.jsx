import React from 'react'
import { Progress } from "@/components/ui/progress";
import { FaArrowCircleRight } from "react-icons/fa";

const RecommendedCard = ({course}) => {
    const {title, description, progress, videos, hours} = course;
    // console.log(course);
  return (
    <div className="border rounded-xl border-color-2 p-4 mb-5 backdrop-blur-[5px] hover:shadow-[0_0_10px_3px_#4a0f87] cursor-pointer text-[white] hover:text-color-2 m-2 w-[305px]">
      <div className=" flex gap-3">
        <div className="w-10/12 ">
        <div className="font-poppins text-xl md:text-2xl mb-4 md:mb-2 font-[900] bg-clip-text bg-gradient-course text-transparent w-[250px] line-clamp-1">
            {title}
          </div>
          <div className="text-xs text-[white] font-popins font-[500] line-clamp-2">
            {description}
          </div>
          {/* <div className="text-xs text-[white] font-popins font-[300] my-4">
            {videos} Videos
          </div> */}
          {
            progress==0?<div className="my-2 mt-4 h-1"></div>: <Progress value={progress} className="my-2 mt-4" />
          }
           
         
        </div>
        <div
        //   href={`/learning-paths/${domain}/${id}`}
          className="w-2/12 flex justify-center items-center hover:cursor-pointer"
        >
          <FaArrowCircleRight className="text-3xl" />
        </div>
        
      </div>
     
    </div>
  )
}

export default RecommendedCard