// import { useState } from "react"
// import CompletedCoursesCard from "./CompletedCoursesCard"
// import { COMPLETED_COURSES } from "@/constants";

// // const COMPLETED_COURSES = [
// //     {
// //         id:1,
// //         course:"WEB DEVELOPMENT",
// //         description:"Learn Full Stack Web Development: HTML/CSS, MySQL, PHP, JavaScript, and React and build a website from scratch!",
// //     },
// //     {
// //         id:2,
// //         course:"UI/UX",
// //         description:"Start Your UI/UX Career in 2024: Figma, Web & App Design Mastery with In-Depth UX Theories - From Novice to Advanced.",
// //     },
// //     {
// //         id:3,
// //         course:"APP DEVELOPMENT",
// //         description:"Learn XML and Kotlin and how to put them together to build your own Zomato, Instagram or any other app. Learn XML and Kotlin and how to put them together to build your own Zomato, Instagram or any other app. Learn XML and Kotlin and how to put them together to build your own Zomato, Instagram or any other app. Learn XML and Kotlin and how to put them together to build your own Zomato, Instagram or any other app.",
// //     }
// // ]


// export default function CompletedCoursesList() {
//     const [rate, setRate] = useState();
//     const rateHandler = (event) => {
//         setRate(event)
//         // console.log(rate)
//     }
//   return (<>
//     {COMPLETED_COURSES.map(({id,course,description}) => {
//         return(
//             <CompletedCoursesCard key={id} title={course} description={description} rate={rateHandler} current={rate} id={id}></CompletedCoursesCard>
//             )
//         })}
//         </>
//   )
// }
import { useState } from "react"
import CompletedCoursesCard from "./CompletedCoursesCard"
import Image from "next/image"
// import { COMPLETED_COURSES } from "@/constants";

// const COMPLETED_COURSES = [
//     {
//         id:1,
//         course:"WEB DEVELOPMENT",
//         description:"Learn Full Stack Web Development: HTML/CSS, MySQL, PHP, JavaScript, and React and build a website from scratch!",
//     },
//     {
//         id:2,
//         course:"UI/UX",
//         description:"Start Your UI/UX Career in 2024: Figma, Web & App Design Mastery with In-Depth UX Theories - From Novice to Advanced.",
//     },
//     {
//         id:3,
//         course:"APP DEVELOPMENT",
//         description:"Learn XML and Kotlin and how to put them together to build your own Zomato, Instagram or any other app. Learn XML and Kotlin and how to put them together to build your own Zomato, Instagram or any other app. Learn XML and Kotlin and how to put them together to build your own Zomato, Instagram or any other app. Learn XML and Kotlin and how to put them together to build your own Zomato, Instagram or any other app.",
//     }
// ]


export default function CompletedCoursesList({data}) {
    const [rate, setRate] = useState();
    const rateHandler = (event) => {
        setRate(event)
        // console.log(rate)
    }
  return (
    <div className="sm:ml-10 ml-0">
    <div className="absolute lg:h-[80rem] lg:w-[78rem] lg:top-[-180px] lg:left-[-250px] lg:block hidden -z-10">
        <Image src="/dashboard-ellipse1.svg" alt="Ellipse" height={100} width={80} className="absolute w-[80rem] h-[75rem] left-[13rem] top-[15rem] overflow-hidden lg:block hidden" />
    </div>
    <div className="flex flex-col z-1 mt-14 max-w-8xl mb-16">
        <div className="text-3xl font-popins font-bold bg-gradient-to-r text-white bg-clip-text mt-4 ml-10 z-20">COMPLETED COURSES</div>
        <br />
        <div className="z-1 flex flex-wrap md:flex-nowrap items-start justify-start gap-[20px] xl:gap-[40px] mt-16" style={{flexWrap: "wrap"}}>
    {data.map((course) => {
      const redirectUrl = `/learning-paths/${course.title}/${course.id}`;
        return(
            <CompletedCoursesCard key={course.id} title={course.title} description={course.description}  rate={rateHandler} current={rate} id={course.id} redirectUrl={redirectUrl}></CompletedCoursesCard>
            )
        })}
        </div>
        </div>
        </div>
  )
}