import { EnhancingDataTime } from "../../assets/mockData";

const Enhancing = () => {
  return (
    <div className="lg:p-inline px-4">
      <div className="lg:mt-[140px] mt-10 bg-black grid lg:grid-cols-3 lg:gap-6">
        <div className="w-full lg:py-[69px] py-8 flex flex-col items-start lg:pl-14 pl-4 lg:gap-8 gap-4 col-span-1">
          <h2 className="font-semibold text-lightGreen font-secondary text-md">
            Categories
          </h2>
          <div className="grid gap-2">
            <h1 className="xl:text-5xl lg:text-4xl text-3xl font-semibold  text-text">
              Enhance Your
            </h1>
            <h1 className="xl:text-5xl lg:text-4xl text-3xl font-semibold whitespace-nowrap text-text">
              Shopping Experience
            </h1>
          </div>
          <div className="flex gap-6">
            {EnhancingDataTime.map((item, index) => (
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

        <div className="lg:col-span-2 relative flex">
          <div className="absolute lg:inset-0 flex items-center justify-center">
            <div className="bg-[#D9D9D9] opacity-30 rounded-full blur-[100px] z-0 lg:w-[500px] lg:h-[500px] h-12 w-12"></div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/037/210/464/original/ai-generated-3d-rendering-of-a-shopping-bag-on-transparent-background-ai-generated-free-png.png"
              alt=""
              className="absolute z-10 w-[55%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enhancing;
