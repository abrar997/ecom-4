import { useEffect, useState } from "react";
import HeaderSection from "./reusable/HeaderSection";
import SingleProduct from "./SingleProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "./reusable/Button";
import Hr from "./reusable/Hr";
import "swiper/css";

const FlashProducts = ({ products }) => {
  return (
    <div className="flex flex-col gap-10 mt-36">
      <HeaderSection subtitle="Today's" title="Flash Sales" isTime />
      <div className="pl-[135px]">
        <div className="swiper">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            loop={true}
            className="mySwiper"
          >
            {products.slice(0, 6).map((item) => (
              <SwiperSlide key={item.id} className="swiper-slide">
                <SingleProduct product={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="m-auto mt-6 pt-0.5">
        <Button text="view all products" />
      </div>
      <Hr className="mt-5" />
    </div>
  );
};
export default FlashProducts;
