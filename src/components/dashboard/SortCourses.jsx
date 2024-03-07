"use client"

import SortBox from "./SortBox"


const COURSES = [
  {
    id: 1,
    course:"APP DEVELOPMENT",
  },
  {
    id: 2,
    course:"UI/UX",
  },
  {
    id: 3,
    course:"CYBER SECURITY",
  },
  {
    id: 4,
    course:"AI ML",
  },
  {
    id: 5,
    course:"WEB DEVELOPMENT",
  },
  {
    id: 6,
    course:"CLOUD",
  },
]

export default function SortCourses() {
  return (
    <div className="sm:hidden flex items-center whitespace-nowrap max-w-screen-sm mx-auto mt-16 z-30">
            <h3 className="text-white font-medium mr-3 ">Sort By: </h3>

            <div className="SORT DOMAINS DIV flex overflow-scroll  justify-between whitespace-nowrap  ">
              {COURSES.map(({id, course}) => {
                return (
                    <SortBox key={id} CourseName={course}></SortBox>
                )
              })}
            </div>
          </div>
  )
}