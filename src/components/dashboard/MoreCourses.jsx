"use client"
import { MORE_COURSES } from "@/constants";
import DashCoursesCard from "./Dashcard";
import { useEffect, useState } from "react";
// import { getMoreCoursesData } from "@/actions/getMoreCourses";

export default function MoreCourses() {
  // const [data,setData] = useState(null);
  // useEffect(()=> {
  //    getMoreCoursesData().then(res => {
  //     setData(res);
  //   }).then(() => console.log(data))
    
     
  // },[])

  return (
    <>
      {MORE_COURSES.map(({ id, course, members, href }) => {
        return (
          <DashCoursesCard
            key={id}
            title={course}
            members={members}
            href={href}
          />
        );
      })}
    </>
  );
}

//  {
//      data && data.enrolledCourses
//          ? data.enrolledCourses.map((course) => <DomainCard key={course.id} title={course.title} content={course.description} progress={course.progress} redirectURL={course.redirectURL} />)
//          : null;
//  }
