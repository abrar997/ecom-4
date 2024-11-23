import { CiCamera, CiHeadphones, CiMobile4 } from "react-icons/ci";
import computer from "./icons/computer.svg";
import computerLight from "./icons/computerLight.svg";
import SmartWatch from "./icons/smart.svg";
import SmartWatchLight from "./icons/smartLight.svg";
import gaming from "./icons/gaming.svg";
import gamingLight from "./icons/gamingLight.svg";

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
