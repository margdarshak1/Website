import React from 'react'
import "./Style/Style.css";
import back1 from "./Assits/back-1.jpg"
import back2 from "./Assits/back-2.jpg"
import back from "./Assits/back.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      spaceBetween={1}
      slidesPerView={1}
      autoplay={{ delay: 2000}}
    >
      <SwiperSlide>
            <div className="slide">
                <img src={back} alt=""/>
            </div>
      </SwiperSlide>
      <SwiperSlide>
           <div className="slide">
                <img src={back1} alt=""/>
            </div>
      </SwiperSlide>
      <SwiperSlide>
           <div className="slide">
                <img src={back2} alt=""/>
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className="slide">
                <img src={back1} alt=""/>
            </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
