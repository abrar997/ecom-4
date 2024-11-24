import { CiCamera, CiHeadphones, CiMobile4 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
// icons as svg file
import computer from "./icons/computer.svg";
import computerLight from "./icons/computerLight.svg";
import SmartWatch from "./icons/smart.svg";
import SmartWatchLight from "./icons/smartLight.svg";
import gaming from "./icons/gaming.svg";
import gamingLight from "./icons/gamingLight.svg";
import secureServices from "./icons/secureServices.svg";
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
