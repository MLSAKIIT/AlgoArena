import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <div className='bg-primary lg:pt-32 pt-10 mb-10 lg:h-[38rem] block max-w-[120rem] mx-auto'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center mid:gap-x-10 md:gap-20 mid:mx-4 lg:gap-28 items-center lg:min-w-[95rem]] lg:mx-auto'>
        <div className='relative lg:ml-10' >
            <div className='font-bold font-the_bold_font text-white lg:text-[3.575rem] text-xl mid:text-3xl  mb-1 lg:leading-[50px]'>EXPLORE NEW</div>
            <div className='flex'>
              <div className='font-bold font-the_bold_font bg-gradient-horizon bg-clip-text text-[transparent] lg:text-[3.75rem] mb-1 text-xl lg:leading-[50px] mid:text-3xl'>HORIZON</div>
              <Image src='/dash.svg' alt='dash' height={100} width={24} className="w-[100px] mid:w-[200px] lg:w-[22rem] ml-2"/>
            </div>
            <div className="font-[400] font-poppins text-[white] lg:text-[1.8rem] text-lg lg:ml-1 mid:text-xl">
        Learn Anything, Anytime, Anywhere
        </div>
        <div className="absolute h-[45rem] w-[70rem] top-[-180px] left-[-150px] overflow-hidden rotate-[-15deg] lg:block hidden ">
        <Image src='/Ellipse3.svg' alt='Ellipse' height={100} width={24} className="absolute w-[80rem] h-[75rem] left-[-12rem] top-[0px] overflow-hidden opacity-60 lg:block hidden "/>
        </div>
        <div className="absolute h-[21.3rem] w-[68.0625rem] top-[100px] left-[-150px] overflow-hidden rotate-[2deg] z-1 lg:block hidden">
        <Image src='/Ellipse3.svg' alt='Ellipse' height={100} width={24} className="absolute w-[68.0625rem] h-[56.5rem] left-[-12rem] top-[-10px] overflow-hidden opacity-50"/>
        </div>

        <div className="absolute h-[20rem] w-[51.5rem] top-[180px] left-[-200px] overflow-hidden rotate-[-15deg] z-1 lg:block hidden">
        <Image src='/Ellipse3.svg' alt='Ellipse' height={100} width={24} className="absolute w-[51.5rem] h-[44.5rem] left-[-12rem] top-[0px] overflow-hidden opacity-50"/>
        </div>
        </div>
        <div className='relative rounded-[43.75rem] bg-gradient-hero-img h-[170px] w-[170px] lg:mt-0 mt-9 lg:h-[27rem] lg:w-[27rem] lg:mr-[110px]'>
        <Image
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] h-[170px] w-[170px] lg:h-[432px] lg:w-[27rem]"
                src="/Objects.svg"
                alt="objects"
                width={24}
                height={24}
              />
        </div>
      </div>

    </div>
    </div>
  )
}

export default Hero;