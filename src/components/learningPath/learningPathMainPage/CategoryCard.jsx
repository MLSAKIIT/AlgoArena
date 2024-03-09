import React from 'react'

const CategoryCard = ({category}) => {
    const {title}=category
  return (
    <div className='m-2 backdrop-blur-[10px]'>
        <div className='border border-color-2 rounded-2xl flex justify-center items-center md:px-5 md:py-5 px-1 py-1 md:w-[200px] w-[100px] text-[8.5px] md:text-sm font-popins font-[600] h-6 md:h-auto hover:shadow-[0_0_12px_3px_#4a0f87] cursor-pointer hover:scale-105 transition-all duration-300'>
            <div className='line-clamp-1'>{title}</div>
        </div>
    </div>
  )
}

export default CategoryCard