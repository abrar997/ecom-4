const NumberOfUsers = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-4 lg:justify-center items-start lg:gap-[30px] gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="border border-black lg:p-4 p-2 hover:border-slate-50 border-opacity-30 rounded lg:py-[30px] py-3 flex lg:grid items-center lg:justify-center gap-4 hover:bg-secondary transition-all duration-300 group"
        >
          <div className="bg-black rounded-full lg:m-auto lg:w-16 w-12 lg:h-16 h-12 lg:border-8 border-4 border-[#c1c0c1] group-hover:border-[#ffffffea] flex items-center justify-center text-white lg:text-4xl text-2xl">
            {item.icon}
          </div>
          <h1 className="text-center capitalize lg:text-[32px] text-xl lg:tracking-[4%] font-bold font-secondary group-hover:text-white">
            {item.number}
          </h1>
          <p className="text-center capitalize lg:text-md text-sm font-secondary group-hover:text-white">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NumberOfUsers;
