import React from 'react'

export default function MyCoursesCard({enrolledCourse}) {
  return (
    
      <div className="box-border lg:min-w-64 md:min-w-56 sm:min-w-20 text-center self-center justify-self-center max-w-max lg:py-4 lg:px-4 sm:py-3 sm:px-3 px-3 py-2 border-[#9d5ae3] rounded-xl border-2 hover:shadow-[0_0_16px_3px_#4a0f87] h-20 md:h-32 cursor-pointer z-30 hover:scale-105 transition-all duration-300 flex flex-col mx-5 hover:backdrop-blur-sm">
      <h1 className=" font-black lg:text-xl sm:text-lg text-md bg-gradient-to-r from-white to-[#9d5ae3] bg-clip-text text-transparent text-nowrap">
        {enrolledCourse}
      </h1>
    </div>
  )
}
