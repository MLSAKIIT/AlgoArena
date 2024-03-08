import React, { useState } from "react";
import Image from "next/image";
const TeamCard = ({
  imageUrl,
  name,
  designation,
  github,
  linkedIn,
  instagram,
}) => {
  const [link, setLink] = useState(false);
  const onHoverShow = (e) => {
    setLink(true);
  };
  const onHoverHide = (e) => {
    setLink(false);
  };
  return (
    <div
      className="flex flex-col w-fit "
      onMouseEnter={onHoverShow}
      onMouseLeave={onHoverHide}
    >
      <div
        className="h-72 bg-[#7B70EE] rounded-xl relative w-56 flex flex-col justify-end items-center pb-0"
        onMouseEnter={onHoverShow}
        onMouseLeave={onHoverHide}
      >
        <div className="relative z-10"></div>
        <Image src={imageUrl} alt="member picture" height={380} width={300} />
        <div className="absolute top-0 left-0 z-20 w-full h-full flex flex-col justify-end items-center">
          <div className="z-100 font-bold text-center pb-3">
            <div className="text-lg">{name}</div>
            <div className="text-[#9D5AE3]">{designation}</div>
          </div>
        </div>
      </div>
      <div
        className={`flex gap-4 w-full justify-center transition-all transform duration-1200 cursor-pointer ${
          link ? "opacity-1 pt-10" : "opacity-0 -translate-y-0 "
        }`}
        onMouseEnter={onHoverShow}
        onMouseLeave={onHoverHide}
      >
        <Image
          src="/assets/icons/GitHub.png"
          alt="GitHub link"
          width={50}
          height={50}
          className="w-8 h-8"
        />
        <Image
          src="/assets/icons/LinkedIn.png"
          alt="LinkedIn link"
          width={50}
          height={50}
          className="w-8 h-8"
        />
        <Image
          src="/assets/icons/Instagram.png"
          alt="Instagram link"
          width={50}
          height={50}
          className="w-8 h-8"
        />
      </div>
    </div>
  );
};

export default TeamCard;
