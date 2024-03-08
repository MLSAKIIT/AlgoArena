import React from 'react';
import { Navigation, Pagination } from 'swiper/modules'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import DashCoursesCard from './Dashcard';
import { MORE_COURSES } from "@/constants";

const MoreCoursesSwiper = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={2} 
            spaceBetween={0}
            navigation={true} 
            loop={true} 
        >
            {MORE_COURSES.map(({ id, course, members, href }) => (
                <SwiperSlide key={id}>
                    <DashCoursesCard title={course} members={members} href={href}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MoreCoursesSwiper;
