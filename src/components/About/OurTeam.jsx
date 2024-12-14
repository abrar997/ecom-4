import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine, RiTwitterLine } from "react-icons/ri";
import Pagination from "../reusable/Pagination";

const OurTeam = ({ data }) => {
  return (
    <div className="grid lg:gap-[42px] gap-12 relative">
      <div className="grid lg:grid-cols-3 lg:gap-[30px] gap-4">
        {data.map((item, index) => (
          <div key={index} className="grid lg:gap-8 gap-3">
            <div className="rounded bg-secondary2 flex items-center justify-center lg:h-[430px] h-[300px]">
              <img
                src={item.image}
                alt=""
                className="lg:h-[392px] h-[250px] mt-auto"
              />
            </div>
            <div className="grid lg:gap-2">
              <h1 className="lg:text-[32px] text-2xl font-medium lg:tracking-[4%]">
                {item.title}
              </h1>
              <p className="lg:text-md text-sm font-secondary">
                {item.position}
              </p>
              <div className="flex items-center mt-2 lg:text-2xl lg:gap-4 gap-2 text-lg">
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
        ))}
      </div>
      <div className="m-auto">
        <Pagination isTeam />
      </div>
    </div>
  );
};

export default OurTeam;
