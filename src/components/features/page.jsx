import Image from "next/image";

const Features = () => {
  return (
    <section>
      <div className="flex justify-center">
        <p className="text-3xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 inline-block text-transparent bg-clip-text">
          FEATURES
        </p>
      </div>

      <div className="pt-20 ml-40 mr-40">
        <div className="flex flex-col md:flex-row mb-20">
          <div className="pl-10 md:pr-10 md:order-2">
            <Image
              src="/learning.png"
              height={440}
              width={457}
            />
          </div>

          <div className="md:ml-60">
            <p className="text-3xl font-poppins leading-7 tracking-tighter font-bold uppercase bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent inline-block">
              <p className="text-white">Created learning path to</p>{" "}
              <p>make you learn what matters</p>
            </p>
            <p className="text-white font-poppins pt-5">
              Embrace wisdom&apos;s compass, learn what truly holds value. In
              the journey of knowledge, discern the essence, learn what matters.
            </p>
            <button
              className="bg-purple-500 text-white py-2 px-4 rounded-full mt-5 shadow-[0_0_1rem_0px_#9d5ae3]
            hover:bg-[#7f3dbf] active:scale-95 transition duration-200 "
            >
              Explore Now
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="pr-10 md:pl-40 md:order-2">
            <p className="text-3xl font-poppins leading-7 tracking-tighter font-bold uppercase bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent inline-block">
              <p className="text-white">Build and interact with</p>{" "}
              <p>your community</p>
            </p>
            <p className="text-white font-poppins pt-5">
              Building community requires empathy, communication, and a shared
              vision. Together, we construct bridges of understanding and
              support, fostering a tapestry of belonging and collaboration.
            </p>
            <button
              className="bg-purple-500 text-white py-2 px-4 rounded-full mt-5 shadow-[0_0_1rem_0px_#9d5ae3]
            hover:bg-[#7f3dbf] active:scale-95 transition duration-200 "
            >
              Build Now
            </button>
          </div>
          <div className="pr-10 md:pr-20 md:order-1">
            <Image
              src="/communityy.png"
              width={500}
              height={500}
              alt="Picture"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="pl-10 md:pr-10 md:order-2">
            <Image src="/progress.png" width={400} height={400} alt="Picture" />
          </div>

          <div className="md:ml-40">
            <p className="text-3xl font-poppins leading-7 tracking-tighter font-bold uppercase bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent inline-block">
              <p className="text-white">track you progress</p>
              <p>while you learn</p>
            </p>
            <p className="text-white font-poppins pt-5">
              Measure your steps, chart your course, and let each milestone be a
              testament to your journey&apos;s force.
            </p>
            <button
              className="bg-purple-500 text-white py-2 px-4 rounded-full mt-5 shadow-[0_0_1rem_0px_#9d5ae3]
            hover:bg-[#7f3dbf] active:scale-95 transition duration-200 "
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;