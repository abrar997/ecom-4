import { useContext } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IoCartOutline, IoHeartOutline, IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import userIcon from "../../assets/icons/user.svg";
import darkUser from "../../assets/icons/darkUser.svg";
import { CiSearch } from "react-icons/ci";
import { AuthContext } from "../../context/authContext";

const Header = ({ isRed }) => {
  const { user, handleLogout } = useContext(AuthContext);
  const HeaderLinks = [
    { title: "home", to: "/" },
    { title: "contact", to: "/contact" },
    { title: "About", to: "/about" },
    { title: "sign up", to: "/signup" },
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
          <NavLinksSmallScreens links={HeaderLinks} />
          <ShoppingItems
            isRed={isRed}
            user={user}
            handleLogout={handleLogout}
          />
        </div>
      </div>
      <hr />
    </>
  );
};
export default Header;

const ShoppingItems = ({ isRed, user, handleLogout }) => {
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
            0
          </span>
        </Link>
        <Link to="/cart" className="relative mt-1 lg:my-0">
          <IoCartOutline />
          <span className="absolute -top-2 -right-1 bg-secondary text-white w-4 h-4 rounded-full flex items-center text-sm justify-center">
            0
          </span>
        </Link>
        <InputField className="lg:hidden" />
      </div>
      <div className="relative">
        <Menu>
          <MenuButton
            className={`${
              user && isRed
                ? "bg-secondary rounded-full w-8 h-8 flex items-center justify-center text-white transition-all duration-300"
                : "w-full h-full"
            }`}
          >
            {user && isRed ? <img src={userIcon} alt="" /> : ""}
            {user && !isRed && <img src={darkUser} />}
          </MenuButton>
          <MenuItems
            transition
            anchor="bottom end"
            className={`bg-[#000] ${
              isRed ? "bg-opacity-10" : "bg-opacity-90"
            } backdrop-blur-[75px] capitalize bg-opacity-10 origin-top-right rounded text-white absolute z-[40] right-0 top-10 w-52 whitespace-nowrap py-[18px] pl-5 pr-4 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0`}
          >
            <DropDown handleLogout={handleLogout} />
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

const NavLinksSmallScreens = ({ links }) => {
  return (
    <div className="lg:hidden">
      <Menu>
        <MenuButton>
          <IoMenuOutline size={24} />
        </MenuButton>
        <MenuItems
          transition
          anchor="top start"
          className="bg-[#000] origin-left text-white gap-3 absolute z-[40] inset-x-0 mt-6 whitespace-nowrap p-4 py-8 transition duration-100 ease-in-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 grid items-center justify-center"
        >
          {links.map((link, index) => (
            <MenuItem key={index}>
              <Link
                className="focus:border-b border-black hover:border-b capitalize text-center"
                to={link.to}
              >
                {link.title}
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};
const DropDown = ({ handleLogout }) => {
  return (
    <div className="flex flex-col items-start gap-3">
      <MenuItem>
        <Link to="/account" className="flex gap-4 items-center w-full">
          <img src={userIcon} />
          <span className="text-sm font-secondary">Manage my account</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="" className="flex gap-4 items-center w-full">
          <img src={userIcon} />
          <span className="text-sm font-secondary"> my order</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="" className="flex gap-4 items-center w-full">
          <img src={userIcon} />
          <span className="text-sm font-secondary"> my collection </span>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="" className="flex gap-4 items-center w-full">
          <img src={userIcon} />
          <span className="text-sm font-secondary"> my reviews</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <button
          onClick={() => {
            handleLogout();
          }}
          to=""
          className="flex gap-4 items-center w-full"
        >
          <img src={userIcon} />
          <span className="text-sm font-secondary"> logout</span>
        </button>
      </MenuItem>
    </div>
  );
};

const InputField = ({ className }) => {
  return (
    <div className={className}>
      <Menu>
        <MenuButton>
          <CiSearch className="ml-0.5" />
        </MenuButton>
        <MenuItems
          transition
          anchor="top start"
          className="bg-white origin-left text-white fixed -mt-24 z-[40] inset-x-0 p-4 py-8 transition duration-100 ease-in-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <input
              type="text"
              className="outline-none border-none bg-secondary2 placeholder:font-light placeholder:text-xs p-2 rounded w-full"
              placeholder="What are you looking for?"
            />
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};
