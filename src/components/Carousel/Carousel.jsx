import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Konstruksi1 from "../../assets/konstruksi.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <div className="w-full py-10">
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
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <figure className="bg-white border-2 border-dashed border-primary rounded-xl drop-shadow-lg overflow-hidden ">
              <blockquote className="p-4 sm:p-8">
                <Icon className="text-primary" icon="icon-park-outline:quote" />
                <p className="text-base px-10px">
                  Mantap!! UI/UX nya bagus mudah dimengerti oleh pengguna!
                </p>
              </blockquote>
              <div className="w-full flex items-center justify-between px-8 py-4 bg-blue-800">
                <div className="flex items-center gap-5">
                  <div className="rounded-full border-2 w-10 h-10 border-white overflow-hidden">
                    <img src={Konstruksi1} />
                  </div>
                  <figcaption className="text-white text-sm text-left">
                    <div>Maulana Dimyati</div>
                    <div className="opacity-70">
                      Student at Dicoding Academy
                    </div>
                  </figcaption>
                </div>
              </div>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="bg-white border-2 border-dashed border-primary rounded-xl drop-shadow-lg overflow-hidden">
              <blockquote className="p-4 sm:p-8">
                <Icon className="text-primary" icon="icon-park-outline:quote" />
                <p className="text-base px-10px">
                  Moneta telah membantu saya melihat alur keuangan setiap bulan
                </p>
              </blockquote>
              <div className="w-full flex items-center justify-between px-8 py-4 bg-blue-800">
                <div className="flex items-center gap-5">
                  <div className="rounded-full border-2 w-10 h-10 border-white overflow-hidden">
                    <img src={Konstruksi1} />
                  </div>
                  <figcaption className="text-white text-sm text-left">
                    <div>David Yappeter</div>
                    <div className="opacity-70">
                      Student at Dicoding Academy
                    </div>
                  </figcaption>
                </div>
              </div>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="bg-white border-2 border-dashed border-primary rounded-xl drop-shadow-lg overflow-hidden">
              <blockquote className="p-4 sm:p-8">
                <Icon className="text-primary" icon="icon-park-outline:quote" />
                <p className="text-base px-10px">
                  Mudah digunakan.. suka banget sama fitur - fiturnya 🥰
                </p>
              </blockquote>
              <div className="w-full flex items-center justify-between px-8 py-4 bg-blue-800">
                <div className="flex items-center gap-5">
                  <div className="rounded-full border-2 w-10 h-10 border-white overflow-hidden">
                    <img src={Konstruksi1} />
                  </div>
                  <figcaption className="text-white text-sm text-left">
                    <div>Annisa Syasqia Zain</div>
                    <div className="opacity-70">
                      Student at Dicoding Academy
                    </div>
                  </figcaption>
                </div>
              </div>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="bg-white border-2 border-dashed border-primary rounded-xl drop-shadow-lg overflow-hidden">
              <blockquote className="p-4 sm:p-8">
                <Icon className="text-primary" icon="icon-park-outline:quote" />
                <p className="text-base px-10px">
                  Good Job! Walaupun sudah bagus jangan berpuas hati, ditunggu
                  pengembangan ke depannya.
                </p>
              </blockquote>
              <div className="w-full flex items-center justify-between px-8 py-4 bg-blue-800">
                <div className="flex items-center gap-5">
                  <div className="rounded-full border-2 w-10 h-10 border-white overflow-hidden">
                    <img src={Konstruksi1} />
                  </div>
                  <figcaption className="text-white text-sm text-left">
                    <div>Fioreza Radhin Naufal</div>
                    <div className="opacity-70">
                      Student at Dicoding Academy
                    </div>
                  </figcaption>
                </div>
              </div>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="bg-white border-2 border-dashed border-primary rounded-xl drop-shadow-lg overflow-hidden">
              <blockquote className="p-4 sm:p-8">
                <Icon className="text-primary" icon="icon-park-outline:quote" />
                <p className="text-base px-10px">
                  Keren nih semua fungsional sudah dapat dijalankan. Desainnya
                  juga cukup baik
                </p>
              </blockquote>
              <div className="w-full flex items-center justify-between px-8 py-4 bg-blue-800">
                <div className="flex items-center gap-5">
                  <div className="rounded-full border-2 w-10 h-10 border-white overflow-hidden">
                    <img src={Konstruksi1} />
                  </div>
                  <figcaption className="text-white text-sm text-left">
                    <div>Egy Yuda Nugraha</div>
                    <div className="opacity-70">
                      Student at Dicoding Academy
                    </div>
                  </figcaption>
                </div>
              </div>
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
