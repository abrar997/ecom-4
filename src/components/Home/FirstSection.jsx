import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaAppleAlt } from "react-icons/fa";
import { FirstSectionCategories } from "../../assets/mockData";
import Pagination from "../reusable/Pagination";

const FirstSection = () => {
  return (
    <div
      className="grid lg:p-inline p-0 lg:grid-cols-4 lg:gap-x-11"
      id="firstSection"
    >
      <div className="border-r col-span-1 p-4 lg:p-0 order-2">
        <div className="lg:pt-10 grid lg:gap-y-4 gap-2 text-base">
          {FirstSectionCategories.map((category, index) => (
            <Link
              to={`category/${category.category}`}
              key={index}
              className="flex justify-between pr-4 items-center capitalize"
            >
              {category.title}
              {category.icon && <span>{category.icon}</span>}
            </Link>
          ))}
        </div>
      </div>
      <div className="lg:col-span-3 text-white lg:order-2 flex lg:pt-10 pt-0 lg:gap-12">
        <div className="relative bg-black lg:py-10 lg:px-11 py-6 px-4 lg:flex w-full">
          <div className="grid lg:gap-5 gap-3">
            <div className="flex lg:gap-6 gap-3 items-center">
              <FaAppleAlt className="lg:w-10 lg:h-12" />
              <span className="text-base capitalize font-secondary">
                Headphone 14 series
              </span>
            </div>
            <h1 className="font-semibold lg:text-5xl text-3xl flex lg:flex-col gap-2">
              <span>Up to 10%</span>
              <span>off Voucher</span>
            </h1>
            <button className="flex items-center gap-2">
              <span className="border-b capitalize">shop now</span>
              <IoArrowForward className="text-lg" />
            </button>
          </div>
          <img
            src="https://www.freeiconspng.com/thumbs/headphones-png/headphones-png-0.png"
            alt=""
            className="brightness-75 lg:w-[33%] m-auto w-[50%] -mt-4 lg:my-0"
          />
          <Pagination isHome />
        </div>
      </div>
    </div>
  );
};
export default FirstSection;
