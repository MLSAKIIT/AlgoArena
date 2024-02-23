import Image from "next/image";

const DomainCard = ({title, content, progress, link}) => {
    return (
        <div className="border-[1.5px] border-purple-500 rounded-xl h-[100px] sm:h-[150px] md:h-[150px] lg:h-[175px] max-w-[350px] relative flex flex-col justify-between group object-cover overflow-hidden mx-3 my-3">
            <div className="relative">
                {/* title div */}
                <p className="sm:text-xl lg:text-xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 inline-block text-transparent bg-clip-text sm:p-5 p-3 ">{title}</p>

                {/* content div */}
                <p style={{fontSize: "8px"}} className="text-white leading-[16px] p-4 sm:p-5">
                    {content}
                </p>
            </div>

            <a href={link}>
                <Image src="dashboard_btn_icon.svg" alt="progress" width={32} height={32} className="absolute right-2 bottom-6" />
            </a>
            {/* progressbar div*/}
            <div className="bg-white h-2 mt-2 mr-3 ml-3 rounded-lg">
                <div className="bg-purple-500 h-full rounded-full" style={{width: `${progress}%`}}></div>
            </div>
        </div>
    );
};

export default DomainCard;
