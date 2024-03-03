"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const onClick = () => {
    setOpen(!open);
  };

  return (
    <>
<<<<<<< HEAD
      <div className="lg:flex lg:justify-between min-w-screen max-w-[120rem] lg:p-6 hidden z-10">
        <div className="top-0 w-3/6 min-w-[800px] max-w-[900px] flex g-8 justify-between items-baseline text-sm  pr-10 ">
=======
      <div className="2xl:px-20 lg:flex lg:justify-between min-w-screen max-w-[120rem] lg:p-6 hidden z-10">
        <div className="2xl:justify-start 2xl:gap-24 2xl:pr-24 2xl:max-w-full 2xl:w-full top-0 w-3/6 min-w-[800px] max-w-[900px] flex g-8 justify-between items-baseline text-sm ">
>>>>>>> 791a53178a87f377a7dc0b8d74f8894b5fac48b5
          <Link
            href="/"
            className="text-white  font-extrabold flex text-xl p-0 m-0  "
          >
            AlgoArena
          </Link>
          <Link
            href="/"
            className={`flex 2xl:ml-auto justify-center text-white  gap-2 hover:bg-gradient-horizon hover:bg-clip-text hover:text-transparent ${
              usePathname() === "/"
                ? "border-2 border-color-3 shadow-[0_0_1rem_0px_#9d5ae3] pr-4 pl-4  pt-2 pb-2 rounded bg-color-4 bg-opacity-25 text-transparent backdrop-blur-sm"
                : ""
            }`}
          >
            <Image
              src="/assets/icons/home_fill.svg"
              alt="AlgoArena"
              width={20}
              height={20}
              className="relative bottom-[2px]"
            />
            Home
          </Link>
          <Link
            href="/learningPath"
            className={`flex justify-center text-white  gap-2 hover:bg-gradient-horizon hover:bg-clip-text hover:text-transparent ${
              usePathname() === "/learningPath"
                ? "border-2 border-color-3 pr-4 pl-4 shadow-[0_0_1rem_0px_#9d5ae3] pt-2 pb-2 rounded bg-color-4 bg-opacity-25 text-transparent backdrop-blur-sm"
                : ""
            }`}
          >
            <Image src="/assets/icons/lp.png" alt="AlgoArena" width={18} height={18} />
            Learning Path
          </Link>

          <Link
            href="/community"
            className={`flex justify-center text-white pr-2 pl-2 pt-4 pb-4 gap-2 hover:bg-gradient-horizon hover:bg-clip-text hover:text-transparent ${
              usePathname() === "/community"
                ? "border-2 border-color-3 pr-4 pl-4  shadow-[0_0_1rem_0px_#9d5ae3] rounded bg-color-4 bg-opacity-25 text-transparent backdrop-blur-sm"
                : ""
            }`}
          >
            <Image
              src="/assets/icons/community.png"
              alt="AlgoArena"
              width={18}
              height={18}
            />
            Community
          </Link>
          <Link
<<<<<<< HEAD
            href="/aboutUs"
            className={`flex justify-center text-white  gap-2 hover:bg-gradient-horizon hover:bg-clip-text hover:text-transparent ${
              usePathname() === "/aboutUs"
                ? "border-2 border-color-3  rounded shadow-[0_0_1rem_0px_#9d5ae3] pr-4 pl-4  pt-2 pb-2  bg-color-4 bg-opacity-25 text-transparent backdrop-blur-sm"
=======
            href="/about"
            className={`flex 2xl:mr-auto justify-center text-white  gap-2 hover:bg-gradient-horizon hover:bg-clip-text hover:text-transparent ${
              usePathname() === "/about"
                ? "border-2 border-color-3 pr-8 pl-8 pt-2 pb-2 rounded shadow-[0_0_1rem_0px_#9d5ae3]  bg-color-4 bg-opacity-25 text-transparent backdrop-blur-sm"
>>>>>>> 791a53178a87f377a7dc0b8d74f8894b5fac48b5
                : ""
            }`}
          >
            <Image src="/assets/icons/about.png" alt="AlgoArena" width={18} height={18} />
            About US
          </Link>
        </div>
        <button className="bg-color-2  text-white pr-5 shadow-[0_0_1rem_0px_#9d5ae3] pl-5 pt-1 pb-1 rounded-xl hover:bg-gradient-to-r from-color-2 to-color-3 transition-all duration-200">
          Login
        </button>
      </div>
      <div className="flex justify-between p-6  w-screen lg:hidden ">
        <Image
          src="/assets/icons/menu.svg"
          alt="Ellipse"
          height={20}
          width={20}
          className="text-[white]"
          onClick={onClick}
        />
        <Link href="/" className="text-[white] font-extrabold flex text-xl ">
          AlgoArena
        </Link>
      </div>
      <div
        className={`fixed top-0 left-0 w-3/5 h-full z-10  lg:hidden bg-[white] bg-opacity-25 text-transparent backdrop-blur-sm border-white border-opacity-25 border transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Image
          src="/assets/icons/close.svg"
          alt="Close"
          width={20}
          height={20}
          onClick={onClick}
          className="absolute top-0 right-0 m-4"
        />

        <div className="mt-40 ">
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>

          <Link
            href="/"
            className="flex  text-[white]  gap-2 px-4 py-2 mr-6 ml-6 rounded hover:bg-color-3"
          >
            <Image
              src="/assets/icons/home_fill.png"
              alt="AlgoArena"
              width={20}
              height={10}
            />
            Home
          </Link>
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>
          <Link
            href="/"
            className="flex  text-[white]  gap-2 px-4 py-2 mr-6 ml-6 hover:bg-color-3"
          >
            <Image src="/assets/icons/lp.png" alt="AlgoArena" width={20} height={10} />
            Learning Path
          </Link>
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>
          <Link
            href="/about-us"
            className="flex  text-[white]  gap-2 px-4 py-2 mr-6 ml-6  hover:bg-color-3"
          >
            <Image
              src="/assets/icons/community.png"
              alt="AlgoArena"
              width={20}
              height={10}
            />
            Community
          </Link>
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>
          <Link
            href="/about-us"
            className="flex  text-white gap-2 px-4 py-2 mr-6 ml-6 hover:bg-color-3"
          >
            <Image src="/assets/icons/about.png" alt="AlgoArena" width={20} height={10} />
            About US
          </Link>
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>
          <button className="bg-color-2 text-[white] pr-5 pl-5 pt-1 pb-1 mr-6 ml-6 rounded-full hover:bg-gradient-to-r from-color-2 to-color-4">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
