"use client";

import Socials from "@/components/footer/Socials";
import Image from "next/image";
import Title from "../ui/Title";
import SortCourses from "./SortCourses";
import DashBoardDomains from "./DashBoardDomains";
import MoreCourses from "./MoreCourses";

export default function dashboard({ data }) {
  return (
    <>
      {/* <DashBoardDomains /> */}

      <div className="overflow-hidden min-h-screen top-auto flex-auto xl:max-w-full px-5 lg:max-w-7xl md:max-w-5xl justify-center items-center">
        <DashBoardDomains data={data} />
        <div className="CONTENT DIV flex flex-col mx-auto justify-between  xl:max-w-7xl md:max-w-5xl sm:max-w-4xl max-w-screen items-center">
          {/* TITLE 1 */}
          <div className="HEADING DIV md:mt-12 mt-6 overflow-hidden relative ">
            <Title text="MORE COURSES FOR YOU" />
          </div>

          {/* Sort courses for mobile devices */}
          <SortCourses />

          {/* Dashboard lower part */}
          <div className=" box-border lg:w-4/5  m-auto sm:auto-cols-max mt-12 lg:gap-32  md:gap-14 sm:gap-6 gap-3 sm:grid sm:grid-cols-3 lg:px-auto md:px-auto flex sm:overflow-visible overflow-scroll whitespace-nowrap no-scrollbar py-4 sm:w-11/12 w-screen ">
            <MoreCourses />
            {/* eclipse image */}
            <div className="absolute w-[55rem] h-[40rem] right-0 overflow-hidden lg:block hidden -z-20">
              <Image src="/dashboard-ellipse2.svg" alt="Ellipse" fill />
            </div>
          </div>

          {/* Footer part for phone devices */}
          <div className="sm:hidden visible overflow-hidden pt-32 sm:mb-[-25px] mb-4 w-screen min-w-[100vw] max-w-full z-30">
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
}
