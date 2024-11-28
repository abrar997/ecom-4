import { Link } from "react-router-dom";

const Button = ({ text, to }) => {
  return (
    <Link
      to={to}
      className="m-auto bg-secondary capitalize text-white rounded lg:py-4 py-3 text-md lg:px-12 px-6 hover:bg-hoverBtn transition-all duration-300"
    >
      {text}
    </Link>
  );
};

export default Button;
