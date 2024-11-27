import { Link } from "react-router-dom";

const Button = ({ text, to }) => {
  return (
    <Link
      to={to}
      className="m-auto bg-secondary capitalize text-white rounded py-4 text-md lg:px-12 px-10 hover:bg-hoverBtn transition-all duration-300"
    >
      {text}
    </Link>
  );
};

export default Button;
