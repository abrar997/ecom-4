import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HeaderLinks } from "../assets/mockData";
import user from "../assets/icons/user.svg";

const Header = ({ isSignUp }) => {
  const [isOpenUser, setIsOpenUSer] = useState(false);
  return (
    <>
      <div className="flex justify-between lg:p-inline lg:pt-10 lg:pb-4 p-4">
        <Link
          to=""
          className="font-bold text-[24px] border-black hover:border-b"
        >
          Exclusive
        </Link>
        <div className="lg:flex hidden items-center gap-x-12 capitalize">
          {HeaderLinks.map((link, index) => (
            <Link
              className="focus:border-b border-black hover:border-b"
              key={index}
              to={link.to}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className={`${!isSignUp && "flex"} items-center gap-6`}>
          <div className="bg-secondary2 rounded relative py-2 px-5 hidden lg:flex">
            <input
              type="text"
              className="outline-none border-none bg-transparent placeholder:font-light placeholder:text-xs"
              placeholder="What are you looking for?"
            />
            <button className="absolute text-2xl right-4 my-auto">
              <CiSearch />
            </button>
          </div>
          {!isSignUp && (
            <div className="flex gap-4 text-[22px] items-center">
              <Link to="/wishlist" className="relative">
                <IoHeartOutline />
                <span className="absolute -top-2 -right-1 bg-secondary text-white w-4 h-4 rounded-full flex items-center text-sm justify-center">
                  0
                </span>
              </Link>
              <Link to="/cart" className="relative">
                <IoCartOutline />
                <span className="absolute -top-2 -right-1 bg-secondary text-white w-4 h-4 rounded-full flex items-center text-sm justify-center">
                  0
                </span>
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsOpenUSer(!isOpenUser)}
                  className="bg-secondary rounded-full w-8 h-8 flex items-center justify-center text-white transition-all duration-300"
                >
                  <img src={user} alt="" />
                </button>
                {isOpenUser && (
                  <div
                    className={`bg-gradient-to-r from-red-500 overflow-hidden to-gray-900 bg-opacity-5 rounded capitalize absolute z-[40] right-0 top-9 w-52 whitespace-nowrap py-[18px] pl-5 pr-4 text-white transform transition-all duration-300 origin-top-right
                   ${
                     isOpenUser ? "scale-100 opacity-100" : "scale-95 opacity-0"
                   }
                   `}
                  >
                    <DropDown />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};
export default Header;

const DropDown = () => {
  return (
    <div className="flex flex-col items-start gap-3">
      <Link to="" className="flex gap-4 items-center w-full">
        <img src={user} />
        <span className="text-sm font-secondary">Manage my account</span>
      </Link>
      <Link to="" className="flex gap-4 items-center w-full">
        <img src={user} />
        <span className="text-sm font-secondary"> my order</span>
      </Link>
      <Link to="" className="flex gap-4 items-center w-full">
        <img src={user} />
        <span className="text-sm font-secondary"> my collection </span>
      </Link>
      <Link to="" className="flex gap-4 items-center w-full">
        <img src={user} />
        <span className="text-sm font-secondary"> my reviews</span>
      </Link>
      <Link to="" className="flex gap-4 items-center w-full">
        <img src={user} />
        <span className="text-sm font-secondary"> logout</span>
      </Link>
    </div>
  );
};
