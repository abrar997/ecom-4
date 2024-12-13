import { BsDot } from "react-icons/bs";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const HeaderSection = ({
  subtitle,
  title,
  isButton,
  buttonText,
  isNotSlider,
  isTime,
  isFeatured,
  isDetail,
  isButtonTo,
}) => {
  const timeData = [
    { title: "days", number: "03" },
    { title: "hours", number: "23" },
    { title: "minutes", number: "19" },
    { title: "seconds", number: "56" },
  ];
  return (
    <div
      className={`flex flex-col lg:gap-6 gap-3 ${
        isDetail ? "" : "lg:p-inline p-4"
      } `}
    >
      <div className="flex lg:gap-4 gap-2 items-center">
        <div className="bg-secondary w-5 h-10 rounded" />
        <p className="text-secondary text-base capitalize font-semibold">
          {subtitle}
        </p>
      </div>
      <div className="flex items-center">
        {title && (
          <h1 className="font-semibold lg:text-4xl text-2xl lg:tracking-[4%] capitalize">
            {title}
          </h1>
        )}
        {isTime && (
          <div className="lg:flex lg:ml-[87px] ml-6 gap-4 items-center hidden">
            {timeData.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div>
                  <p className="text-xs capitalize font-secondary font-medium">
                    {item.title}
                  </p>
                  <span className="font-semibold text-3xl">{item.number}</span>
                </div>
                <span className={`${index === 3 && "hidden"} text-hoverBtn`}>
                  <BsDot />
                  <BsDot />
                </span>
              </div>
            ))}
          </div>
        )}
        {!isNotSlider && !isButton && !isFeatured && !isDetail && (
          <div className="flex gap-2 ml-auto">
            <button className="bg-secondary2 rounded-full lg:w-11 lg:h-11 w-8 h-8 p-1.5 lg:p-0 flex items-center justify-center text-2xl">
              <FiArrowLeft />
            </button>
            <button className="bg-secondary2 rounded-full lg:w-11 lg:h-11 w-8 h-8 p-1.5 lg:p-0 flex items-center justify-center text-2xl">
              <FiArrowRight />
            </button>
          </div>
        )}
        {isButton && (
          <Link
            to={isButtonTo}
            className="bg-secondary ml-auto lg:py-4 py-2 lg:px-12 px-2 hover:bg-hoverBtn text-white rounded capitalize lg:text-md lg:font-medium text-sm"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};
export default HeaderSection;
