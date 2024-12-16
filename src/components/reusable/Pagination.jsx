const Pagination = ({ isTeam, isHome, totalSlides, activeIndex, onclick }) => {
  return (
    <div
      className={`absolute ${
        isHome && "bottom-4"
      } inset-x-0 flex items-center justify-center lg:gap-3 gap-1`}
    >
      {Array.from({ length: totalSlides }).map((_, i) => (
        <button
          key={i}
          onClick={() => onclick(i)}
          className={`${
            activeIndex === i
              ? "bg-secondary"
              : isTeam
              ? "bg-black opacity-30"
              : "bg-white opacity-50"
          }
            w-3 h-3 flex items-center justify-center rounded-full z-50`}
        >
          <span
            className={`rounded-full w-full h-full${
              activeIndex === i && isHome
                ? "border-white w-full h-full border-[2px]"
                : activeIndex === i && isTeam
                ? "border-white border-[2px] border-opacity-30"
                : ""
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default Pagination;
