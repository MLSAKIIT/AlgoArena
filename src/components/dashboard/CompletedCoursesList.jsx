import { useState } from "react"
import CompletedCoursesCard from "./CompletedCoursesCard"
import { COMPLETED_COURSES } from "@/constants";

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


export default function CompletedCoursesList() {
    const [rate, setRate] = useState();
    const rateHandler = (event) => {
        setRate(event)
        // console.log(rate)
    }
  return (<>
    {COMPLETED_COURSES.map(({id,course,description}) => {
        return(
            <CompletedCoursesCard key={id} title={course} description={description} rate={rateHandler} current={rate} id={id}></CompletedCoursesCard>
            )
        })}
        </>
  )
}
