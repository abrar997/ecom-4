import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  FirstSectionCategories,
  FirstSectionSliderData,
} from "../../assets/mockData";
import Dropdown from "../reusable/Dropdown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import PaginationComponent from "../reusable/Pagination";
import { useState } from "react";

const FirstSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div
      className="lg:grid lg:p-inline p-0 lg:grid-cols-4 lg:gap-x-11"
      id="firstSection"
    >
      <div className="border-r col-span-1 p-4 lg:p-0 order-2 relative">
        <div className="lg:pt-10 grid lg:gap-y-4 gap-2 text-base">
          {FirstSectionCategories.map((category, index) => (
            <div key={index}>
              {category.category === "womenClothing" ||
              category.category === "menClothing" ? (
                <div className="flex justify-between relative">
                  <Dropdown
                    data={
                      category.category === "womenClothing"
                        ? [
                            {
                              id: 1,
                              title: "Dresses",
                              to: `/category/${category.category}`,
                            },
                            {
                              id: 2,
                              title: "Tops & Tees",
                              to: `/category/${category.category}`,
                            },
                            {
                              id: 3,
                              title: "Jeans",
                              to: `/category/${category.category}`,
                            },
                            {
                              id: 4,
                              title: "Shoes",
                              to: `/category/${category.category}`,
                            },
                          ]
                        : [
                            {
                              id: 1,
                              title: "Shirts",
                              to: `/category/${category.category}`,
                            },
                            {
                              id: 2,
                              title: "Trousers",
                              to: `/category/${category.category}`,
                            },
                            {
                              id: 3,
                              title: "Suits",
                              to: `/category/${category.category}`,
                            },
                            {
                              id: 4,
                              title: "Shoes",
                              to: `/category/${category.category}`,
                            },
                          ]
                    }
                    ClassBtn={
                      "text-black flex justify-between pr-4 items-center capitalize"
                    }
                    button={
                      <div className="flex justify-between items-center w-full">
                        <span>{category.title}</span>
                        <span>{category.icon}</span>
                      </div>
                    }
                    anchor="left start"
                    className="bg-white shadow capitalize mt-1 origin-top-left rounded absolute z-[40] right-0 top-0 lg:px-4 lg:w-56 py-3 w-fit pl-5 pr-4 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 grid gap-2 items-start"
                    itemClassName="hover:text-secondary capitalize"
                  />
                </div>
              ) : (
                <Link
                  to={`/category/${category.category}`}
                  className="flex justify-between pr-4 items-center capitalize"
                >
                  {category.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-3 text-white lg:order-2 lg:pt-10 pt-0">
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
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
        >
          {FirstSectionSliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative lg:flex lg:py-10 lg:px-12 py-6 px-4 w-full">
                <div className="grid lg:gap-5 gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-base capitalize font-secondary">
                      {item.subtitle}
                    </span>
                  </div>
                  <h1 className="font-semibold lg:text-5xl text-3xl flex lg:flex-col gap-2">
                    <span>{item.title}</span>
                    <span>{item.title2}</span>
                  </h1>
                  <button className="flex mt-1 items-center gap-2">
                    <span className="border-b capitalize">shop now</span>
                    <IoArrowForward className="text-lg" />
                  </button>
                </div>
                <img
                  src={item.image}
                  alt=""
                  className="brightness-75 lg:w-[35%] m-auto w-[50%] lg:my-0 p-4 lg:py-0"
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
