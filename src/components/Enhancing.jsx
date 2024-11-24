import enhanceImage from "../assets/images/enhance.png";

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
          <div className="grid gap-2">
            <h1 className="text-5xl font-semibold  text-text">Enhance Your</h1>
            <h1 className="text-5xl font-semibold whitespace-nowrap text-text ">
              Shopping Experience
            </h1>
          </div>
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
            <div className="bg-[#D9D9D9] opacity-30 rounded-full blur-[100px] z-0 w-[500px] h-[500px]"></div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/037/210/464/original/ai-generated-3d-rendering-of-a-shopping-bag-on-transparent-background-ai-generated-free-png.png"
              // "https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-black-shopping-bag-isolated-with-reflect-floor-for-mockup-png-image_9938141.png"
              alt=""
              className="absolute z-10 w-[60%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enhancing;
