import { AiOutlineSend } from "react-icons/ai";
import { BiCopyright } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";
import { Link } from "react-router-dom";
// images
import Qr from "../assets/images/QrFooter.png";
import google from "../assets/images/googleFooter.png";
import store from "../assets/images/storeFooter.png";

const Footer = () => {
  return (
    <div className="bg-black font-secondary">
      <div className="lg:p-inline p-4 lg:py-20 py-10 grid lg:grid-cols-5 lg:gap-[87px] gap-8 text-text items-start">
        <div className="grid gap-4 col-span-1">
          <div className="flex flex-col gap-6">
            <h1 className="text-[24px] font-bold tracking-[3%]">Exclusive</h1>
            <h2 className="font-medium text-[20px] leading-7">Subscribe</h2>
            <p className="text-md whitespace-nowrap">
              Get 10% off your first order
            </p>
          </div>

          <div className="flex relative justify-between items-center border py-3 border-white rounded">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-none bg-transparent outline-none pl-4 placeholder:opacity-40 text-md"
            />
            <button className="text-xl text-white absolute right-2">
              <AiOutlineSend />
            </button>
          </div>
        </div>

        <div className="grid gap-6">
          <h1 className="text-[20px] font-medium leading-7">Support</h1>
          <div className="grid gap-4 text-md">
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>

        <div className="grid gap-6">
          <h1 className="text-[20px] font-medium leading-7">Account</h1>
          <div className="grid gap-4 text-md">
            <Link to="">My Account</Link>
            <Link to="">Login/Register </Link>
            <Link to="">Cart </Link>
            <Link to="">Wishlist </Link>
            <Link to="">Shop </Link>
          </div>
        </div>

        <div className="grid gap-6">
          <h1 className="text-[20px] font-medium leading-7">Quick Link</h1>
          <div className="grid gap-4 text-md capitalize">
            <Link to="">Privacy policy</Link>
            <Link to="">terms of use </Link>
            <Link to="">FAQ</Link>
            <Link to="">contact </Link>
          </div>
        </div>

        <div className="grid gap-6">
          <h1 className="text-[20px] font-medium leading-7">Download App</h1>

          <div className="grid gap-4 text-md capitalize">
            <p className="text-xs font-medium leading-4 font-secondary whitespace-nowrap">
              Save $3 with App New User Only
            </p>

            <div className="grid lg:grid-cols-2 lg:gap-2 gap-3">
              <img src={Qr} alt="Qr Scan" />
              <div className="grid lg:gap-1 gap-3">
                <img src={google} alt="google play" />
                <img src={store} alt="app store" />
              </div>
            </div>
          </div>

          <div className="flex text-2xl gap-6 items-center">
            <a href="">
              <RiFacebookLine />
            </a>
            <a href="">
              <RiTwitterLine />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <RiLinkedinLine />
            </a>
          </div>
        </div>
      </div>

      <div>
        <hr className="opacity-40" />
        <p className="lg:text-md text-sm pl-4 lg:px-0 text-white opacity-60 gap-[6px] font-secondary font-normal py-4 flex items-center lg:justify-center">
          <BiCopyright /> Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
