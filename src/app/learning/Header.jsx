import React from "react";
import Image from "next/image";

const Header = ({ title, description, videos, hours, creator }) => {
  return (
    <>
      <div
        className="absolute inset-0  h-50 max-h-62 bg-left-top bg-no-repeat bg-blend-normal"
        style={{
          backgroundImage: `url(/assets/domain/circular.png)`,
          backgroundSize: "contain",
        }}
      ></div>

      <div className="mx-10  w-auto">
        <div className="my-1">
          <p className="text-3xl font-san font-bold bg-gradient-to-r from-white to-purple-900 inline-block text-transparent bg-clip-text my-1">
            {title}
          </p>
          <div className=" bg-gradient-to-r from-purple-900 to-bg-purple-400 h-[0.180rem] w-1/4"></div>
        </div>

        <div className="sm:grid hidden sm:grid-cols-5 gap-4">
          <div className="col-span-2">
            <h5 className="mt-4 text-wrap text-start">{description}</h5>
          </div>

          <div className=" col-start-5 font-light text-sm gap-3 hidden sm:flex">
            <div>
              <Image src={"/assets/icons/progress.png"} alt="progress" height={15} width={15} />
            </div>
            <div>Your Progress</div>
          </div>
        </div>

        <div className=" grid-cols-8 my-5 hidden sm:grid">
          <div className="flex gap-1">
            <Image src={"/assets/icons/play.png"} height={5} width={15} alt="play-bttn" />
            <p className="text-xs font-extralight">{videos} Videos</p>
          </div>
          <div className="flex gap-1">
            <Image src={"/assets/icons/time.png"} height={5} width={15} alt="time-img" />
            <p className="text-xs font-extralight">{hours} hours</p>
          </div>
        </div>

        <div className="flex gap-2 hidden sm:flex">
          <div>
            <Image src={"/assets/icons/user.png"} alt="user" height={15} width={15} />
          </div>
          <div>
            <p className="text-xs">Created by {creator}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
