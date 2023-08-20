import "./Style/Style.css";
import pic1 from "./Assits/pic-1.png"
import pic3 from "./Assits/pic-3.png"
import pic4 from "./Assits/pic-4.png"
import pic5 from "./Assits/pic-5.png"
import pic6 from "./Assits/pic-6.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/Autoplay';

export default () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      spaceBetween={20}
      breakpoints={{
        0:{slidesPerView:1,},
        648:{slidesPerView:2,},
        1024:{slidesPerView:3,},
      }}
      centeredSlides= {true} 
      grabCursor= {true}
      autoplay={{ delay: 2000}}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
           <div className="swiper-slide box">
                <img src={pic1} alt=""/>
                <div className="content">
                    <h2>Vishnu Pratap Singh</h2>
                    <h3>IIITDM Chennai</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo ducimus minus delectus ipsum pariatur maiores?</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className="swiper-slide box">
                <img src={pic6} alt=""/>
                <div className="content">
                    <h2>Satyam Rao</h2>
                    <h3>IIITDM Chennai</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo ducimus minus delectus ipsum pariatur maiores?</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className="swiper-slide box">
                <img src={pic3} alt=""/>
                <div className="content">
                    <h2>Shudhanshu Singh</h2>
                    <h3>IIt Patna</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo ducimus minus delectus ipsum pariatur maiores?</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className="swiper-slide box">
                <img src={pic4} alt=""/>
                <div className="content">
                    <h2>Avino Joshi</h2>
                    <h3>MNIT Allahabad</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo ducimus minus delectus ipsum pariatur maiores?</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className="swiper-slide box">
                <img src={pic5} alt=""/>
                <div className="content">
                    <h2>Swechchha Dubey</h2>
                    <h3>LBSH Medical College</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo ducimus minus delectus ipsum pariatur maiores?</p>
                </div>
            </div>
      </SwiperSlide>
    </Swiper>
  );
};