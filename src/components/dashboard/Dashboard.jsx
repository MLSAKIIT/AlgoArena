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

          <div className="overflow-hidden min-h-screen top-auto flex-auto xl:max-w-full px-5 lg:max-w-7xl md:max-w-5xl items-center">
              <DashBoardDomains data={data} />
              <div className="flex flex-col  xl:max-w-7xl md:max-w-5xl sm:max-w-4xl max-w-screen">
                  {/* TITLE 1 */}
                  {/* <div className="HEADING DIV md:mt-12 mt-6 overflow-hidden relative">
                        <Title text="MORE COURSES FOR YOU" />
                    </div> */}
                  <div className="text-4xl flex bg-gradient-videos text-transparent bg-clip-text font-popins font-[700] mt-10 lg:ml-[69px] w-[350px]">MORE COURSES FOR YOU</div>

                  {/* Sort courses for mobile devices */}
                  <SortCourses />

                  {/* Dashboard lower part */}
                  {/* <div className=" box-border m-auto sm:auto-cols-max mt-12 gap-60 sm:grid sm:grid-cols-3 lg:px-auto md:px-auto flex sm:overflow-visible overflow-scroll whitespace-nowrap no-scrollbar py-4  "> */}
                  <div
                      className="z-1 flex flex-wrap sm:auto-cols-max md:flex-nowrap items-center justify-start gap-[30px] xl:gap-[20px] mt-16 sm:overflow-hidden overflow-scroll md:ml-2 whitespace-nowrap no-scrollbar py-4  "
                      style={{flexWrap: "wrap"}}>
                      <MoreCourses />
                      {/* eclipse image */}
                      <div className=" -z-10 absolute w-[55rem] h-[40rem] right-0 overflow-hidden lg:block hidden pointer-events-none">
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
