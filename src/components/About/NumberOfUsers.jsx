const NumberOfUsers = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-4 lg:justify-center items-start gap-[30px]">
      {data.map((item, index) => (
        <div
          key={index}
          className="border border-black p-4 hover:border-slate-50 border-opacity-30 rounded py-[30px] flex lg:grid items-center lg:justify-center gap-4 hover:bg-secondary transition-all duration-300 group"
        >
          <div className="bg-black rounded-full lg:m-auto w-16 h-16 border-8 border-[#c1c0c1] group-hover:border-[#ffffffea] flex items-center justify-center text-white text-4xl">
            {item.icon}
          </div>
          <h1 className="text-center capitalize lg:text-[32px] text-2xl tracking-[4%] font-bold font-secondary group-hover:text-white">
            {item.number}
          </h1>
          <p className="text-center capitalize text-md font-secondary group-hover:text-white">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NumberOfUsers;
