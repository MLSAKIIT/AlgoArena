"use client";

import { useState } from "react";
import SortBox from "./SortBox";
import { MORE_COURSES } from "@/constants";

export default function SortCourses() {
  const [seeAll, setSeeAll] = useState(false);
  const onClick = () => {
    setSeeAll(!seeAll);
  };
  return (
    <div
      className={`sm:hidden flex flex-col items-center  whitespace-nowrap max-w-screen-sm mx-auto mt-16 z-30 overflow-hidden
    ${seeAll ? "h-auto" : "h-[120px]"}
    `}
    >
      <div className="flex justify-between w-[92%]">
        <h3 className="text-white  font-medium mr-3 mb-4 ">Sort By: </h3>
        <h3
          onClick={onClick}
          className={`text-color-3 text-sm font-light mr-3 mb-4 `}
        >
          See {`${seeAll ? "less" : "more"}`}
        </h3>
      </div>
      <div className="SORT DOMAINS  DIV flex flex-wrap justify-center whitespace-nowrap gap-4">
        {MORE_COURSES.map(({ id, course, href }) => {
          return (
            <SortBox
              key={id}
              CourseName={course.trimEnd()}
              href={href}
            ></SortBox>
          );
        })}
      </div>
          
    </div>
  );
}
