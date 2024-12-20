import { useContext } from "react";
import { ProductsContext } from "../../context/context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import HeaderSection from "../reusable/HeaderSection";
import SingleProduct from "../reusable/SingleProduct";
import Button from "../reusable/Button";
import Hr from "../reusable/Hr";
import "swiper/css";

const FlashProducts = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="flex flex-col lg:gap-10 gap-4 lg:mt-36 mt-8 w-full">
      <HeaderSection
        subtitle="Today's"
        title="Flash Sales"
        isTime
        next={"swiper-button-next"}
        prev={"swiper-button-prev"}
      />
      <div className="lg:pl-[135px] lg:pr-0 px-4">
        <div className="swiper">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation, Autoplay]}
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
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 30,
              },
            }}
            loop={true}
            autoplay
            className="mySwiper"
          >
            {products.slice(0, 6).map((item, index) => (
              <SwiperSlide key={item.id} className="swiper-slide">
                <SingleProduct key={index} product={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="m-auto mt-6 lg:pt-0.5">
        <Button text="view all products" to="/products" />
      </div>
      <Hr className="mt-5" />
    </div>
  );
};
export default FlashProducts;
