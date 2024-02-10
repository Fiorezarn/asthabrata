import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Konstruksi1 from "../../assets/konstruksi.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import Jasamarga from "../../assets/jasamarga.jpg";
import Pelindo from "../../assets/pelindo.png";
import Dishub from "../../assets/dishub.png";
import Pertamina from "../../assets/pertamina.png";

const Carousel = () => {
  return (
    <>
      <div className="w-full ">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 20000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
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
            <img className="w-3/6 h-[100px]" src={Dishub} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/6 h-[100px]" src={Pertamina} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/6 h-[100px]" src={Pelindo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/6 h-[100px]" src={Jasamarga} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
