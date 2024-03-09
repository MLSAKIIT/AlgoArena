import Image from "next/image";

const DomainCard = ({title, content, progress, redirectURL}) => {
    return (
        <>
            <div className="z-2 hover:shadow-[0_0_16px_3px_#4a0f87] hover:scale-105 hover:backdrop-blur-sm transition-all backdrop-blur-sm border-[1.5px] border-purple-500 rounded-xl cursor-pointer h-[220px] w-[330px] relative flex flex-col mt-4 overflow-hidden mx-8">
                <div className="flex justify-center flex-grow">
                    <div className="w-11/12 mt-3 sm:mt-5 ">
                        {/* title div */}
                        <p className="text-2xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 inline-block text-transparent bg-clip-text sm:px-5 text-wrap sm:ml-1 mx-3">{title}</p>

                        {/* content div */}
                        <div className="p-4 sm:p-5">
                            <p className="text-white font-sans font-extralight sm:text-xs md:text-sm text-xs line-clamp-2">{content}</p>
                        </div>
                    </div>

                    <a href={redirectURL} className="cursor-pointer w-2/12 my-auto">
                        <Image src="dashboard_btn_icon.svg" alt="progress" width={27} height={25} />
                    </a>
                </div>
                {/* progressbar div*/}
                <div className="bg-white h-2 mx-4 mb-3 md:mb-5 rounded-lg">
                    <div className="bg-purple-500 h-full rounded-full z-1" style={{width: `${progress}%`}}></div>
                </div>
            </div>
        </>

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
        //         <div className="bg-purple-500 h-full rounded-full z-1 " style={{width: `${progress}%`}}></div>
        //     </div>
        //     {/* progressbar div*/}
        //     <div className="bg-white h-2 mt-2 mr-3 ml-3 mb-3 rounded-lg">
        //         <div className="bg-purple-500 h-full rounded-full z-1 " style={{width: `${progress}%`}}></div>
        //     </div>
        // </div>
    );
};

export default DomainCard;
