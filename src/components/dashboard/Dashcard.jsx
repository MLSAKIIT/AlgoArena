"use client";
import Link from "next/link";

export default function DashCoursesCard({title, members, href}) {
    return (
        <>
            <Link
                href={href}
                className="hover:shadow-[0_0_16px_3px_#4a0f87] hover:scale-105 hover:backdrop-blur-[10px] transition-all backdrop-blur-sm border-[1.5px] border-purple-500 rounded-xl cursor-pointer h-[80px] sm:h-[130px] md:h-[130px] lg:h-[130px]  relative flex flex-col justify-start group object-cover overflow-hidden xl:basis-[29%] lg:basis-[27%] md:basis-[25%] sm:basis-[40%] basis-[30%] mx-3 my-3 z-20 px-4">
                <div className="relative flex flex-col justify-center items-center">
                    {/* title div */}
                    <h2 className="sm:text-[16px] md:mt-5 mt-3 lg:text-2xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 inline-block text-transparent bg-clip-text px-3">{title}</h2>

                    {/* content div */}
                    <div className="p-4 sm:p-5">
                        <p className="text-white font-sans font-extralight sm:text-xs md:text-sm text-xs line-clamp-2">{members} members enrolled</p>
                    </div>
                </div>
            </Link>
        </>
    );
}
