import DashCoursesCard from "./Dashcard";

const MORE_COURSES = [
    {
        id: 1,
        course: "APP DEVELOPMENT",
        members: 99999,
    },
    {
        id: 2,
        course: "UI/UX",
        members: 99999,
    },
    {
        id: 3,
        course: "AI ML",
        members: 99999,
    },
    {
        id: 4,
        course: "CYBER SECURITY",
        members: 99999,
    },
    {
        id: 5,
        course: "DSA",
        members: 99999,
    },
    {
        id: 6,
        course: "WEB DEVELOPMENT",
        members: 99999,
    },
];

export default function MoreCourses() {
    return (
        <>
            {MORE_COURSES.map(({id, course, members}) => {
                return <DashCoursesCard key={id} title={course} members={members}></DashCoursesCard>;
            })}
        </>
    );
}

//  {
//      data && data.enrolledCourses
//          ? data.enrolledCourses.map((course) => <DomainCard key={course.id} title={course.title} content={course.description} progress={course.progress} redirectURL={course.redirectURL} />)
//          : null;
//  }
