"use client"
import React, { useEffect, useState } from "react";
import RecommendedCard from "./RecommendedCard";
import { dataRec } from "./dummy";
import { getRecommendedPaths } from "@/actions/get-recommended-paths";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const LearningPathRecommended = () => {
  const [data,setData]=useState(null);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(()=>{
    fetchData();
  })

  const fetchData=async()=>{
    const dataR = await getRecommendedPaths();
    setData(dataR);

  }
  // console.log(dataRec)
  return (
    <div className="max-w-6xl mx-auto m-5 w-screen">
      <div className="flex items-end justify-between my-2 md:my-5 m-3">
        <div className="text-xl md:text-3xl font-popins bg-gradient-course bg-clip-text text-transparent w-[360px] font-bold">
          Recommended for you
        </div>
      </div>
      <div className=" max-w-6xl mr-8 ml-8">
      <Slider {...settings}>
        {data && data.map((course, i) => (
          <div key={i} className=""><RecommendedCard course={course} /></div>
        ))}

      </Slider>
      </div>
    </div>
  );
};

export default LearningPathRecommended;
