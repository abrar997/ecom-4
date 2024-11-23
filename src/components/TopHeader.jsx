import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="bg-black text-white h-12 flex items-center lg:p-inline justify-between">
      <div className="flex gap-2 items-center justify-center w-full">
        <p className="text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link to="" className="border-b font-semibold hover:text-gray-300">
          ShopNow
        </Link>
      </div>
      <div className="ml-auto">
        <button className="flex items-center gap-2">
          <span> English</span> <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
