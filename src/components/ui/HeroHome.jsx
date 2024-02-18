import React from 'react'
import Image from 'next/image';

const HeroHome = () => {
  return (
    <div className='bg-primary md:mt-[100px] mt-[30px]'>
      <div className='flex flex-wrap md:flex-nowrap justify-around items-center flex-row-reverse md:flex-row md:min-w-[95rem]] md:mx-auto'>
        <div className='relative' >
            <div className='font-bold font-the_bold_font text-white md:text-[3.575rem] text-xl  mb-1 md:leading-[50px]'>EXPLORE NEW</div>
            <div className='flex'>
              <div className='font-bold font-the_bold_font bg-gradient-horizon bg-clip-text text-[transparent] md:text-[3.75rem] mb-1 text-xl md:leading-[50px]'>HORIZON</div>
              <Image src='/dash.svg' alt='dash' height={100} width={24} className="w-[100px] md:w-[22rem] ml-2"/>
            </div>
            <div className="font-[400] font-poppins text-[white] md:text-[1.8rem] text-lg">
        Learn Anything, Anytime, Anywhere
        </div>
        <div className="absolute h-[45rem] w-[70rem] top-[-180px] left-[-150px] overflow-hidden rotate-[-15deg] md:block hidden">
        <Image src='/Ellipse3.svg' alt='Ellipse' height={100} width={24} className="absolute w-[80rem] h-[75rem] left-[-12rem] top-[0px] overflow-hidden opacity-60 md:block hidde"/>
        </div>
        <div className="absolute h-[25rem] w-[68.0625rem] top-[100px] left-[-150px] overflow-hidden rotate-[2deg] z-1 md:block hidden">
        <Image src='/Ellipse3.svg' alt='Ellipse' height={100} width={24} className="absolute w-[68.0625rem] h-[56.5rem] left-[-12rem] top-[-10px] overflow-hidden opacity-50"/>
        </div>

        <div className="absolute h-[25rem] w-[51.5rem] top-[180px] left-[-200px] overflow-hidden rotate-[-15deg] z-1 md:block hidden">
        <Image src='/Ellipse3.svg' alt='Ellipse' height={100} width={24} className="absolute w-[51.5rem] h-[44.5rem] left-[-12rem] top-[0px] overflow-hidden opacity-50"/>
        </div>
        </div>
        <div className='relative rounded-[43.75rem] bg-gradient-hero-img h-[170px] w-[170px] md:mt-0 mt-9 md:h-[25rem] md:w-[27rem]'>
        <Image
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] h-[170px] w-[170px] md:h-[25rem] md:w-[27rem]"
                src="/Objects.svg"
                alt="objects"
                width={100}
                height={24}
              />
        </div>
      </div>

    </div>
  )
}

export default HeroHome;