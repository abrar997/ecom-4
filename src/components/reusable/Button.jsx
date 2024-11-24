const Button = ({ text }) => {
  return (
    <button className="m-auto bg-secondary capitalize text-white rounded py-4 text-md lg:px-12 px-10 hover:bg-hoverBtn transition-all duration-300">
      {text}
    </button>
  );
};

export default Button;
