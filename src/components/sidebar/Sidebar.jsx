"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgPlayButtonR } from "react-icons/cg";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { FaRegSquareCheck } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoBookmarkOutline } from "react-icons/io5";
import { PiPath } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import Image from "next/image";
import vector from "../../../public/assets/icons/Vector.svg";
import { useState } from "react";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  const session = useSession();
    const username = session.data ? session.data.user.name : "User";

  return (
    <>
        <div className="absolute md:static flex justify-between p-6 w-screen lg:hidden ">
          <IoMenuOutline onClick={onClick} className={`left-0 z-50`} size={50} />
        </div>
      <div
        className={`fixed top-0 left-0 overflow-hidden w-4/5 md:w-[38%] lg:w-[20%] xl:w-1/5 2xl:w-1/5 h-full z-[99] bg-[#161a33] sm:px-1 px-7 text-transparent border-r-2 border-color-3 min-h-max border transform duration-300 translate-x-0 lg:visible ${
            // open ? "translate-x-0" : "-translate-x-full"
            open ? "visible" : "invisible"
          }`}
      >

        <div className="sm:mt-5  mt-7">
          {/* NAME  */}
          <div
            className={`${
              open ? "" : "invisible"
            } lg:hidden overflow-hidden flex visible mt-12 mb-7 px-5`}
          >
            <h2
              className={` font-semibold font-popins self-center text-[30px] text-white`}
            >
              {username}
            </h2>
            <Image src={vector} className="ml-3 self-center w-[100px]  " />
          </div>

          <div className="absolute top-0 right-0 z-30 text-slate-600 m-4">
            <IoMdClose onClick={onClick} className="h-[40px] w-[40px] z-50 lg:hidden" />
          </div>

          <Link
            href="/"
            onClick={onClick}
            className={`flex items-center text-nowrap font-bold gap-2 sm:-px-4 px-4 sm:px-[9px] md:px-4 py-2 text-center md:mx-2 sm:mx-2 mx-4  hover:bg-white hover:text-color-2 sm:text-[14px] 2xl:text-2xl lg:text-[24px] text-[15px]  rounded-xl sm:my-4 my-6
                ${
                  usePathname() === "/"
                    ? "border-2  border-color-2 text-color-2"
                    : "text-white"
                } 
            `}
          >
            AlgoArena
          </Link>

          <Link
            href="/"
            onClick={onClick}
            className={`flex items-center text-nowrap font-medium gap-2 sm:-px-4 px-4 sm:px-[9px] md:px-4 py-2 md:mx-2 sm:mx-2 mx-4  hover:bg-color-2 hover:text-white sm:text-[14px] 2xl:text-xl lg:text-[14px] text-[15px] rounded-xl my-4
                ${
                  usePathname() === "/"
                    ? "border-2  border-color-2 text-color-2"
                    : "text-white "
                } 
            `}
          >
            < IoHomeOutline/>
            Home
          </Link>

          <Link
            href="/dashboard"
            onClick={onClick}
            className={`flex items-center text-nowrap font-medium gap-2 sm:-px-4 px-4 sm:px-[9px] md:px-4 py-2 md:mx-2 sm:mx-2 mx-4  hover:bg-color-2 hover:text-white sm:text-[14px] 2xl:text-xl lg:text-[14px] text-[15px] rounded-xl my-4
                ${
                  usePathname() === "/dashboard"
                    ? "border-2  border-color-2 text-color-2"
                    : "text-white "
                } 
            `}
          >
            <CgPlayButtonR />
            Your Courses
          </Link>

          <Link
            href="/create-post"
            onClick={onClick}
            className={`flex items-center text-nowrap font-medium gap-2 sm:-px-4 px-4 sm:px-[9px] md:px-4 py-2 md:mx-2 sm:mx-2 mx-4  hover:bg-color-2 hover:text-white sm:text-[14px] 2xl:text-xl lg:text-[14px] text-[15px] rounded-xl my-4
                ${
                  usePathname() === "/create-post"
                    ? "border-2  border-color-2 text-color-2"
                    : "text-white"
                } 
            `}
          >
            <BsFileEarmarkPostFill />
            Create Post
          </Link>

          <Link
            href="/dashboard/completed-courses"
            onClick={onClick}
            className={`flex items-center text-nowrap font-medium gap-2 sm:-px-4 px-4 sm:px-[9px] md:px-4 py-2 md:mx-2 sm:mx-2 mx-4  hover:bg-color-2 hover:text-white sm:text-[14px] 2xl:text-xl lg:text-[14px] text-[15px]  rounded-xl my-4
                ${
                  usePathname() === "/dashboard/completed-courses"
                    ? "border-2  border-color-2 text-color-2"
                    : "text-white"
                } 
            `}
          >
            <FaRegSquareCheck />
            Completed Courses
          </Link>

          <Link
            href="/dashboard/saved-courses"
            onClick={onClick}
            className={`flex items-center text-nowrap font-medium gap-2 sm:-px-4 px-4 sm:px-[9px] md:px-4 py-2 md:mx-2 sm:mx-2 mx-4  hover:bg-color-2 hover:text-white sm:text-[14px] 2xl:text-xl lg:text-[14px] text-[15px] rounded-xl my-4
                ${
                  usePathname() === "/dashboard/saved-courses"
                    ? "border-2  border-color-2 text-color-2"
                    : "text-white"
                } 
            `}
          >
            <IoBookmarkOutline />
            Saved Courses
          </Link>

          <Link
            href="/community"
            onClick={onClick}
            className={`flex items-center text-nowrap font-medium gap-2 sm:-px-4 px-4 sm:px-[9px] md:px-4 py-2 md:mx-2 sm:mx-2 mx-4  hover:bg-color-2 hover:text-white sm:text-[14px] 2xl:text-xl lg:text-[14px] text-[15px] rounded-xl my-4
                ${
                  usePathname() === "/community"
                    ? "border-2  border-color-2 text-color-2"
                    : "text-white"
                } 
            `}
          >
            <LuLayoutDashboard />
            Posts
          </Link>

          <Link
            href="/dashboard/create-path"
            onClick={onClick}
            className={`flex items-center text-nowrap font-medium gap-2 sm:-px-4 px-4 sm:px-[9px] md:pl-4 md:pr-2 py-2 md:mx-2 sm:mx-2 mx-4  hover:bg-color-2 hover:text-white sm:text-[14px] 2xl:text-xl lg:text-[14px] text-[15px] rounded-xl my-4
                ${
                  usePathname() === "/dashboard/create-path"
                    ? "border-2  border-color-2 text-color-2"
                    : "text-white"
                } 
            `}
          >
            <PiPath />
            Create Your Path
          </Link>

          {/* sign out  */}
            
          <Link
            href="/sign-out"
            className={`rounded-xl bg-color-3 text-white hover:bg-color-2 px-4 py-2 my-6 md:mx-6 sm:mx-4 mx-6`}
          >
            Sign Out
          </Link>
          
           
        </div>
      </div>
    </>
  );
};

export default Sidebar;
