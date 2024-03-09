"use client";
import Image from "next/image";
import DomainCard from "./DashBoardDomainsCard";
import {useSession} from "next-auth/react";

const DashBoardDomains = ({data}) => {
    const session = useSession();
    const username = session.data ? session.data.user.name : "User";

    return (
        <div className="sm:ml-10 ml-0">
            <div className="absolute lg:h-[80rem] lg:w-[78rem] lg:top-[-180px] lg:left-[-250px] lg:block hidden -z-10">
                <Image src="/dashboard-ellipse1.svg" alt="Ellipse" height={100} width={80} className="absolute w-[80rem] h-[75rem] left-[13rem] top-[15rem] overflow-hidden lg:block hidden" />
            </div>
            <div className="flex flex-col z-1 mt-14 max-w-8xl mb-16">
                <div className="text-3xl font-popins font-bold bg-gradient-to-r text-white bg-clip-text mt-4 ml-10 z-20">WELCOME BACK, {username}</div>
                <br />
                <p className="text-3xl font-sans font-bold bg-gradient-course w-[250px] text-transparent inline-block bg-clip-text z-20 ml-10">
                    YOUR ENROLLED COURSES
                    <br />
                </p>
                <div className="z-1 flex flex-wrap md:flex-nowrap items-start justify-start gap-[20px] xl:gap-[40px] mt-16" style={{flexWrap: "wrap"}}>
                    {data && data.length > 0
                        ? data.map((course) => {
                              const redirectUrl = `/learning-paths/${course.domain}/${course.id}`;
                              return <DomainCard key={course.id} title={course.title} content={course.description} progress={course.progress} redirectURL={redirectUrl} />;
                          })
                        : null}
                </div>
            </div>
        </div>
    );
};

export default DashBoardDomains;
