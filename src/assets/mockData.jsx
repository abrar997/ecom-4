import { CiCamera, CiHeadphones, CiMobile4 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { BsShopWindow } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";

// icons as svg file
import computer from "./icons/computer.svg";
import computerLight from "./icons/computerLight.svg";
import SmartWatch from "./icons/smart.svg";
import secureServices from "./icons/secureServices.svg";
import SmartWatchLight from "./icons/smartLight.svg";
import gaming from "./icons/gaming.svg";
import gamingLight from "./icons/gamingLight.svg";

// image
import Team1 from "../assets/images/team-1.png";
import Team2 from "../assets/images/team-2.png";
import Team3 from "../assets/images/team-3.png";

export const FirstSectionCategories = [
  { title: "women's fashion", to: "", icon: <IoIosArrowForward /> },
  { title: "men's fashion", to: "", icon: <IoIosArrowForward /> },
  { title: "electronics fashion", to: "" },
  { title: "home & lifestyle fashion", to: "" },
  { title: "medicine", to: "" },
  { title: "sports & outdoor", to: "" },
  { title: "Baby's & toys", to: "" },
  { title: "groceries & pets", to: "" },
  { title: "health & beauty", to: "" },
];

export const CategoriesData = [
  { icon: <CiMobile4 />, title: "phones" },
  {
    icon: (
      <div>
        <img src={computer} alt="smartwatch" className="group-hover:hidden" />
        <img
          src={computerLight}
          alt="smartwatch"
          className="hidden group-hover:block"
        />
      </div>
    ),
    title: "computers",
  },
  {
    icon: (
      <div>
        <img src={SmartWatch} alt="smartwatch" className="group-hover:hidden" />
        <img
          src={SmartWatchLight}
          alt="smartwatch"
          className="hidden group-hover:block"
        />
      </div>
    ),
    title: "smartwatch",
  },
  { icon: <CiCamera />, title: "camera" },
  { icon: <CiHeadphones />, title: "headPhones" },
  {
    icon: (
      <div>
        <img src={gaming} alt="smartwatch" className="group-hover:hidden" />
        <img
          src={gamingLight}
          alt="smartwatch"
          className="hidden group-hover:block"
        />
      </div>
    ),
    title: "Gamin",
  },
];

export const ServicesData = [
  {
    icon: <TbTruckDelivery />,
    title: "FREE AND FAST DELIVERY",
    paragraph: "Free delivery for all orders over $140",
  },
  {
    icon: <CiHeadphones />,
    title: "24/7 CUSTOMER SERVICE",
    paragraph: "Friendly 24/7 customer support",
  },
  {
    icon: <img src={secureServices} />,
    title: "MONEY BACK GUARANTEE",
    paragraph: "We return money within 30 days",
  },
];

export const EnhancingDataTime = [
  { number: 23, text: "Hours" },
  { number: "05", text: "days" },
  { number: 59, text: "minutes" },
  { number: 35, text: "seconds" },
];

export const FormInputsFieldsCheckOut = [
  { label: "First name", to: "", name: "" },
  { label: "Company Name", to: "", name: "" },
  { label: "Street Address", to: "", name: "" },
  { label: " Apartment, floor, etc. (optional)", to: "", name: "" },
  { label: " Town/City*", to: "", name: "" },
  { label: "Phone Number**", to: "", name: "" },
  { label: "Email Address*", to: "", name: "" },
];

export const NumberOfUsersData = [
  {
    icon: <BsShopWindow className="p-1" />,
    number: "10.5k ",
    text: "Sallers active our site",
  },
  { icon: <CiDollar />, number: "33K ", text: "Monthly Product Sale" },
  {
    icon: <TbShoppingBag className="p-0.5" />,
    number: "45.5K ",
    text: "Customer active in our site",
  },
  {
    icon: <FaSackDollar className="p-1" />,
    number: "25K ",
    text: "Anual gross sale in our site",
  },
];

export const TeamData = [
  { title: "Tom Cruise", position: "Founder & Chairman", image: Team1 },
  { title: "Emma Watson", position: "Managing director", image: Team2 },
  { title: "Will Smith", position: "product designer", image: Team3 },
];
