const Enhancing = () => {
  const dataTime = [
    { number: 23, text: "Hours" },
    { number: "05", text: "days" },
    { number: 59, text: "minutes" },
    { number: 35, text: "seconds" },
  ];
  return (
    <div className="p-inline">
      <div className="mt-[140px] bg-black grid grid-cols-3 gap-6">
        <div className="py-[69px] flex flex-col items-start pl-14 gap-8 col-span-1">
          <h2 className="font-semibold text-lightGreen font-secondary text-md">
            Categories
          </h2>
          <h1 className="text-5xl font-semibold text-text leading-[50px]">
            Enhance Your Experience
          </h1>
          <div className="flex gap-6">
            {dataTime.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-full w-16 h-16 flex flex-col capitalize items-center justify-center"
              >
                <p className="text-md font-semibold font-secondary">
                  {item.number}
                </p>
                <p className="text-[11px] font-secondary">{item.text}</p>
              </div>
            ))}
          </div>
          <button className="bg-lightGreen rounded py-4 px-12 text-white capitalize">
            buy now
          </button>
        </div>

        <div className="col-span-2 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#D9D9D9] opacity-30 rounded-full blur-[100px] w-[500px] h-[500px]">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enhancing;
