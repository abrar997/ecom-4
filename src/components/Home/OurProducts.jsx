import { Grid, Navigation } from "swiper/modules";
import { useContext } from "react";
import { ProductsContext } from "../../context/context";
import Button from "../reusable/Button";
import HeaderSection from "../reusable/HeaderSection";
import SingleProduct from "../reusable/SingleProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/grid";
import "swiper/css";

const OurProducts = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="lg:gap-sections gap-6 lg:mt-[71px] mt-8">
      <HeaderSection
        subtitle="our products"
        title="explore our products"
        prev={"swiper-button-prev-products"}
        next={"swiper-button-next-products"}
      />
      <div className="lg:mt-[60px] mt-0 lg:p-inline p-4">
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
            fill: "row",
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-products",
            prevEl: ".swiper-button-prev-products",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {products.slice(8, 17).map((item, index) => (
            <SwiperSlide>
              <SingleProduct product={item} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="m-auto lg:mt-[60px] mt-4 flex items-center justify-center">
        <Button text="view all products" to="/products" />
      </div>
    </div>
  );
};
export default OurProducts;
