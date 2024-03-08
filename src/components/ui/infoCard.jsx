import React from "react";
import Image from "next/image";
const infoCard = ({ title, text, button, link, layout, img }) => {
  return (
    <div
      className={`flex flex-col ${layout} gap-6 w-[80%]  justify-center items-center `}
    >
      <div className="w=[50%]">
        {" "}
        <Image src={img} alt="mlsa team" width={600} height={700} />
      </div>
      <div className="w-full flex flex-col justify-center items-center lg:items-start lg:flex-none lg:w-[50%]">
        <h1 className="  text-4xl mb-6 font-bold font-sans w-50 bg-gradient-to-r from-white to-[#9d5ae3] inline-block text-transparent bg-clip-text mt-5">
          {title}
        </h1>
        <p className="mb-6 text-center md:text-left">{text}</p>
        <button className="bg-color-2  text-white pr-5 shadow-[0_0_1rem_0px_#9d5ae3] pl-5 pt-2 pb-2 rounded-full hover:bg-gradient-to-r from-color-2 to-color-3 transition-all duration-200">
          {button}
        </button>
      </div>
    </div>
  );
};

export default infoCard;
