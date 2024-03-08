"use client";
import Image from "next/image";
import DomainCard from "./DashBoardDomainsCard";
import { useSession } from "next-auth/react";

const DashBoardDomains = ({ data }) => {
  const session = useSession();
  const username = session.data ? session.data.user.name : "User";

  return (
    <>
      <div className="absolute lg:h-[80rem] lg:w-[78rem] lg:top-[-180px] lg:left-[-250px] lg:block hidden -z-20">
        <Image
          src="/dashboard-ellipse1.svg"
          alt="Ellipse"
          height={100}
          width={80}
          className="absolute w-[80rem] h-[75rem] left-[13rem] top-[15rem] overflow-hidden lg:block hidden "
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-14">
        <p className="text-3xl font-sans font-bold bg-gradient-to-r text-white bg-clip-text lg:px-[200px] sm:px-[100px] px-[20px] mt-4">
          WELCOME BACK, {username}
        </p>
        <br />
        <div className="flex">
          <p className="text-3xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-textinline-block bg-clip-text lg:px-[200px] sm:px-[100px] px-[20px]">
            YOUR ENROLLED <br />
            COURSES
          </p>
        </div>
        <div className="flex flex-nowrap xl:gap-[60px] mt-10 ###">
          {data && data.length > 0
            ? data.map((course) => {
                const redirectUrl = `/learning-paths/${course.domain}/${course.id}`;
                return (
                  <DomainCard
                    key={course.id}
                    title={course.title}
                    content={course.description}
                    progress={course.progress}
                    redirectURL={redirectUrl}
                  />
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default DashBoardDomains;
