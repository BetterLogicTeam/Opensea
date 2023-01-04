// import React from 'react'
import "./Dropslider.css"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import sel_1 from '../Accets/usel-1.avif'
import sel_2 from '../Accets/usel-2.avif'
import sel_3 from '../Accets/usel-3.avif'
import sel_4 from '../Accets/usel-4.avif'


function Dropslider() {
  return (
    <div className=''>
        <div className="">
            <div className="">
            <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide><img src={sel_1} alt="" className="sel_wid" /></SwiperSlide>
        <SwiperSlide><img src={sel_2} alt="" className="sel_wid" /></SwiperSlide>
        <SwiperSlide><img src={sel_3} alt="" className="sel_wid" /></SwiperSlide>
        <SwiperSlide><img src={sel_4} alt="" className="sel_wid" /></SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSl>Slide 7</SwiperSl
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
            </div>
        </div>
    </div>
  )
}

export default Dropslider