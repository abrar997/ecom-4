import { CiCamera, CiHeadphones, CiMobile4 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { BsBag, BsCamera, BsShopWindow, BsSoundwave } from "react-icons/bs";
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

export const FirstSectionCategoriesData = [
  {
    title: "women's fashion",
    icon: <IoIosArrowForward />,
    category: "womenClothing",
    children: [
      { title: "Dresses", category: "dresses" },
      { title: "Tops & Tees", category: "tops" },
      { title: "Jeans", category: "jeans" },
      { title: "shoes", category: "shoes" },
    ],
  },
  {
    title: "men's fashion",
    icon: <IoIosArrowForward />,
    category: "menClothing",
    children: [
      { title: "shirts", category: "shirts" },
      { title: "trousers", category: "trousers" },
      { title: "suits", category: "suits" },
      { title: "shoes", category: "shoes" },
    ],
  },
  { title: "electronics fashion", category: "electronics" },
  { title: "home & lifestyle fashion", category: "home" },
  { title: "medicine", category: "jewelery" },
  { title: "sports & outdoor", category: "electronics" },
  { title: "Baby's & toys", category: "electronics" },
  { title: "groceries & pets", category: "electronics" },
  { title: "health & beauty", category: "jewelery" },
];

export const FirstSectionSliderData = [
  {
    id: 1,
    title: "Up to 10%",
    title2: "off Voucher",
    subtitle: "Headphone 14 series",
    icon: <BsSoundwave />,
    image:
      "https://www.freeiconspng.com/thumbs/headphones-png/headphones-png-0.png",
  },
  {
    id: 2,
    title: "Up to 10%",
    title2: "off Voucher",
    subtitle: "Headphone 14 series",
    icon: <BsCamera />,
    image:
      "https://th.bing.com/th/id/R.72d1f8bf255823284396a4a0a151e0c3?rik=jv8J2%2blKwwesug&riu=http%3a%2f%2fofficialpsds.com%2fimageview%2f7n%2f5v%2f7n5v26_large.png%3f1521316558&ehk=8VqIS379%2fbnhWV9ng689PIUMN%2fglfnC89yiJZVULVno%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
  },
  {
    id: 3,
    title: "Up to 10%",
    title2: "off Voucher",
    subtitle: "Headphone 14 series",
    icon: <BsBag />,
    image:
      "https://www.freeiconspng.com/thumbs/headphones-png/headphones-png-0.png",
  },
  {
    id: 4,
    title: "Up to 10%",
    title2: "off Voucher",
    subtitle: "Headphone 14 series",
    icon: <BsSoundwave />,
    image:
      "https://www.freeiconspng.com/thumbs/headphones-png/headphones-png-0.png",
  },
  {
    id: 5,
    title: "Up to 10%",
    title2: "off Voucher",
    subtitle: "Headphone 14 series",
    icon: <BsSoundwave />,
    image:
      "https://www.freeiconspng.com/thumbs/headphones-png/headphones-png-0.png",
  },
];

export const CategoriesData = [
  { icon: <CiMobile4 />, title: "phones", category: "electronics" },
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
    category: "electronics",
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
    category: "electronics",
  },
  { icon: <CiCamera />, title: "camera", category: "electronics" },
  { icon: <CiHeadphones />, title: "headPhones", category: "electronics" },
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
    title: "Gaming",
    category: "electronics",
  },
  { icon: <CiHeadphones />, title: "headPhones" },
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
  { title: "Tom Cruise", position: "Founder & Chairman", image: Team1 },
  { title: "Emma Watson", position: "Managing director", image: Team2 },
  { title: "Will Smith", position: "product designer", image: Team3 },
  { title: "Tom Cruise", position: "Founder & Chairman", image: Team1 },
  { title: "Emma Watson", position: "Managing director", image: Team2 },
  { title: "Will Smith", position: "product designer", image: Team3 },
];
