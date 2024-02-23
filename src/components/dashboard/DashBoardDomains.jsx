// Domains.js
"use client";
import {useState, useEffect} from "react";
import DomainCard from "./DashBoardDomainsCard";

const Domains = ({initialData}) => {
    const [data, setData] = useState(initialData);

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
        <div className="flex flex-col ml-20">
            <p className="text-3xl font-sans font-bold bg-gradient-to-r text-white bg-clip-text lg:px-[200px] sm:px-[100px] px-[20px] mt-4">WELCOME BACK, {userName}</p>
            <br />
            <div className="flex">
                <p className="text-3xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-textinline-block bg-clip-text lg:px-[200px] sm:px-[100px] px-[20px]">
                    YOUR ENROLLED <br />
                    COURSES
                </p>
            </div>
            <a className="z-20 grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 md:px-[100px] lg:px-[200px] sm:px-[100px] px-[20px]">
                {data && data.enrolledCourses
                    ? data.enrolledCourses.map((course) => <DomainCard key={course.id} title={course.title} content={course.description} progress={course.progress} link={data.redirectRoute} />)
                    : null}
            </a>
        </div>
    );
};

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/dummy/dashboard");
    const initialData = await res.json();

    return {
        props: {
            initialData,
        },
    };
}

export default Domains;
