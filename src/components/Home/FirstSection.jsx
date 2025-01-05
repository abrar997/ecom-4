import { IoArrowForward } from "react-icons/io5";
import { FirstSectionSliderData } from "../../assets/mockData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import PaginationComponent from "../reusable/Pagination";
import { useState } from "react";
import FirstSectionCategories from "./FirstSectionCategories";
import { Link } from "react-router-dom";

const FirstSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div
      className="lg:grid lg:p-inline w-full flex p-0 lg:grid-cols-4 lg:gap-x-11 overflow-hidden"
      id="firstSection"
    >
      <FirstSectionCategories />
      <div className="lg:col-span-3 w-[85%] lg:w-full text-white lg:order-2 lg:pt-10 pt-0">
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          pagination={{
            clickable: true,
            el: `swiper-container swiper-container-testClass`,
            bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
          }}
          modules={[Pagination, Autoplay]}
          className="h-[344px] bg-black"
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
        >
          {FirstSectionSliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative lg:flex lg:py-10 lg:px-12 py-6 px-4 w-fit lg:w-full">
                <div className="grid lg:gap-5 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="lg:text-3xl">{item.icon}</span>
                    <span className="text-base capitalize font-secondary">
                      {item.subtitle}
                    </span>
                  </div>
                  <h1 className="font-semibold lg:text-5xl text-2xl flex lg:flex-col flex-wrap gap-2 lg:flex-nowrap lg:gap-2">
                    <span>{item.title}</span>
                    <span>{item.title2}</span>
                  </h1>
                  <Link to="/products" className="flex mt-1 items-center gap-2">
                    <span className="border-b capitalize">shop now</span>
                    <IoArrowForward className="text-lg" />
                  </Link>
                </div>

                <img
                  src={item.image}
                  alt=""
                  className="brightness-75 lg:w-[35%] lg:m-auto mx-auto md:w-[20%] md:-mt-4 lg:mt-0 w-[50%] p-2"
                />
              </div>
            </SwiperSlide>
          ))}
          <PaginationComponent
            totalSlides={FirstSectionSliderData.length}
            activeIndex={activeIndex}
            isHome
            onclick={(i) => document.querySelector(".swiper").swiper.slideTo(i)}
          />
        </Swiper>
      </div>
    </div>
  );
};
export default FirstSection;
