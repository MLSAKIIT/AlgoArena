"use client";
import Link from "next/link";

export default function DashCoursesCard({title, members, href}) {
    return (
        <>
            <Link
                href={href}
                className="hover:shadow-[0_0_16px_3px_#4a0f87] hover:scale-105 hover:backdrop-blur-[10px] transition-all backdrop-blur-sm border-[1.5px] border-purple-500 rounded-xl cursor-pointer min-h-max  sm:h-[130px] md:h-[130px] lg:h-[130px] h-[110px] relative flex flex-col justify-center group object-cover overflow-hidden xl:basis-[29%] lg:basis-[27%] md:basis-[27%] sm:basis-[40%] basis-[70%] mx-3 my-3  px-3 sm:py-5 py-3 z-50">
                <div className="relative flex flex-col justify-center items-center">
                    {/* title div */}
                    <h2 className="sm:text-[16px] text-[20px] lg:text-[20px] font-sans font-bold bg-gradient-to-r from-white to-purple-500 inline-block text-transparent bg-clip-text px-3">{title}</h2>

                    {/* content div */}
                    <div className="pt-3 sm:pt-5 ">
                        <p className="text-white font-sans font-extralight sm:text-xs md:text-sm text-nowrap text-xs line-clamp-2">{members} members enrolled</p>
                    </div>
                </div>
            </Link>
        </>
    );
}
