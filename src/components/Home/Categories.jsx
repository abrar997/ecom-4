import { CategoriesData } from "../../assets/mockData";
import HeaderSection from "../reusable/HeaderSection";
import Hr from "../reusable/Hr";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

const Categories = () => {
  return (
    <div className="lg:py-20 py-4 lg:gap-sections">
      <HeaderSection
        subtitle="categories"
        title="browse by category"
        next={"swiper-button-next-C"}
        prev={"swiper-button-prev-cate"}
      />
      <div className="lg:p-inline p-4 lg:mt-[60px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          grabCursor={true}
          navigation={{
            nextEl: ".swiper-button-next-C",
            prevEl: ".swiper-button-prev-cate",
          }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          autoplay
          loop={true}
          className="mySwiper"
        >
          {CategoriesData.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="border border-black p-4 lg:h-36 lg:pt-[25px] hover:border-slate-50 border-opacity-30 rounded  flex lg:grid items-center lg:justify-center gap-4 hover:bg-secondary transition-all duration-300 group">
                <div className="text-5xl lg:m-auto group-hover:text-white">
                  {category.icon}
                </div>
                <h2 className="text-center capitalize text-md font-secondary group-hover:text-white">
                  {category.title}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Hr className="lg:mt-[70px] mt-10" />
    </div>
  );
};
export default Categories;
