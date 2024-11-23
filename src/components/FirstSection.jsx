import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaAppleAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const FirstSection = () => {
  const categories = [
    { title: "women's fashion", to: "", icon: <IoIosArrowForward /> },
    { title: "men's fashion", to: "", icon: <IoIosArrowForward /> },
    { title: "electronics fashion", to: "" },
    { title: "home & lifestyle fashion", to: "" },
    { title: "medicine", to: "" },
    { title: "sports & outdoor", to: "" },
    { title: "Baby's & toys", to: "" },
    { title: "groceries & pets", to: "" },
    { title: "health & beauty", to: "" },
  ];
  return (
    <div className="grid grid-cols-4 gap-x-11 ">
      <div className="border-r col-span-1">
        <div className="pt-10 grid gap-y-4 text-base">
          {categories.map((category, index) => (
            <Link
              to={category.to}
              key={index}
              className="flex justify-between pr-4 items-center capitalize"
            >
              {category.title}
              {category.icon && <span>{category.icon}</span>}
            </Link>
          ))}
        </div>
      </div>
      <div className="col-span-3 text-white flex pt-10  gap-12">
        <div className="relative bg-black p-10 px-11 flex">
          <div className="grid gap-5">
            <div className="flex gap-6 items-center">
              <FaAppleAlt className="w-10 h-12" />
              <span className="text-base capitalize font-secondary">
                phone 14 series
              </span>
            </div>
            <h1 className="font-semibold text-5xl flex flex-col gap-2">
              <span>Up to 10%</span>
              <span>off Voucher</span>
            </h1>
            <button className="flex items-center gap-2">
              <span className="border-b capitalize">shop now</span>
              <IoArrowForward className="text-lg" />
            </button>
          </div>
          <img
            src="https://i0.wp.com/img.talkandroid.com/uploads/2021/07/T-Mobile_REVVL-V-Plus-5G_Nebula-Black_1.png?fit=1280%2C1280&ssl=1"
            alt=""
            className="w-1/3 brightness-75 ml-auto  rotate-3"
          />
          <div className="flex absolute bottom-4 gap-3 left-[353px]">
            <span className="bg-white opacity-50 rounded-full w-3 h-3 cursor-pointer"></span>
            <span className="bg-white opacity-50 rounded-full w-3 h-3 cursor-pointer"></span>
            <span className="bg-secondary border-white border-2  rounded-full w-3 h-3 cursor-pointer"></span>
            <span className="bg-white opacity-50 rounded-full w-3 h-3 cursor-pointer"></span>
            <span className="bg-white opacity-50 rounded-full w-3 h-3 cursor-pointer"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstSection;
