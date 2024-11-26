import { Swiper, SwiperSlide } from "swiper/react";
import HeaderSection from "../reusable/HeaderSection";
import SingleProduct from "../reusable/SingleProduct";
import Button from "../reusable/Button";
import Hr from "../reusable/Hr";
import "swiper/css";

const FlashProducts = ({ products }) => {
  return (
    <div className="flex flex-col lg:gap-10 gap-4 lg:mt-36 mt-12">
      <HeaderSection subtitle="Today's" title="Flash Sales" isTime />
      <div className="lg:pl-[135px] lg:pr-0 px-4">
        <div className="swiper">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
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
      <div className="m-auto lg:mt-6 lg:pt-0.5 mt-4">
        <Button text="view all products" />
      </div>
      <Hr className="mt-5" />
    </div>
  );
};
export default FlashProducts;
