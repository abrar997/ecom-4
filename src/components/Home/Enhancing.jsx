import { EnhancingDataTime } from "../../assets/mockData";

const Enhancing = () => {
  return (
    <div className="lg:p-inline px-4">
      <div className="lg:mt-[140px] mt-10 bg-black lg:grid flex flex-col gap-16 lg:grid-cols-3 lg:gap-6 h-[480px] lg:h-fit">
        <div className="w-full lg:py-[69px] pt-8 flex flex-col items-start lg:pl-14 pl-4 lg:gap-8 gap-4 col-span-1">
          <h2 className="font-semibold text-lightGreen font-secondary text-md">
            Categories
          </h2>
          <div className="grid lg:gap-2">
            <h1 className="xl:text-5xl lg:text-4xl text-3xl font-semibold  text-text">
              Enhance Your
            </h1>
            <h1 className="xl:text-5xl lg:text-4xl text-3xl font-semibold whitespace-nowrap text-text">
              Shopping Experience
            </h1>
          </div>
          <div className="flex lg:gap-6 gap-3">
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
          <button className="bg-lightGreen rounded lg:py-4 py-3 lg:px-12 px-6 text-white capitalize">
            buy now
          </button>
        </div>

        <div className="lg:col-span-2 relative ml-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#D9D9D9] opacity-30 rounded-full blur-[100px] z-0 w-[500px] h-[500px]"></div>
            <img
              src="https://www.pngall.com/wp-content/uploads/2016/05/Photo-Camera-PNG-HD.png"
              alt=""
              className="absolute z-10 lg:w-[58%] w-[65%] -mr-4 lg:-mr-0 md:w-[40%] md:-mt-20 lg:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enhancing;
