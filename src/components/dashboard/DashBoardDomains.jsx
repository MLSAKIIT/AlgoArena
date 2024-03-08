"use client";
import Image from "next/image";
import {useState, useEffect} from "react";
import DomainCard from "./DashBoardDomainsCard";

const DashBoardDomains = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:3000/api/dummy/dashboard");
            const newData = await res.json();
            setData(newData);
        }
        fetchData();
    }, []);

    const userName = data && data.userName ? data.userName : "User";

    return (
        <>
            <div className="absolute lg:h-[80rem] lg:w-[78rem] lg:top-[-180px] lg:left-[-250px] lg:block hidden">
                <Image src="/dashboard-ellipse1.svg" alt="Ellipse" height={100} width={80} className="absolute w-[80rem] h-[75rem] left-[13rem] top-[15rem] overflow-hidden lg:block hidden " />
            </div>
            <div className="flex flex-col justify-center items-center  z-20 mt-14">
                <p className="text-3xl font-sans font-bold bg-gradient-to-r text-white bg-clip-text lg:px-[200px] sm:px-[100px] px-[20px] mt-4">WELCOME BACK, {userName}</p>
                <br />
                <div className="flex">
                    <p className="text-3xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-textinline-block bg-clip-text lg:px-[200px] sm:px-[100px] px-[20px]">
                        YOUR ENROLLED <br />
                        COURSES
                    </p>
                </div>
                <div className="z-20 flex flex-nowrap xl:gap-[60px] mt-10 ###">
                    
                    {data && data.enrolledCourses
                        ? data.enrolledCourses.map((course) => (
                              <DomainCard key={course.id} title={course.title} content={course.description} progress={course.progress} redirectURL={course.redirectURL} />
                          ))
                        : null}
                </div>
            </div>
        </>
    );
};

export default DashBoardDomains;
