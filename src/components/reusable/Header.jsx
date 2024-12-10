import { useContext } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IoCartOutline, IoHeartOutline, IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { AuthContext } from "../../context/authContext";
import { CartContext } from "../../context/cartContext";
import Dropdown from "../reusable/Dropdown";
import userIcon from "../../assets/icons/user.svg";
import darkUser from "../../assets/icons/darkUser.svg";
import order from "../../assets/icons/bag.svg";
import cancel from "../../assets/icons/cancel.svg";
import star from "../../assets/icons/star.svg";
import logout from "../../assets/icons/logout.svg";
import { WishListContextProvider } from "../../context/wishlistContext";

const Header = ({ isRed }) => {
  const { user, handleLogout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const { wishListProducts } = useContext(WishListContextProvider);

  const HeaderLinks = [
    { title: "home", to: "/" },
    { title: "contact", to: "/contact" },
    { title: "About", to: "/about" },
    { title: "sign up", to: "/signup" },
  ];

  const data = [
    {
      title: "Manage my account",
      icon: <img src={userIcon} />,
      to: "/account",
      itemClassName: "flex gap-4 items-center w-full text-sm font-secondary",
    },
    {
      title: "my order",
      icon: <img src={order} />,
      to: "/cart",
      isFunction: false,
      itemClassName: "flex gap-4 items-center w-full text-sm font-secondary",
    },
    {
      title: "my collection",
      icon: <img src={cancel} />,
      to: "/wishlist",
      isFunction: false,
      itemClassName: "flex gap-4 items-center w-full text-sm font-secondary",
    },
    {
      title: "my reviews",
      icon: <img src={star} />,
      to: "/cart",
      isFunction: false,
      itemClassName: "flex gap-4 items-center w-full text-sm font-secondary",
    },
    {
      title: "logout",
      icon: <img src={logout} />,
      isFunction: true,
      handleFunction: handleLogout,
      itemClassName: "flex gap-4 items-center w-full text-sm font-secondary",
    },
  ];
  return (
    <>
      <div className="flex justify-between lg:p-inline lg:pt-10 lg:pb-4 p-4 relative items-center">
        <Link to="/" className="font-bold lg:text-[24px] text-xl border-black">
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
        <div className="flex items-center lg:gap-6 gap-3">
          <div className="lg:hidden">
            <Dropdown
              button={<IoMenuOutline size={24} />}
              className="bg-[#000] origin-left text-white gap-3 absolute z-[40] inset-x-0 mt-6 whitespace-nowrap p-4 py-8 transition duration-100 ease-in-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 grid items-center justify-center"
              itemClassName="focus:border-b border-black hover:border-b capitalize text-center"
              data={HeaderLinks}
              anchor="top start"
            />
          </div>
          <ShoppingItems
            isRed={isRed}
            user={user}
            cartItems={cartItems}
            dataUser={data}
            wishListProducts={wishListProducts}
          />
        </div>
      </div>
      <hr />
    </>
  );
};
export default Header;

const ShoppingItems = ({
  isRed,
  user,
  handleLogout,
  cartItems,
  dataUser,
  wishListProducts,
}) => {
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
      <div className="lg:flex lg:gap-4 text-[22px] items-center grid gap-3 top-[270px]  rounded lg:shadow-none shadow z-30 p-4 px-2 pt-6 lg:p-0 lg:top-0 lg:sticky fixed bg-secondary2 lg:bg-transparent right-0">
        <Link to="/wishlist" className="relative">
          <IoHeartOutline />
          <span className="absolute -top-2 -right-1 bg-secondary text-white w-4 h-4 rounded-full flex items-center text-sm justify-center">
            {wishListProducts && wishListProducts.length > 0
              ? wishListProducts.length
              : 0}
          </span>
        </Link>
        <Link to="/cart" className="relative mt-1 lg:my-0">
          <IoCartOutline />
          <span className="absolute -top-2 -right-1 bg-secondary text-white w-4 h-4 rounded-full flex items-center text-sm justify-center">
            {cartItems && cartItems.length > 0 ? cartItems.length : 0}
          </span>
        </Link>
        <InputField className="lg:hidden" />
      </div>
      <div className="relative">
        <Dropdown
          anchor="left start"
          button={
            <>
              {user && isRed ? <img src={userIcon} alt="" /> : ""}
              {user && !isRed && <img src={darkUser} />}
            </>
          }
          ClassBtn={`${
            user && isRed
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

const InputField = ({ className }) => {
  return (
    <div className={className}>
      <Menu>
        <MenuButton>
          <CiSearch />
        </MenuButton>
        <MenuItems
          transition
          anchor="top start"
          className="origin-left fixed  -mt-20 text-white z-[40] w-full border shadow-lg bg-secondary2 p-4 py-8 transition duration-100 ease-in-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <input
              type="text"
              className="outline-none border-none lg:bg-secondary2 placeholder:font-light placeholder:text-xs p-2 rounded w-full"
              placeholder="What are you looking for?"
            />
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};
