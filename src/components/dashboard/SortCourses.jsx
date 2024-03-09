"use client"

import SortBox from "./SortBox"
import { MORE_COURSES } from "@/constants";


export default function SortCourses() {
  return (
    <div className="sm:hidden flex items-center  whitespace-nowrap max-w-screen-sm mx-auto ml-[40px] mt-16 z-30">
            <h3 className="text-white font-medium mr-3 ">Sort By: </h3>

            <div className="SORT DOMAINS DIV flex flex-wrap justify-start whitespace-nowrap gap-4">
              {MORE_COURSES.map(({id, course}) => {
                return (
                    <SortBox key={id} CourseName={course.trimEnd()}></SortBox>
                )
              })}
            </div>
          </div>
  )
}