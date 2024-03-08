const DomainCard = ({ title, content, progress, redirectURL }) => {
  return (
    <div className="border-[1.5px] border-purple-500 rounded-xl h-[100px] sm:h-[150px] md:h-[150px] lg:h-[175px] max-w-[350px] md:w-[250px] relative flex flex-col justify-between group object-cover overflow-hidden mx-3 my-3 hover:shadow-[0_0_16px_3px_#4a0f87] hover:scale-105 hover:backdrop-blur-sm transition-all cursor-pointer backdrop-blur-sm">
      <div>
        {/* title div */}
        <p className="sm:text-xl lg:text-xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 inline-block text-transparent bg-clip-text sm:p-5 p-3 ">
          {title}
        </p>

        {/* content div */}
        <div className="p-4 sm:p-5">
          <p className="text-white font-thin text-[10px] line-clamp-2">
            {content}
          </p>
        </div>
      </div>

      <a
        href={redirectURL}
        className="cursor-pointer absolute right-2 bottom-6"
      >
        <img
          src="dashboard_btn_icon.svg"
          alt="progress"
          width={32}
          height={32}
        />
      </a>

      {/* progressbar div*/}
      <div className="bg-white h-2 mt-2 mr-3 ml-3 mb-3 rounded-lg">
        <div
          className="bg-purple-500 h-full rounded-full z-20 "
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>

    // <div className="box-border lg:min-w-60 md:min-w-max sm:min-w-20 text-center self-center justify-self-center max-w-max md:w-48 lg:py-8 lg:px-6 sm:py-4 sm:px-3 px-2 py-4 border-[#9d5ae3] rounded-xl border-2 hover:shadow-[0_0_16px_3px_#4a0f87] h-20 md:h-32 cursor-pointer z-30 hover:scale-105 transition-all duration-300 flex flex-col justify-center mx-5 backdrop-blur-sm h-[100px] sm:h-[150px] md:h-[150px] lg:h-[175px] max-w-[350px] md:w-[250px]">
    //     <div className="relative">
    //         {/* title div */}
    //         <p className="sm:text-xl lg:text-xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 inline-block text-transparent bg-clip-text sm:p-5 p-3 ">{title}</p>

    //         {/* content div */}
    //         <div>
    //             <p className="text-white font-thin text-[8px] sm:text-sm p-4 sm:p-5">{content}</p>
    //         </div>
    //     </div>

    //     <a href={redirectURL} className="cursor-pointer absolute right-2 bottom-6">
    //         <img src="dashboard_btn_icon.svg" alt="progress" width={32} height={32} />
    //     </a>

    //     {/* progressbar div*/}
    //     <div className="bg-white h-2 mt-2 mr-3 ml-3 mb-3 rounded-lg">
    //         <div className="bg-purple-500 h-full rounded-full z-20 " style={{width: `${progress}%`}}></div>
    //     </div>
    //     {/* progressbar div*/}
    //     <div className="bg-white h-2 mt-2 mr-3 ml-3 mb-3 rounded-lg">
    //         <div className="bg-purple-500 h-full rounded-full z-20 " style={{width: `${progress}%`}}></div>
    //     </div>
    // </div>
  );
};

export default DomainCard;
