"use client";
import Footer from "../../components/footer/Footer";
import InfoCard from "@/components/ui/infoCard";
import about1 from "@/app/images/asset/about1.png";
import about2 from "@/app/images/asset/about2.png";
import about3 from "@/app/images/asset/about3.png";
import ecllipse3 from "@/app/images/asset/ecllipse3.svg";
import ecllipse2 from "@/app/images/asset/Ellipse2.svg";
import ecllipse1 from "@/app/images/asset/ellipse1.svg";
import Team from "./team";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-52 items-center">
        <div className="absolute h-[50rem] w-[71.5rem] -z-10 top-[180px] left-[-30px] overflow-hidden rotate-[-5deg] z-1 lg:block hidden">
          <Image
            src={ecllipse3}
            alt="Ellipse"
            height={500}
            width={54}
            className="absolute h-[77rem] w-[71.5rem] left-[-12rem] top-[0px] overflow-hidden opacity-50"
          />
        </div>
        <div className="absolute h-[40rem] w-[55.5rem] -z-10 top-[230px] left-[0px] overflow-hidden rotate-[-5deg] z-1 lg:block hidden">
          <Image
            src={ecllipse2}
            alt="Ellipse"
            height={500}
            width={54}
            className="absolute h-[67rem] w-[61.5rem] left-[-12rem] top-[0px] overflow-hidden opacity-50"
          />
        </div>
        <div className="absolute h-[25rem] w-[55.5rem] -z-10 top-[400px] left-[0px] overflow-hidden rotate-[-5deg] z-1 lg:block hidden">
          <Image
            src={ecllipse1}
            alt="Ellipse"
            height={500}
            width={54}
            className="absolute h-[47rem] w-[41.5rem] left-[-12rem] top-[0px] overflow-hidden opacity-50"
          />
        </div>

        <div className="flex flex-col gap-6 text-center h-[75vh] justify-center items-center">
          {" "}
          <h1 className="  text-6xl font-bold font-sans bg-gradient-to-r from-white to-[#9d5ae3] inline-block text-transparent bg-clip-text mt-5">
            ABOUT US
          </h1>
          <p className="w-[70vw] text-md">
            At MLSA (Microsoft Learning Student Ambassador), our mission is
            simple: “Tech for All.” We believe in empowering individuals to
            embrace the digital world with confidence through engaging events,
            innovative projects, and meaningful connections. Our dedication lies
            in bridging the technological divides, ensuring that no one is left
            behind.
          </p>
        </div>
        <div className="flex flex-col gap-52">
          <InfoCard
            title="OUR VISION"
            img={about1}
            layout="lg:flex-row "
            text="MLSA envisions a world where everyone has access to the benefits of
          technology. We believe that technology has the potential to be an
          effective tool for education.We are committed to educating everyone
          about various tech stacks, thus keeping them updated."
            button="Explore Now"
          />
          <InfoCard
            img={about2}
            title="OUR GOAL"
            layout="lg:flex-row-reverse "
            text="Connecting people with technology and assisting them in using it to enhance their lives are the two main objectives of MLSA. In order to achieve this, we organize events, work on projects, and educate everyone on various tech stacks."
            button="Explore Now"
          />
          <InfoCard
            title="OUR MISSION"
            img={about3}
            layout="lg:flex-row"
            text="The mission of MLSA is Tech for All. We empower individuals to embrace the digital world with confidence through engaging events, innovative projects, and meaningful connections. We are dedicated to bridging the technological divides, ensuring that no one is left behind."
            button="Explore Now"
          />
        </div>
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default page;
