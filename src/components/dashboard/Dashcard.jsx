"use client"

import Link from "next/link";

export default function DashCoursesCard({ title,members,href }) {
  return (
        <Link href={href} className="box-border lg:min-w-[16rem] md:min-w-max sm:min-w-20 text-center self-center justify-self-center max-w-max lg:w-56 md:w-52 lg:py-8 lg:px-6 sm:py-4 sm:px-3 px-2 py-4 border-[#9d5ae3] rounded-xl border-2 hover:shadow-[0_0_16px_3px_#4a0f87] h-20 md:h-32 cursor-pointer z-30 hover:scale-105 transition-all duration-300 flex flex-col justify-center mx-5 backdrop-blur-sm">
          <h2 className=" font-black md:text-[1rem] sm:text-sm text-base bg-gradient-to-r from-white to-[#9d5ae3] bg-clip-text text-transparent">
            {title}
          </h2>
    
          <p className="text-white sm:mt-3 font-sans font-extralight sm:text-xs md:text-sm text-xs">
            {members} members enrolled
          </p>
        </Link>
  );
}

