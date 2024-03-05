import Image from "next/image";
import CircularProgress from "@mui/joy/CircularProgress";
import React, { useState, useEffect } from "react";

const LearningPathHeader = ({ header, videos }) => {
  const [counter, setCounter] = useState(0);
  const color = "success";
  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === 65) {
        clearInterval(interval);
      } else {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <>
      <div className="relative h-full min-w-screen max-w-[180rem] ">
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
            <div className="w-3/2 xs:w-1/2 text-xss xs:text-xs md:w-3/12 lg:w-3/12  max-w-md sm:w-50 text-white">
              {header.description}
            </div>

            <div className="flex  mt-1">
              <div className="mx-8 flex gap-2 my-2 items-center text-xss xs:text-xs text-white">
                <div className="relative ">
                  <CircularProgress
                    sx={{
                      "--CircularProgress-progressThickness": "6px",
                      "--CircularProgress-trackThickness": "5px",
                      "--CircularProgress-size": "45px",
                    }}
                    determinate
                    size="sm"
                    thickness={3}
                    variant="plain"
                    color={color}
                    value={counter}
                  />

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src={"/assets/icons/progress.png"}
                      alt="progress"
                      height={15}
                      width={15}
                    />
                  </div>
                </div>
                <div>Your Progress</div>
              </div>
            </div>
          </div>

          <div className="flex  gap-6 sm:mt-3 md:mt-2 lg:mt-1">
            <div className="flex gap-2">
              <Image
                src={"/assets/icons/play.png"}
                height={5}
                width={15}
                alt="play-bttn"
              />
              <p className="text-xss xs:text-xs font-extralight">
                {videos} Videos
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src={"/assets/icons/time.png"}
                height={5}
                width={15}
                alt="time-img"
              />
              <p className="text-xss xs:text-xs font-extralight">
                {header.time} hours
              </p>
            </div>
          </div>
          <div className="flex my-3 gap-2">
            <div>
              <Image
                src={"/assets/icons/user.png"}
                alt="user"
                height={15}
                width={15}
              />
            </div>
            <div>
              <p className="text-xss xs:text-xs">
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
