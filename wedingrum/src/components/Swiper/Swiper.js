import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function App(){
    return(
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src="img/Party/st1.jpg"/></SwiperSlide>
          <SwiperSlide><img src="img/Party/st2.jpg"/></SwiperSlide>
          <SwiperSlide><img src="img/Party/st3.jpg"/></SwiperSlide>
          <SwiperSlide><img src="img/Party/st4.jpg"/></SwiperSlide>
          <SwiperSlide><img src="img/Party/st5.jpg"/></SwiperSlide>
          <SwiperSlide><img src="img/Party/st6.jpg"/></SwiperSlide>
        </Swiper>
    )
}