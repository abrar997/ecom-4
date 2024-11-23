import { BsDot } from "react-icons/bs";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const HeaderSection = ({
  subtitle,
  title,
  isButton,
  buttonText,
  isNotSlider,
  isTime,
}) => {
  const timeData = [
    { title: "days", number: "03" },
    { title: "hours", number: "23" },
    { title: "minutes", number: "19" },
    { title: "seconds", number: "56" },
  ];
  return (
    <div className="flex flex-col gap-6 p-inline">
      <div className="flex gap-4 items-center">
        <div className="bg-secondary w-5 h-10 rounded" />
        <p className="text-secondary text-base capitalize font-semibold">
          {subtitle}
        </p>
      </div>
      <div className="flex items-center">
        <h1 className="font-semibold text-4xl tracking-wide capitalize">
          {title}
        </h1>
        {isTime && (
          <div className="flex ml-[87px] gap-4 items-center">
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
        {!isNotSlider && !isButton && (
          <div className="flex gap-2 ml-auto">
            <button className="bg-secondary2 rounded-full w-11 h-11 flex items-center justify-center text-2xl">
              <FiArrowLeft />
            </button>
            <button className="bg-secondary2 rounded-full w-11 h-11 flex items-center justify-center text-2xl">
              <FiArrowRight />
            </button>
          </div>
        )}
        {isButton && (
          <button className="bg-secondary ml-auto py-4 px-12 hover:bg-hoverBtn text-white rounded capitalize text-md font-medium">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};
export default HeaderSection;
