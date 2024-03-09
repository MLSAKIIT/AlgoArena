// import Image from "next/image";
// import Rating from '@mui/material/Rating';
// import React, { useState } from 'react';
// import Link from "next/link";

// export default function CompletedCoursesCard({ title, description, rate, id, current }) {
//   const [value, setValue] = useState(1);
//   const [rateActive, setRateActive] = useState(false);

//   const rateClickHandler = () => {
//     setRateActive(true);
//     rate(id);
//   };

//   return (
//     <div className={`box-border md:min-w-[700px] sm:min-w-20 md:w-48 lg:px-6 sm:py-0 sm:px-3 px-2 py-0 border-[#9d5ae3] rounded-xl border-2 sm:min-h-[160px] ${current === id ? 'sm:min-h-[200px]' : ''} cursor-default z-30 flex justify-center mx-5 my-5 backdrop-blur-sm lg:min-w-[800px] sm:max-w-[500px] transition-height duration-500`}>
//       <div className="flex flex-col justify-center">
//         <h2 className="text-2xl font-black md:text-2xl bg-gradient-to-r from-white to-[#9d5ae3] bg-clip-text text-transparent sm:my-1 my-5">
//           {title}
//         </h2>
//         <p className="text-white sm:mt-3 font-poppins">
//           {description}
//         </p>
//         <p className={`text-xs my-3 ${current === id ? "text-[#9d5ae3]" : "text-[#7b70ee]"} hover:text-[#9d5ae3] hover:cursor-pointer w-fit`} onClick={rateClickHandler}>
//           Rate this course
//         </p>
//         {rateActive && current === id && <Rating
//           name="simple-controlled"
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//           className="mb-2"
//         />}
//       </div>
//       <div className="flex flex-col justify-center items-center my-5 sm:items-end min-w-[70px]">
//         <Link href={`/courses/${id}`}>
//         <Image
//           className="hover:cursor-pointer"
//           src='/assets/dashboard/replay.png'
//           width={50}
//           height={50}
//           alt="dashboard images"
//         />
//         </Link>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import Rating from '@mui/material/Rating';
import React, { useState } from 'react';
import Link from "next/link";

export default function CompletedCoursesCard({ title, description, rate, id, current, redirectUrl }) {
  const [value, setValue] = useState(1);
  const [rateActive, setRateActive] = useState(false);
  const [count, setCount] = useState(false);

  const rateClickHandler = () => {
    rate(id);
    setCount(true);
    setRateActive(true);
    if (count===true &&current===id){
      setRateActive(!rateActive)


    }
  };

  return (
    <div className={` ${current === id && rateActive===true ? 'sm:min-h-[200px]' :''} box-border md:min-w-[700px] sm:min-w-20 md:w-48 lg:px-6 sm:py-0 sm:px-3 px-2 py-0 border-[#9d5ae3] rounded-xl border-2 sm:min-h-[160px]  cursor-default z-30 flex justify-start mx-5 my-5 backdrop-blur-sm lg:min-w-[800px] sm:max-w-[500px] transition-height duration-500`}>
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-black md:text-2xl bg-gradient-to-r from-white to-[#9d5ae3] bg-clip-text text-transparent sm:my-1 my-5">
          {title}
        </h2>
        <p className="text-white sm:mt-3 font-poppins">
          {description}
        </p>
        <p className={`text-xs my-3 ${current === id ? "text-[#9d5ae3]" : "text-[#7b70ee]"} hover:text-[#9d5ae3] hover:cursor-pointer w-fit`} onClick={rateClickHandler}>
          Rate this course
        </p>
        {rateActive && current === id && <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            setRateActive(false);
          }}
          className="mb-2"
        />}
      </div>
      <div className="flex flex-col justify-center items-center my-5 sm:items-end min-w-[70px] ml-auto">
        <Link href={redirectUrl}>
        <Image
          className="hover:cursor-pointer"
          src='/assets/dashboard/replay.png'
          width={50}
          height={50}
          alt="dashboard images"
        />
        </Link>
      </div>
    </div>
  );
}
