import { useContext } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { CartContext } from "../../context/cartContext";
import Dropdown from "../reusable/Dropdown";
import userIcon from "../../assets/icons/user.svg";
import order from "../../assets/icons/bag.svg";
import cancel from "../../assets/icons/cancel.svg";
import star from "../../assets/icons/star.svg";
import logout from "../../assets/icons/logout.svg";
import { WishListContextProvider } from "../../context/wishlistContext";
import HeaderItems from "../Header/HeaderItems";

const Header = ({ isRed }) => {
  const { user, handleLogout, userGoogleData } = useContext(AuthContext);
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
      itemClassName: "flex gap-4 items-center w-full text-sm font-secondary",
    },
    {
      title: "my collection",
      icon: <img src={cancel} />,
      to: "/wishlist",
      itemClassName: "flex gap-4 items-center w-full text-sm font-secondary",
    },
    {
      title: "my reviews",
      icon: <img src={star} />,
      to: "/cart",
      itemClassName: "flex gap-4 items-center w-full text-sm font-secondary",
    },
    {
      title: "logout",
      icon: <img src={logout} />,
      to: "/logout",
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
          {/* menu for mobile */}
          <div className="lg:hidden">
            <Dropdown
              button={<IoMenuOutline size={24} />}
              className="bg-[#000] origin-left text-white gap-3 absolute z-[40] inset-x-0 mt-6 whitespace-nowrap p-4 py-8 transition duration-100 ease-in-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 grid items-center justify-center"
              itemClassName="focus:border-b border-black hover:border-b capitalize text-center"
              data={HeaderLinks}
              anchor="top start"
            />
          </div>
          <HeaderItems
            isRed={isRed}
            user={user}
            cartItems={cartItems}
            dataUser={data}
            wishListProducts={wishListProducts}
            userGoogleData={userGoogleData}
          />
        </div>
      </div>
      <hr />
    </>
  );
};
export default Header;
