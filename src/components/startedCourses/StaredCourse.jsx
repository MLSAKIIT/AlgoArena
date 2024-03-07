import React from 'react'
import data from './dummyData'
import StaredCourseCard from './StaredCourseCard'

const StaredCourse = () => {
  return (
    <div className='max-w-7xl mt-4 mx-auto'>
        <div className='font-popins text-4xl font-[900] bg-gradient-course bg-clip-text text-transparent m-3 hidden md:block'>Your Stared Courses</div>
        <div className='font-popins text-4xl font-[900] bg-gradient-course bg-clip-text text-transparent m-3 block md:hidden'>Stared Courses</div>
        <div className='my-9 m-3'>
            {data.map((course,i)=><StaredCourseCard key={i} course={course} />)}
        </div>


    </div>
  )
}

export default StaredCourse