import React from 'react'
import { Progress } from "@/components/ui/progress"
import { FaArrowCircleRight } from "react-icons/fa";


const StaredCourseCard = ({course}) => {
    const {title, description, progress,hours, videos}=course;
  return (
    <div className='border rounded-xl border-color-2 p-4 mb-5'>
        <div className=' flex gap-1' >
            <div className='w-10/12 md:w-11/12 p '>
                <div className='font-poppins text-xl md:text-2xl mb-4 md:mb-2 font-[900] bg-clip-text bg-gradient-course text-transparent '>{title}</div>
                <div className='text-sm text-[white] font-popins font-[500] line-clamp-3'>{description}</div>
                <div className='text-xs text-[white] font-popins font-[300] my-4'>{videos} Videos | {hours} Hours</div>
                {progress==0?<div></div>: <Progress value={progress} className='my-2'/>}
               

            </div>
            <div className='w-2/12 md:w-1/12 flex justify-center items-center hover:cursor-pointer'>
            <FaArrowCircleRight className='text-3xl text-[white]'/>
            </div>

        </div>
    </div>
  )
}

export default StaredCourseCard