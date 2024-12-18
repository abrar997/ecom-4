import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="bg-black text-white lg:h-12 lg:flex grid lg:items-center lg:p-inline justify-between px-4 py-3 gap-2 lg:gap-0 font-secondary">
      <div className="flex lg:flex-row flex-col gap-1 lg:gap-2 order-2 items-center justify-center w-full">
        <p className="lg:text-sm text-xs flex text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link
          to="/products"
          className="border-b font-semibold hover:text-gray-300 text-sm lg:text-md"
        >
          ShopNow
        </Link>
      </div>
      <div className="ml-auto lg:order-2">
        <button className="flex items-center gap-2">
          <span> English</span> <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
