const Pagination = ({ isTeam, isHome }) => {
  return (
    <div
      className={`absolute ${
        isHome && "bottom-4"
      } inset-x-0 flex items-center justify-center lg:gap-3 gap-1`}
    >
      {Array(
        [1, 2, 3, 4, 5].map((_, i) => (
          <button
            key={i}
            className={`${
              i === 2
                ? "bg-secondary"
                : isTeam
                ? "bg-black opacity-30"
                : "bg-white opacity-50"
            }
            w-3 h-3 flex items-center justify-center rounded-full`}
          >
            <span
              className={`rounded-full w-full h-full ${
                i === 2 && isHome
                  ? "border-white border-[2px]"
                  : i === 2 && isTeam
                  ? "border-white border-[2px] border-opacity-30"
                  : ""
              }`}
            />
          </button>
        ))
      )}
    </div>
  );
};

export default Pagination;

//  ${
//   isTeam ? "bg-black opacity-30" : "bg-white opacity-50"
// }
