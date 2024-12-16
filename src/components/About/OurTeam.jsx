import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine, RiTwitterLine } from "react-icons/ri";
import PaginationComponent from "../reusable/Pagination";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

const OurTeam = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" lg:gap-[42px] gap-12">
      <div className="lg:gap-[30px] gap-4">
        <Swiper
          pagination={{
            clickable: true,
            el: `swiper-container swiper-container-testClass`,
            bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
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
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded bg-secondary2 flex items-center justify-center lg:h-[430px] h-[300px]">
                <img
                  src={item.image}
                  alt=""
                  className="lg:h-[392px] h-[250px] mt-auto"
                />
              </div>
              <div className=" lg:gap-2">
                <h1 className="lg:text-[32px] text-2xl font-medium lg:tracking-[4%]">
                  {item.title}
                </h1>
                <p className="lg:text-md text-sm font-secondary">
                  {item.position}
                </p>
                <div className="flex items-center mt-2 lg:text-2xl lg:gap-4 gap-2 text-lg">
                  <a href="">
                    <RiTwitterLine />
                  </a>
                  <a href="">
                    <FaInstagram />
                  </a>
                  <a href="">
                    <RiLinkedinLine />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="m-auto">
        <PaginationComponent isTeam activeIndex={activeIndex} />
      </div>
    </div>
  );
};

export default OurTeam;
