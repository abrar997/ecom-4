import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HeaderLinks } from "../assets/mockData";
import userIcon from "../assets/icons/user.svg";
import darkUser from "../assets/icons/darkUser.svg";
import { AuthContext } from "../context/authContext";

const Header = ({ isRed }) => {
  const [isOpenUser, setIsOpenUser] = useState(false);
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <>
      <div className="flex justify-between lg:p-inline lg:pt-10 lg:pb-4 p-4">
        <Link to="/" className="font-bold text-[24px] border-black">
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
        <div className="flex items-center gap-6">
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
              {user && isRed ? (
                <button
                  onClick={() => setIsOpenUser(!isOpenUser)}
                  className="bg-secondary rounded-full w-8 h-8 flex items-center justify-center text-white transition-all duration-300"
                >
                  <img src={userIcon} alt="" />
                </button>
              ) : (
                ""
              )}
              {user && !isRed && (
                <button onClick={() => setIsOpenUser(!isOpenUser)}>
                  <img src={darkUser} />
                </button>
              )}
              {isOpenUser && (
                <div
                  className={`bg-[#000] backdrop-blur-[75px] bg-opacity-10 overflow-hidden to-black rounded capitalize absolute z-[40] right-0 top-9 w-52 whitespace-nowrap py-[18px] pl-5 pr-4 text-white transform transition-all duration-300 origin-top-right
                   ${
                     isOpenUser ? "scale-100 opacity-100" : "scale-95 opacity-0"
                   }`} /* Account Dropdown */
                >
                  <DropDown
                    handleLogout={handleLogout}
                    setIsOpenUser={setIsOpenUser}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
export default Header;

const DropDown = ({ handleLogout, setIsOpenUser }) => {
  return (
    <div className="flex flex-col items-start gap-3">
      <Link to="/account" className="flex gap-4 items-center w-full">
        <img src={userIcon} />
        <span className="text-sm font-secondary">Manage my account</span>
      </Link>
      <Link to="" className="flex gap-4 items-center w-full">
        <img src={userIcon} />
        <span className="text-sm font-secondary"> my order</span>
      </Link>
      <Link to="" className="flex gap-4 items-center w-full">
        <img src={userIcon} />
        <span className="text-sm font-secondary"> my collection </span>
      </Link>
      <Link to="" className="flex gap-4 items-center w-full">
        <img src={userIcon} />
        <span className="text-sm font-secondary"> my reviews</span>
      </Link>
      <button
        onClick={() => {
          handleLogout();
          setIsOpenUser(false);
        }}
        to=""
        className="flex gap-4 items-center w-full"
      >
        <img src={userIcon} />
        <span className="text-sm font-secondary"> logout</span>
      </button>
    </div>
  );
};
