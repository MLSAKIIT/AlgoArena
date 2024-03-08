import React from "react";
import StaredCourseCard from "./StaredCourseCard";

const StaredCourse = ({ data }) => {
  return (
    <div className="max-w-7xl mt-4 mx-auto mb-10">
      <div className="font-popins text-4xl font-[900] bg-gradient-course bg-clip-text text-transparent  hidden md:block w-[400px]">
        Your Stared Courses
      </div>
      <div className="font-popins text-4xl font-[900] bg-gradient-course bg-clip-text text-transparent block md:hidden">
        Stared Courses
      </div>
      <div className="my-9">
        {data.map((course, i) => (
          <StaredCourseCard key={i} course={course} />
        ))}
      </div>
    </div>
  );
};

export default StaredCourse;
