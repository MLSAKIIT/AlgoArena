import EditForm from "@/components/learningPath/edit/EditForm";
import React from "react";
import Image from "next/image";
import CreatePathForm from "@/components/learningPath/edit/CreatePathForm";

const CreatePath = () => {
  return (
    <div className="h-auto flex justify-center   items-centers mt-10 ">
      <CreatePathForm />
      {/* Background */}
      <Image
        src="/assets/icons/Ellipse3.svg"
        alt="Ellipse"
        height={100}
        width={24}
        className="fixed min-[1536px]:hidden -z-10 w-[80rem] h-[75rem] left-[-20rem] top-[5rem] opacity-60 mdxs:block lg:block hidden "
      />
      <Image
        src="/assets/icons/Ellipse3.svg"
        alt="Ellipse"
        height={100}
        width={24}
        className="fixed min-[1536px]:hidden -z-10 w-[68.0625rem] h-[56.5rem] left-[-16rem] top-[16rem] opacity-50 mdxs:block lg:block hidden"
      />
      <Image
        src="/assets/icons/Ellipse3.svg"
        alt="Ellipse"
        height={100}
        width={24}
        className="fixed min-[1536px]:hidden -z-10 w-[51.5rem] h-[44.5rem] left-[-10rem] top-[24rem] mdxs:block
         overflow-hidden opacity-50 lg:block hidden"
      />
      <div className="fixed min-[1536px]:hidden -z-10 w-[15rem] h-[15rem] left-[5rem] bg-color-2 rounded-full blur-2xl bottom-[-10rem] mdxs:block opacity-50 lg:block hidden" />
    </div>
  );
};

export default CreatePath;
