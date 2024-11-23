import { CiSearch } from "react-icons/ci";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const Links = [
    { title: "home", to: "/" },
    { title: "contact", to: "contact" },
    { title: "About", to: "about" },
    { title: "sign up", to: "signup" },
  ];
  return (
    <>
      <div className="flex justify-between p-inline lg:pt-10 lg:pb-4">
        <Link
          to=""
          className="font-bold text-[24px] border-black hover:border-b"
        >
          Exclusive
        </Link>
        <div className="flex items-center gap-x-12 capitalize">
          {Links.map((link, index) => (
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
          <div className="bg-secondary2 rounded relative py-2 px-5">
            <input
              type="text"
              className="outline-none border-none bg-transparent placeholder:font-light placeholder:text-xs"
              placeholder="What are you looking for?"
            />
            <button className="absolute text-2xl right-4 my-auto">
              <CiSearch />
            </button>
          </div>
          <div className="flex gap-4 text-2xl">
            <Link to="" className="relative">
              <IoHeartOutline />
              <span className="absolute -top-2 -right-1 bg-secondary text-white w-4 h-4 rounded-full flex items-center text-sm justify-center">
                0
              </span>
            </Link>
            <Link to="" className="relative">
              <IoCartOutline />
              <span className="absolute -top-2 -right-1 bg-secondary text-white w-4 h-4 rounded-full flex items-center text-sm justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
export default Header;
