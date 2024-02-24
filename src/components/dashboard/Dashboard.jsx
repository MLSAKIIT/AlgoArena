"use client"

import Socials from "@/components/footer/Socials";
import Image from "next/image";
import DashCoursesCard from "./Dashcard";
import Title from "../ui/Title";
import SortCourses from "./SortCourses";


export default function Dashboard() {
  return (
    
      <div className="overflow-hidden min-h-screen top-auto flex-auto xl:max-w-full  px-5 lg:max-w-7xl md:max-w-5xl">
        <div className="relative">
          <div className="absolute md:h-[75rem] md:w-[75rem] sm:h-[67rem] sm:w-[47rem] lg:top-[-180px] md:top-0 sm:top-[-20px] 2xl:left-[-80px] lg:left-[-250px] left-[-270px] overflow-hidden lg:rotate-[0deg] md:rotate-[10deg] sm:rotate-[-20deg] rotate-0 lg:block h-[60rem] w-[40rem]">
            <Image
              src="/Ellipse3.svg"
              alt="Ellipse"
              height={100}
              width={24}
              className="absolute lg:w-[55rem] md:w-[51rem] sm:w-[46rem] w-[40rem] lg:h-[90rem] md:h-[71rem] sm:h-[50rem] h-[49rem] md:left-[0rem] top-[0px] overflow-hidden opacity-60 block  "
            />
          </div>
          <div className="absolute h-[50rem] sm:h-[89rem] w-[68.0625rem] md:top-[80px] top:[60px] 2xl:left-[-140px] left-[-250px] overflow-hidden md:rotate-[-10deg] rotate-[-6deg] z-1 lg:block ">
            <Image
              src="/Ellipse3.svg"
              alt="Ellipse"
              height={100}
              width={24}
              className="absolute md:w-[69.0625rem] w-[60rem] md:h-[50.5rem] sm:h-[45rem] h-[38rem] sm:left-[-12rem] left-[-16rem]  md:top-[-10px] top-[35px] overflow-hidden opacity-50"
            />
          </div>
          <div className="absolute h-[77rem] w-[51.5rem] sm:top-[150px] top-[40px] left-[-250px] overflow-hidden rotate-[-5deg] z-1 lg:block">
            <Image
              src="/Ellipse3.svg"
              alt="Ellipse"
              height={100}
              width={24}
              className="absolute md:w-[66rem] sm:w-[50rem] w-[30rem] md:h-[40rem] sm:h-[35rem] h-[40rem] sm:left-[-12rem] left-[-4rem] top-[0px] overflow-hidden opacity-50"
            />
          </div>
        </div>

        <div className="CONTENT DIV flex flex-col mx-auto justify-between  xl:max-w-7xl md:max-w-5xl sm:max-w-4xl  items-center">
          {/* TITLE 1 */}
          <div className="HEADING DIV md:mt-12 mt-6 overflow-hidden relative ">
            <Title text="MORE COURSES FOR YOU" />
          </div>

        <SortCourses></SortCourses>

          <div className=" box-border lg:w-4/5 m-auto sm:auto-cols-max mt-12 gap-6 sm:grid sm:grid-cols-3 lg:px-auto md:px-auto flex sm:overflow-visible  overflow-scroll whitespace-nowrap no-scrollbar py-4 w-11/12 ">
            <DashCoursesCard title="WEB DEVELOPMENT" members="99999"></DashCoursesCard>
            <DashCoursesCard title="UI/UX" members="99999"></DashCoursesCard>
            <DashCoursesCard title="UI/UX" members="99999"></DashCoursesCard>
            <DashCoursesCard title="UI/UX" members="99999"></DashCoursesCard>
            <DashCoursesCard title="APP DEVELOPMENT" members="99999"></DashCoursesCard>
            <DashCoursesCard title="UI/UX" members="99999"></DashCoursesCard>
          </div>

          <div className="overflow-hidden pt-32 sm:mb-[-25px] mb-5 w-screen min-w-[100vw] max-w-full z-30">
            <Socials></Socials>
          </div>
        </div>
      </div>
  );
}