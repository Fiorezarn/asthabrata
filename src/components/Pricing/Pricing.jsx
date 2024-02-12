import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Card } from "flowbite-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="w-full px-4 py-20" id="pricing">
      <div className="flex items-center">
        <div className="flex-1 bg-[#3F72AF] h-[3px]" />
        <p className="mx-4 text-[#3F72AF] text-4xl font-bold">Pricing Table</p>
        <div className="flex-1 bg-[#3F72AF] h-[3px]" />
      </div>
      <div className="lg:flex justify-center lg:gap-5 mt-10">
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
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper pt-28"
        >
          <SwiperSlide>
            <Card className="max-w-sm my-6 lg:my-0">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Andalalin Rendah
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">Rp</span>
                <div className="flex items-center">
                  <span className="text-5xl font-extrabold tracking-tight mr-1">
                    45
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 mb-6">
                    jt
                  </span>
                </div>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /Project
                </span>
              </div>
              <ul className="my-7 space-y-5">
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    1 Team Surveyors
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Harga Khusus Jabodetabek
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Konsultasi Gratis
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Tenaga Ahli Muda
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Video 3D Model
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-blue-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
              >
                Order Now
              </button>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="max-w-sm my-6 lg:my-0 ">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Andalalin Sedang
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">Rp</span>
                <div className="flex items-center">
                  <span className="text-5xl font-extrabold tracking-tight mr-1">
                    55
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 mb-6">
                    jt
                  </span>
                </div>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /Project
                </span>
              </div>
              <ul className="my-7 space-y-5">
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    2 Team Surveyors
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Harga Khusus Jabodetabek
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Konsultasi Gratis
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Tenaga Ahli Muda
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Video 3D Model
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-blue-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
              >
                Order Now
              </button>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="max-w-sm my-6 lg:my-0">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Andalalin Tinggi
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">Rp</span>
                <div className="flex items-center">
                  <span className="text-5xl font-extrabold tracking-tight mr-1">
                    75
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 mb-6">
                    jt
                  </span>
                </div>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /Project
                </span>
              </div>
              <ul className="my-7 space-y-5">
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    3 Team Surveyors
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Harga Khusus Jabodetabek
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Konsultasi Gratis
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Tenaga Ahli Utama
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Video 3D Model
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-blue-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
              >
                Order Now
              </button>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="max-w-sm my-6 lg:my-0">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                SLF & PBG
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">Rp</span>
                <div className="flex items-center">
                  <span className="text-5xl font-extrabold tracking-tight mr-1">
                    125
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 mb-6">
                    jt
                  </span>
                </div>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /Project
                </span>
              </div>
              <ul className="my-7 space-y-5">
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    1 Team Surveyors
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Harga Khusus Jabodetabek
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Konsultasi Gratis
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Tenaga Ahli
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    3D Model
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-blue-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
              >
                Order Now
              </button>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="max-w-sm my-6 lg:my-0">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                IZIN LINGKUNGAN
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">Rp</span>
                <div className="flex items-center">
                  <span className="text-5xl font-extrabold tracking-tight mr-1">
                    80
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 mb-6">
                    jt
                  </span>
                </div>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /Project
                </span>
              </div>
              <ul className="my-7 space-y-5">
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    1 Team Surveyors
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Harga Khusus Jabodetabek
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Konsultasi Gratis
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Tenaga Ahli
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Hasil Uji Lab
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-blue-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
              >
                Order Now
              </button>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Pricing;
