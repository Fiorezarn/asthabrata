import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import Kfc from "../../assets/kfc.png";
import Jakpro from "../../assets/jakpro.png";
import Mrt from "../../assets/MRT.png";
import Daihatsu from "../../assets/Dahatsu.png";
import Perhub from "../../assets/perhub.png";
import Shell from "../../assets/shell.png";
import Akr from "../../assets/akr.png";
import Hokben from "../../assets/hokben.png";
import Mitsubisi from "../../assets/mitsubisi.png";
import Broco from "../../assets/logobroco.png";

const Carousel = () => {
  return (
    <>
      <h1 className="text-3xl text-center font-bold mt-10">
        <span className="text-[#3F72AF]">OUR</span>
        <span className="text-[#112D4E]"> CLIENT</span>
      </h1>
      <div className="w-full" id="client">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 20000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-3/6 h-[100px]" src={Kfc} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/6 h-[100px]" src={Jakpro} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/6 h-[100px]" src={Mrt} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/6 h-[100px]" src={Daihatsu} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/6 h-[100px]" src={Perhub} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/6 h-[100px]" src={Shell} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/6 h-[100px]" src={Akr} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/6 h-[100px]" src={Hokben} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/6 h-[100px]" src={Mitsubisi} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/6 h-[100px]" src={Broco} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
