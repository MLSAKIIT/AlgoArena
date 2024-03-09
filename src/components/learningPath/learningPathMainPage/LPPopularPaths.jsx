import React from 'react'
import PopularCard from './PopularCard'
import { dataRec } from './dummy'

const LPPopularPaths = () => {
  return (
    <div className='max-w-6xl mx-auto m-5 w-screen'>
        <div className='flex items-end justify-between my-2 md:my-5 m-3'>
        <div className='text-xl md:text-3xl font-popins bg-gradient-course bg-clip-text text-transparent w-[360px] font-bold'>Popular Paths</div>
        </div>
        <div className='flex overflow-scroll no-scrollbar m-2'>
        {dataRec.map((data,i)=><PopularCard key={i} course={data}/>)}
        </div>
    </div>
  )
}

export default LPPopularPaths