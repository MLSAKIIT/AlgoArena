import React from "react";
import Link from "next/link";
import { ALLOWED_DOMAINS } from "@/constants";

const CategoryCard = ({ category }) => {
  const categoryText = ALLOWED_DOMAINS[category].toUpperCase();
  return (
    <Link
      href={`/learning-paths/${category}`}
      className="m-2 backdrop-blur-[10px]"
    >
      <div className="border border-color-2 rounded-2xl flex justify-center items-center md:px-5 md:py-5 px-1 py-1 md:w-[200px] w-[100px] text-[8.5px] md:text-sm font-popins font-[600] h-6 md:h-auto hover:shadow-[0_0_12px_3px_#4a0f87] cursor-pointer hover:scale-105 transition-all duration-300">
        <div className="line-clamp-1">{categoryText}</div>
      </div>
    </Link>
  );
};

export default CategoryCard;
