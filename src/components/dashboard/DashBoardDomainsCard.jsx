import Image from "next/image";

const DomainCard = ({title, content, progress, redirectURL}) => {
    return (
        <>
            <div className="z-2 hover:shadow-[0_0_16px_3px_#4a0f87] hover:scale-105 hover:backdrop-blur-sm transition-all backdrop-blur-sm border-[1.5px] border-purple-500 rounded-xl cursor-pointer h-[180px] w-[330px] relative flex flex-col mt-4 overflow-hidden mx-8">
                <div className="flex justify-center flex-grow">
                    <div className="w-11/12 mt-3 sm:mt-5 ">
                        {/* title div */}
                        <p className="text-2xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 inline-block text-transparent bg-clip-text sm:px-5 text-wrap sm:ml-1 mx-3 line-clamp-2">
                            {title}
                        </p>

                        {/* content div */}
                        <div className="p-4 sm:p-5">
                            <p className="text-white font-sans font-extralight sm:text-xs md:text-sm text-xs line-clamp-2 leading-6">{content}</p>
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
    );
};

export default DomainCard;
