"use client"

import SortBox from "./SortBox"

const courses = ["APP DEVELOPMENT","UI/UX","APP DEVELOPMENT","UI/UX","APP DEVELOPMENT","UI/UX"]


export default function SortCourses() {
  return (
    <div className="sm:hidden flex items-center whitespace-nowrap max-w-[88%] mx-auto mt-16 z-30">
            <h3 className="text-white font-medium mr-3 ">Sort By: </h3>

            <div className="SORT DOMAINS DIV flex overflow-scroll  justify-between whitespace-nowrap no-scrollbar ">
              {courses.map((course) => {
                return (
                    <SortBox CourseName={course}></SortBox>
                )
              })}
            </div>
          </div>
  )
}