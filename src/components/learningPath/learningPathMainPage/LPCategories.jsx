"use client";
import React, { useState } from "react";
import { categories } from "./dummy";
import CategoryCard from "./CategoryCard";
import { ALLOWED_DOMAINS } from "@/constants";
const LPCategories = () => {
  const [seeAll, setSeeAll] = useState(false);
  const [value, setValue] = useState("See all");

  const handleClick = () => {
    setSeeAll((value) => !value);
    if (value === "See all") {
      setValue("See less");
    } else {
      setValue("See all");
    }
  };
  return (
    <div className="max-w-6xl mx-auto m-5">
      <div className="flex items-end justify-between my-2 md:my-5 m-3">
        <div className="text-xl md:text-3xl font-popins bg-gradient-course bg-clip-text text-transparent w-[250px] font-bold">
          Categories
        </div>
        <div
          className="text-[10px] sm:text-xs text-color-2 underline cursor-pointer backdrop-blur-[5px] z-2"
          onClick={handleClick}
        >
          {value}
        </div>
      </div>
      <div
        className={`flex flex-wrap justify-center overflow-hidden max-w-6xl mr-8 ml-8 ${
          seeAll ? "h-auto" : "h-20 md:h-40"
        }`}
      >
        {Object.keys(ALLOWED_DOMAINS).map((category, i) => (
          <CategoryCard key={i} category={category} />
        ))}
      </div>
    </div>
  );
};

export default LPCategories;
