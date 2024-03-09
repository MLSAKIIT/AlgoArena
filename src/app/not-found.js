"use client";

import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    const [countdown, setCountdown] = useState(9);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         if (countdown >= 1) {
    //             setCountdown(countdown - 1);
    //         } else {
    //             clearInterval(timer);
    //             window.location.href = "/";
    //         }
    //     }, 1000);

    //     return () => clearInterval(timer);
    // }, [countdown]);

    return (
        <>
            <div className="h-screen flex py-10 flex-col items-center justify-center flex-0 flex-auto lg:px-0">
                <div className="w-full flex justify-center items-center  border-2 border-color-2 sm:w-1/5 sm:h-4/6 mx-auto my-auto">
                    <div className=" box-border mt-8 grid place-items-center py-1 px-1 bg-[#9d5ae3] text-white w-40 h-14 rounded-full shadow-[0_0_1rem_0px_#9d5ae3] text-xl  outline-none border-none [text-shadow:_0px_0px_5px_rgb(0_0_0)] cursor-pointer hover:bg-[#7f3dbf] active:scale-95 transition duration-200">
                        <Image src="/Error.svg" className="sm:w-100 sm:h-100 lg:w-200 lg:h-200" width={200} height={200} alt="Error Image" />
                        <h1 className="mt-2 text-center text-2xl md:text-3xl text-wrap">The resource you were looking for was not found..</h1>
                    </div>
                </div>

                {/* Background */}
                <Image
                    src="/assets/icons/Ellipse3.svg"
                    alt="Ellipse"
                    height={100}
                    width={24}
                    className="fixed min-[1536px]:hidden -z-10 w-[80rem] h-[75rem] left-[-20rem] top-[5rem] opacity-60 lg:block hidden "
                />
                <Image
                    src="/assets/icons/Ellipse3.svg"
                    alt="Ellipse"
                    height={100}
                    width={24}
                    className="fixed min-[1536px]:hidden -z-10 w-[68.0625rem] h-[56.5rem] left-[-16rem] top-[16rem] opacity-50 lg:block hidden"
                />
                <Image
                    src="/assets/icons/Ellipse3.svg"
                    alt="Ellipse"
                    height={100}
                    width={24}
                    className="fixed min-[1536px]:hidden -z-10 w-[51.5rem] h-[44.5rem] left-[-10rem] top-[24rem] overflow-hidden opacity-50 lg:block hidden"
                />
                <div className="fixed min-[1536px]:hidden -z-10 w-[15rem] h-[15rem] left-[5rem] bg-color-2 rounded-full blur-2xl bottom-[-10rem] opacity-50 lg:block hidden" />
                <div className="mt-8 text-center text-xl text-white">Redirecting in {countdown}..</div>
            </div>
        </>
    );
}
