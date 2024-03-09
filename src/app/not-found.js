import React from "react";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <div className="relative h-screen overflow-hidden flex py-10 flex-col items-center justify-center flex-0 flex-auto lg:px-0">
                <div className="w-full h-full flex justify-center items-center my-auto">
                    <div className="flex flex-col items-center justify-center">
                        <Image src="/Error.svg" className="sm:w-100 sm:h-100 lg:w-200 lg:h-200" width={200} height={200} alt="Error Image" />
                        <h1 className="mt-2 text-center text-3xl">Error 404 - The resource you were looking for was not found..</h1>
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
            </div>
        </>
    );
}

// /* AlgoArena */

// position: absolute;
// width: 142px;
// height: 25px;
// left: calc(50% - 142px/2);
// top: 21px;

// font-family: 'The Bold Font';
// font-style: normal;
// font-weight: 700;
// font-size: 25px;
// line-height: 25px;
// /* identical to box height */

// color: #FFFFFF;
