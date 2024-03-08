import { MORE_COURSES } from "@/constants";
import DashCoursesCard from "./Dashcard";

export default function MoreCourses() {
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
