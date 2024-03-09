import { siteConfig } from "@/constants/siteConfig";
import Image from "next/image";
import Link from "next/link";

const Features = () => {
  return (
    <div className="max-w-[120rem] mb-20">
      <div className="flex justify-center mt-20">
        <div className="text-3xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 inline-block text-transparent bg-clip-text">
          FEATURES
        </div>
      </div>

      <div className="pt-20 flex flex-col items-center gap-24 text-sm text-center  md:text-left">
        <div className="flex flex-col gap-10 md:flex-row justify-between  items-center w-[67%]">
          <div className="md:pl-10  md:order-2">
            <Image
              src="/assets/features/learning.png"
              className="w-[257px]  md:w-[357px]"
              height={240}
              width={357}
              alt="Picture"
            />
          </div>

          <div>
            <div className="text-3xl font-poppins leading-7 tracking-tighter font-bold uppercase bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent inline-block">
              <div className="text-white">Created learning path to</div>
              <div>make you learn what matters</div>
            </div>
            <p className="text-white font-poppins pt-5">
              Embrace wisdom&apos;s compass, learn what truly holds value. In
              the journey of knowledge, discern the essence, learn what matters.
            </p>
            <Link href={siteConfig.navBarLinks.learningPath}>
              <button
                className="mt-5 bg-purple-500 text-white py-2 px-4 rounded-full shadow-[0_0_1rem_0px_#9d5ae3]
            hover:bg-[#7f3dbf] active:scale-95 transition duration-200 "
              >
                Start Now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-8  justify-center items-center w-[67%] text-center md:text-left ">
          <div className="md:order-2 ">
            <div className="text-3xl font-poppins leading-7 tracking-tighter font-bold uppercase bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent inline-block">
              <div className="text-white">Build and interact with</div>{" "}
              <div>your community</div>
            </div>
            <div className="text-white font-poppins pt-5 ">
              Building community requires empathy, communication, and a shared
              vision. Together, we construct bridges of understanding and
              support, fostering a tapestry of belonging and collaboration.
            </div>
            <Link href={siteConfig.navBarLinks.community}>
              <button
                className="bg-purple-500 text-white py-2 px-4 rounded-full mt-5 shadow-[0_0_1rem_0px_#9d5ae3]
            hover:bg-[#7f3dbf] active:scale-95 transition duration-200 "
              >
                Build Now
              </button>
            </Link>
          </div>
          <div className=" md:pr-20  ">
            <Image
              src="/assets/features/communityy.png"
              className="w-[257px]  md:w-[600px]"
              width={600}
              height={800}
              alt="Picture"
            />
          </div>
        </div>

        <div className="flex flex-col gap-10 md:flex-row justify-between  items-center w-[67%]">
          <div className="md:pl-10  md:order-2">
            <Image
              src="/assets/features/progress.png"
              className="w-[257px]  md:w-[357px]"
              height={240}
              width={357}
              alt="Picture"
            />
          </div>

          <div>
            <div className="text-3xl font-poppins leading-7 tracking-tighter font-bold uppercase bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent inline-block">
              <div className="text-white">track you progress</div>
              <div>while you learn</div>
            </div>
            <p className="text-white font-poppins pt-5">
              Measure your steps, chart your course, and let each milestone be a
              testament to your journey&apos;s force.
            </p>
            <Link href={siteConfig.navBarLinks.dashboard}>
              <button
                className="bg-purple-500 text-white py-2 px-4 rounded-full mt-5 shadow-[0_0_1rem_0px_#9d5ae3]
            hover:bg-[#7f3dbf] active:scale-95 transition duration-200 "
              >
                Start Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
