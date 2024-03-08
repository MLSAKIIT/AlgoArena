import Image from "next/image";

const DomainCard = ({ title, img }) => {
  return (
    <div className="border-[1.5px] border-purple-500 rounded-xl h-[120px] sm:h-[100px] lg:h-[155px] xl:w-[20rem] lg:w-[16rem] md:w-[12rem] sm:w-[10rem] w-[15rem]  relative flex justify-between group object-cover overflow-hidden mx-3 my-3">
      <div className="relative">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 inline-block text-transparent bg-clip-text sm:p-5 p-2 absolute bottom-0">
          {title}
        </p>
      </div>
      <div className="relative w-1/2 h-full">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg group-hover:scale-125 duration-500"
          alt="domain images"
        />
      </div>
    </div>
  );
};

export default DomainCard;
