import React from "react";
import Image from "next/image";

const LearningPathHeader = ({ header, videos }) => {
  return (
    <>
      <div className="relative h-full min-w-screen max-w-[200rem] ">
        <div
          className="absolute inset-0   h-[20 rem] sm:h-[30rem] md[40rem] bg-left-top bg-no-repeat bg-blend-normal"
          style={{
            backgroundImage: `url('/assets/domain/circular.png')`,
            backgroundSize: "contain",
          }}
        ></div>
        <div className="mx-10 text-xs mix-blend-exclusion">
          <div className="">
            <p className=" xs:text-3xl text-2xl font-san font-bold bg-gradient-to-r from-white to-purple-900 inline-block text-transparent bg-clip-text my-1">
              {header.title}
            </p>
            <div className="bg-gradient-to-r from-purple-900 to-bg-purple-400 h-[0.180rem] w-1/4"></div>
          </div>
          <div className="mt-5  md:flex md:justify-between">
            <div className="w-3/2 xs:w-1/2 text-xss xs:text-xs md:w-2/6  max-w-md sm:w-50 font-medium text-white">
              {header.description}
            </div>

            <div className="flex my-5">
              <div>
                <Image
                  src={"/assets/icons/progress.png"}
                  alt="progress"
                  height={15}
                  width={15}
                />
              </div>
              <div className="mx-8 text-xss xs:text-xs text-white font-medium">
                Your Progress
              </div>
            </div>
          </div>

          <div className="flex gap-6 sm:mt-5 md:mt-2 lg:mt-1">
            <div className="flex gap-2">
              <Image
                src={"/assets/icons/play.png"}
                height={5}
                width={15}
                alt="play-bttn"
              />
              <p className="text-xss xs:text-xs font-bold">{videos} Videos</p>
            </div>
            <div className="flex gap-2">
              <Image
                src={"/assets/icons/time.png"}
                height={5}
                width={15}
                alt="time-img"
              />
              <p className="text-xss xs:text-xs font-bold">
                {header.time} hours
              </p>
            </div>
          </div>
          <div className="flex my-5 gap-2">
            <div>
              <Image
                src={"/assets/icons/user.png"}
                alt="user"
                height={15}
                width={15}
              />
            </div>
            <div>
              <p className="text-xss font-medium xs:text-xs">
                Created by {header.createdBy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningPathHeader;
