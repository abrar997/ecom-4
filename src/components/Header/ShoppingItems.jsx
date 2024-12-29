import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import Dropdown from "../reusable/Dropdown";
import { CiSearch } from "react-icons/ci";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import userIcon from "../../assets/icons/user.svg";
import SearchField from "./SearchField";
import darkUser from "../../assets/icons/darkUser.svg";

const ShoppingItems = ({
  isRed,
  user,
  handleLogout,
  cartItems,
  dataUser,
  wishListProducts,
  userGoogleData,
}) => {
  //   useEffect(() => {
  //     const handleShoppingCart = () => {
  //       if (window.scrollY > 200 && window.innerWidth < 720) {
  //         document.querySelector(".shopping-items").classList.remove("hidden");
  //         document.querySelector(".shopping-items").classList.add("grid");
  //       } else {
  //         document.querySelector(".shopping-items").classList.add("hidden");
  //         document.querySelector(".shopping-items").classList.remove("grid");
  //       }
  //     };
  //     window.addEventListener("scroll", handleShoppingCart);
  //     return () => window.removeEventListener("scroll", handleShoppingCart);
  //   }, []);

  return (
    <div className="flex items-center lg:gap-4">
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
      <div className="lg:flex shopping-items lg:gap-4 text-[22px] items-center grid gap-3 top-[270px] rounded lg:shadow-none shadow z-30 p-4 px-2 pt-6 lg:p-0 lg:top-0 lg:sticky fixed bg-secondary2 lg:bg-transparent right-0">
        <Link to="/wishlist" className="relative">
          <IoHeartOutline />
          <span className="absolute -top-2 -right-1 bg-secondary text-white w-4 h-4 rounded-full flex items-center text-sm justify-center">
            {wishListProducts && wishListProducts.length > 0
              ? wishListProducts.length
              : 0}
          </span>
        </Link>
        <Link to="/cart" className="relative mt-1 lg:mt-0">
          <IoCartOutline />
          <span className="absolute -top-2 -right-1 bg-secondary text-white w-4 h-4 rounded-full flex items-center text-sm justify-center">
            {cartItems && cartItems.length > 0 ? cartItems.length : 0}
          </span>
        </Link>
        <SearchField className="lg:hidden" />
      </div>
      <div className="relative">
        <Dropdown
          anchor="left start"
          button={
            <>
              {(user || userGoogleData) && isRed ? (
                <img src={userIcon} alt="" />
              ) : (
                ""
              )}
              {(user || userGoogleData) && !isRed && <img src={darkUser} />}
            </>
          }
          ClassBtn={`${
            (user || userGoogleData) && isRed
              ? "bg-secondary rounded-full w-8 h-8 flex items-center justify-center text-white transition-all duration-300"
              : "w-full h-full"
          }`}
          className={`bg-[#000] ${
            isRed ? "bg-opacity-10" : "bg-opacity-90"
          } backdrop-blur-[75px] capitalize bg-opacity-10 origin-top-right rounded absolute z-[40] right-0 top-16 ml-8 mt-10 lg:px-4 lg:w-56 py-[18px] w-fit pl-5 pr-4 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 grid gap-2 items-start`}
          data={dataUser}
          Function={handleLogout}
          itemClassName="flex items-center gap-2 text-white"
        />
      </div>
    </div>
  );
};

export default ShoppingItems;
