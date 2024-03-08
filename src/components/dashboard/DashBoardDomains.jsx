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
            <div className="absolute lg:h-[80rem] lg:w-[78rem] lg:top-[-180px] lg:left-[-250px] lg:block hidden z-0">
                <Image src="/dashboard-ellipse1.svg" alt="Ellipse" height={100} width={80} className="absolute w-[80rem] h-[75rem] left-[13rem] top-[15rem] overflow-hidden lg:block hidden z-0" />
            </div>
            <div className="flex flex-col z-1 mt-14 max-w-7xl  mb-16">
                {/* <p className="text-3xl font-sans font-bold bg-gradient-to-r text-white bg-clip-text lg:px-[200px] sm:px-[100px] px-[20px] mt-4 z-1">WELCOME BACK, {userName}</p>
                <br />
                <p className="text-3xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-textinline-block bg-clip-text lg:px-[200px] sm:px-[100px] px-[20px] z-1">
                    YOUR ENROLLED COURSES <br />
                </p> */}
                <div className="text-3xl font-popins font-bold bg-gradient-to-r text-white bg-clip-text mt-4 ml-10 z-20">WELCOME BACK, {userName}</div>
                <br />
                <p className="text-3xl font-sans font-bold bg-gradient-course w-[250px] text-transparent inline-block bg-clip-text z-20 ml-10">
                    YOUR ENROLLED COURSES
                    <br />
                </p>
                <div className="z-1 flex flex-wrap md:flex-nowrap items-center justify-center gap-[30px] xl:gap-[60px] mt-16" style={{flexWrap: "wrap"}}>
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
