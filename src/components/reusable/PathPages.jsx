import { Link } from "react-router-dom";

const PathPages = ({ links, lastIndex }) => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center lg:gap-3 gap-2 text-[14px] font-secondary">
      {links.map((item, index) => (
        <div
          className="flex items-center gap-3 text-[14px] font-secondary capitalize"
          key={index}
        >
          <Link
            to={item.to}
            className={`${index === lastIndex ? "opacity-50" : "opacity-100"}`}
          >
            {item.link}
          </Link>
          <span className={`${lastIndex === index && "hidden"}`}>/</span>
        </div>
      ))}
    </div>
  );
};

export default PathPages;
