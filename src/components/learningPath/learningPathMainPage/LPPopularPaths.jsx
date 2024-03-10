"use client"
import React, { useEffect, useState } from "react";
import PopularCard from "./PopularCard";
import { dataRec } from "./dummy";
import { getPopularPaths } from "@/actions/get-popular-paths";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LPPopularPaths = () => {
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
    const popularPaths = await getPopularPaths();
    setData(popularPaths);
  }
  return (
    <div className="max-w-6xl mx-auto m-5 w-screen">
      <div className="flex items-end justify-between my-2 md:my-5 m-3">
        <div className="text-xl md:text-3xl font-popins bg-gradient-course bg-clip-text text-transparent w-[360px] font-bold">
          Popular Paths
        </div>
      </div>
      <div className=" max-w-6xl mr-8 ml-8">
      <Slider {...settings}>
        {data && data.map((course, i) => (
          <div key={i} className=""><PopularCard course={course} /></div>
        ))}

      </Slider>
      </div>
    </div>
  );
};

export default LPPopularPaths;
