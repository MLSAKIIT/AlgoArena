"use client";
import React, { useState } from "react";
import Image from "next/legacy/image";
import { data } from "@/data/teammember";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TeamCard from "@/components/about/TeamCard";
const teamdata = data;
const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-32 md:mt-0 ">
      <h1 className="  text-4xl mb-6 font-bold font-sans w-50 bg-gradient-to-r text-center from-white to-[#9d5ae3] inline-block text-transparent bg-clip-text mt-5">
        OUR SPECIAL TEAM
      </h1>
      <p className="text-center">
        <q>
          Meet Our Team: The dedicated individuals driving <br />
          MLSA &apos;s mission forward with passion and expertise.
        </q>
      </p>

      <div className="lg:max-w-[65rem] xl:max-w-[92rem] md:max-w-[45rem] h-fit  flex  mt-10 p-0 max-w-[90vw] sm:max-w-[45rem]">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          loop={true}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="w-[80%] flex h-[25rem] justify-center items-center gap-4 "
        >
          <div
            className="swiper-button-prev "
            style={{
              width: "60px !important",
              bottom: "60px !important",
              top: "150px !important",
            }}
          >
            <Image
              src="/assets/icons/arleft.png"
              alt="nav-right"
              width={800}
              height={800}
              className="p-8"
            />
          </div>
          {teamdata &&
            teamdata.map((member, key) => (
              <SwiperSlide className="max-w-60" key={key}>
                <TeamCard
                  imageUrl={member.imageUrl}
                  name={member.name}
                  designation={member.designation}
                  github={member.github}
                  linkedIn={member.linkedIn}
                  instagram={member.instagram}
                />
              </SwiperSlide>
            ))}

          <div
            className="swiper-button-next"
            style={{
              width: "60px !important",
              bottom: "60px !important",
              top: "150px !important",
            }}
          >
            <Image
              src="/assets/icons/arrowright.png"
              alt="nav-right"
              width={800}
              height={800}
              className="p-8"
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
