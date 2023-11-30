import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Vswiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="./img/Party/vt1.jpg"/></SwiperSlide>
        <SwiperSlide><img src="./img/Party/vt2.jpg"/></SwiperSlide>
        <SwiperSlide><img src="./img/Party/vt3.jpg"/></SwiperSlide>
        <SwiperSlide><img src="./img/Party/vt4.jpg"/></SwiperSlide>
      </Swiper>
    </>
  );
}
