import "./Style/Style.css";
import wwr from "./Assits/wwr.png"
import wwr2 from "./Assits/wwr2.png"
import wwr3 from "./Assits/wwr3.png"
import wwr4 from "./Assits/wwr4.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/Autoplay';

export default () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      spaceBetween={1}
      slidesPerView={1}
      autoplay={{ delay: 2000}}
    >
      <SwiperSlide>
            <div className="box">
                <img src={wwr} alt=""/>
            </div>
      </SwiperSlide>
      <SwiperSlide>
           <div className="box">
                <img src={wwr2} alt=""/>
            </div>
      </SwiperSlide>
      <SwiperSlide>
           <div className="box">
                <img src={wwr3} alt=""/>
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className="box">
                <img src={wwr4} alt=""/>
            </div>
      </SwiperSlide>
    </Swiper>
  );
};