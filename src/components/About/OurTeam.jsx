import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine, RiTwitterLine } from "react-icons/ri";
import Pagination from "../reusable/Pagination";

const OurTeam = ({ data }) => {
  return (
    <div className="grid gap-[42px]">
      <div className="grid lg:grid-cols-3 lg:gap-[30px] gap-8">
        {data.map((item, index) => (
          <div key={index} className="grid gap-8">
            <div className="rounded bg-secondary2 flex items-center justify-center lg:h-[430px] h-[320px]">
              <img
                src={item.image}
                alt=""
                className="lg:h-[392px] h-[300px] mt-auto"
              />
            </div>
            <div className="grid lg:gap-2">
              <h1 className="text-[32px] font-medium tracking-[4%]">
                {item.title}
              </h1>
              <p className="text-md font-secondary">{item.position}</p>
              <div className="flex items-center mt-2 text-2xl gap-4">
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
        <Pagination />
      </div>
    </div>
  );
};

export default OurTeam;
