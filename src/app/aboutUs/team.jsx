import React from "react";
import Image from "next/image";
import member1 from "@/app/images/asset/member1.svg";
import member2 from "@/app/images/asset/member2.png";
import member3 from "@/app/images/asset/member3.png";
const team = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="  text-4xl mb-6 font-bold font-sans w-50 bg-gradient-to-r from-white to-[#9d5ae3] inline-block text-transparent bg-clip-text mt-5">
        OUR SPECIAL TEAM
      </h1>
      <p>
        <q>
          Meet Our Team: The dedicated individuals driving <br />
          MLSA &apos;s mission forward with passion and expertise.
        </q>
      </p>
      <div className="flex gap-8 flex-col lg:flex-row">
      <div className="flex flex-col justify-center items-center">
        <Image src={member1} alt="person1" width={200} height={200} />
        <p>MD Alam</p>
        <p>UI/UX</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image src={member2} alt="person1" width={200} height={200} />
        <p>SImran shah</p>
        <p>Web Developer</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image src={member3} alt="person1" width={200} height={200} />
        <p>Rohit Shah</p>
        <p>Andriod Developer</p>
      </div>
      </div>
    </div>
  );
};

export default team;
