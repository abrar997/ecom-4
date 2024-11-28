const Pagination = ({ isHome }) => {
  return (
    <div
      className={`flex lg:gap-3 gap-1 ${
        isHome ? "absolute bottom-4 lg:left-[353px] left-[40%]" : ""
      }`}
    >
      <span
        className={`${
          isHome ? "bg-white  opacity-50" : "bg-black opacity-30"
        } rounded-full w-3 h-3 cursor-pointer`}
      />
      <span
        className={`${
          isHome ? "bg-white  opacity-50" : "bg-black opacity-30"
        } rounded-full w-3 h-3 cursor-pointer`}
      />
      <span
        className={`${
          isHome ? "border-white" : "border-black border-opacity-30"
        } bg-secondary border-2  rounded-full w-3 h-3 cursor-pointer`}
      />
      <span
        className={`${
          isHome ? "bg-white  opacity-50" : "bg-black opacity-30"
        } rounded-full w-3 h-3 cursor-pointer`}
      />
      <span
        className={`${
          isHome ? "bg-white  opacity-50" : "bg-black opacity-30"
        } rounded-full w-3 h-3 cursor-pointer`}
      />
    </div>
  );
};

export default Pagination;
