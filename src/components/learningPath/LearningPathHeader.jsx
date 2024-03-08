"use client";

import Image from "next/image";
import CircularProgress from "@mui/joy/CircularProgress";
import React, { useState, useEffect } from "react";
import { Play, User } from "lucide-react";

const LearningPathHeader = ({
  progress,
  title,
  description,
  createdBy,
  videosCount,
}) => {
  return (
    <>
      <div className="relative h-full min-w-screen max-w-[180rem] ">
        <div
          className="absolute inset-0 h-[40rem] bg-left-top -top-20  bg-no-repeat bg-blend-normal -z-10"
          style={{
            backgroundImage: `url('/assets/domain/circular.png')`,
            backgroundSize: "contain",
          }}
        ></div>

        <div className="mx-10 mix-blend-exclusion">
          <div>
            <h1 className="text-3xl lg:text-4xl max-w-lg font-theboldfont bg-gradient-to-r from-white to-purple-900 inline-block text-transparent bg-clip-text my-1">
              {title}
            </h1>
            <div className="bg-gradient-to-r from-purple-900 to-bg-purple-400 h-[0.180rem] w-1/4" />
          </div>

          <div className="mt-5 md:flex md:justify-between">
            <p className="max-w-lg">{description}</p>

            <div className="flex gap-2 mt-4 mb-2 items-center">
              <Progress progress={progress} />
              <span>Your Progress</span>
            </div>
          </div>

          <div className="flex items-center gap-2 font-[500]">
            <Play className="h-5 w-5" />
            <span>{videosCount} Videos</span>
          </div>

          <div className="flex items-center my-3 gap-2">
            <User className="h-5 w-5 text-primary" />
            <span className="font-medium text-base">
              Created by {createdBy}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const Progress = ({ progress }) => {
  return (
    <div className="relative ">
      <CircularProgress
        sx={{
          "--CircularProgress-progressThickness": "6px",
          "--CircularProgress-trackThickness": "5px",
          "--CircularProgress-size": "45px",
        }}
        determinate
        size="sm"
        thickness={4.4}
        variant="soft"
        color="success"
        value={progress}
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
        <Image
          src={"/assets/icons/progress.png"}
          alt="progress"
          height={15}
          width={15}
        />
      </div>
    </div>
  );
};

export default LearningPathHeader;
