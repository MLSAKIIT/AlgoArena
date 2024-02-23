"use client"

export default function DashCoursesCard({ title,members }) {
  return (
        <div className="box-border lg:min-w-48 md:min-w-32 sm:min-w-20 text-center self-center justify-self-center max-w-max lg:py-8 lg:px-12 sm:py-4 sm:px-5 px-6 py-4 border-[#9d5ae3] rounded-xl border-2 hover:shadow-[0_0_16px_3px_#4a0f87] h-20 md:h-32 cursor-pointer z-30 hover:scale-105 transition-all duration-300 flex flex-col justify-center mx-5 hover:backdrop-blur-sm">
          <h1 className=" font-black sm:text-2xl bg-gradient-to-r from-white to-[#9d5ae3] bg-clip-text text-transparent">
            {title}
          </h1>
    
          <p className="text-white sm:mt-3  font-sans font-extralight sm:text-xs md:text-sm text-xs">
            {members} members enrolled
          </p>
        </div>
  );
}
