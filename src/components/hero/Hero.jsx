import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="lg:pt-32 pt-10 mb-10 lg:h-96 lg:mb-32 block max-w-7xl mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap justify-evenly mid:gap-x-10/ md:gap-20 mid:mx-4 items-center lg:mx-auto">
          <div className="relative">
            <div className="font-bold font-the_bold_font text-white lg:text-4xl text-xl mid:text-2xl text-center mid:text-start">
              EXPLORE NEW
            </div>
            <div className="font-bold font-the_bold_font bg-gradient-horizon bg-clip-text text-[transparent] lg:text-4xl mb-1 text-xl mid:text-2xl  mid:text-start mid:hidden block text-center">
              HORIZON
            </div>
            <div className="flex">
              <div className="font-bold font-the_bold_font bg-gradient-horizon bg-clip-text text-[transparent] lg:text-4xl mb-1 text-xl mid:text-2xl  mid:text-start hidden mid:flex">
                HORIZON
              </div>
              <Image
                src="/dash.svg"
                alt="dash"
                height={100}
                width={24}
                className="w-[100px] mid:w-[200px] lg:w-[22rem] ml-2 hidden mid:flex"
              />
            </div>

            <div className="font-[400] font-poppins text-[white] lg:text-xl text-md lg:ml-1 mid:text-xl">
              Learn Anything, Anytime, Anywhere
            </div>
            <div className="absolute lg:h-[42.3rem] lg:w-[70rem] lg:top-[-180px] lg:left-[-250px] overflow-hidden rotate-[-15deg] lg:block hidden">
              <Image
                src="/Ellipse3.svg"
                alt="Ellipse"
                height={100}
                width={24}
                className="absolute w-[80rem] h-[75rem] left-[-12rem] top-[0px] overflow-hidden opacity-60 lg:block hidden "
              />
            </div>
            <div className="absolute h-[20rem] w-[68.0625rem] top-[80px] left-[-250px] overflow-hidden rotate-[2deg] z-1 lg:block hidden">
              <Image
                src="/Ellipse3.svg"
                alt="Ellipse"
                height={100}
                width={24}
                className="absolute w-[68.0625rem] h-[56.5rem] left-[-12rem] top-[-10px] overflow-hidden opacity-50"
              />
            </div>

            <div className="absolute h-[17rem] w-[51.5rem] top-[150px] left-[-250px] overflow-hidden rotate-[-5deg] z-1 lg:block hidden">
              <Image
                src="/Ellipse3.svg"
                alt="Ellipse"
                height={100}
                width={24}
                className="absolute w-[51.5rem] h-[44.5rem] left-[-12rem] top-[0px] overflow-hidden opacity-50"
              />
            </div>
          </div>
          <div className="relative rounded-full bg-gradient-hero-img h-[170px] w-[170px] lg:mt-0 mt-9 lg:h-[18rem] lg:w-[22rem] mid:h-52 mid:w-52">
            <Image
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] h-[170px] w-[170px] lg:h-[18rem] lg:w-[22rem] mid:h-52 mid:w-52"
              src="/Objects.svg"
              alt="objects"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
