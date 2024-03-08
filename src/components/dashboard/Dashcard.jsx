"use client";

export default function DashCoursesCard({title, members}) {
    return (
        <>
            {/* <div className="">
            <div className="hover:shadow-[0_0_16px_3px_#4a0f87] hover:scale-105 hover:backdrop-blur-sm transition-all backdrop-blur-sm border-[1.5px] border-purple-500 rounded-xl cursor-pointer h-[100px] sm:h-[150px] md:h-[150px] lg:h-[175px] max-w-[350px] md:w-[250px] relative flex flex-col justify-between group object-cover overflow-hidden mx-3 my-3">
                <h2 className=" font-black md:text-[1rem] text-base bg-gradient-to-r from-white to-[#9d5ae3] bg-clip-text text-transparent">{title}</h2>

                <p className="text-white sm:mt-3 font-sans font-extralight sm:text-xs md:text-sm text-xs">{members} members enrolled</p>
            </div>
            </div> */}
            <div className="hover:shadow-[0_0_16px_3px_#4a0f87] hover:scale-105 hover:backdrop-blur-[10px] transition-all backdrop-blur-sm border-[1.5px] border-purple-500 rounded-xl cursor-pointer h-[50px] sm:h-[100px] md:h-[100px] lg:h-[100px] max-w-[350px] md:w-[250px] relative flex flex-col justify-between group object-cover overflow-hidden mx-3 my-3 z-20">
                <div className="relative">
                    {/* title div */}
                    <p className="sm:text-xl lg:text-xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 inline-block text-transparent bg-clip-text p-3 ">{title}</p>

                    {/* content div */}
                    <div className="p-4 sm:p-5">
                        <p className="text-white font-sans font-extralight sm:text-xs md:text-sm text-xs line-clamp-2">{members} members enrolled</p>
                    </div>
                </div>
            </div>
        </>
    );
}
