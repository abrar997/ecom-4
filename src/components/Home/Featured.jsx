import HeaderSection from "../reusable/HeaderSection";
import feature1 from "../../assets/images/feature-1.png";
import feature2 from "../../assets/images/feature-2.jpg";
import feature3 from "../../assets/images/feature-3.png";
import feature4 from "../../assets/images/feature-4.png";

const Featured = () => {
  return (
    <div className="lg:mt-[140px] mt-8 grid lg:gap-sections">
      <HeaderSection subtitle="featured" title="new arrival" isFeatured />
      <div className="grid lg:grid-cols-2 text-text lg:gap-[30px] gap-4 lg:p-inline p-4">
        <div className="relative bg-black lg:h-[600px] h-[300px]">
          <img
            className="absolute bottom-0 right-0 lg:w-[80%] w-1/2 md:w-1/3"
            src={feature1}
          />
          <div className="absolute left-8 bottom-8 flex flex-col gap-4 items-start">
            <h1 className="font-semibold text-[24px]">PlayStation 5</h1>
            <p className="font-secondary text-sm leading-5">
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <Button />
          </div>
        </div>
        <div className="grid gap-8">
          <div className="relative bg-black h-[284px]">
            <img className="absolute bottom-0 right-0 h-full" src={feature2} />
            <div className="absolute left-8 bottom-8 flex flex-col gap-4 items-start">
              <h1 className="font-semibold text-[24px] capitalize">
                women collections
              </h1>
              <p className="font-secondary text-sm leading-5">
                Featured woman collections that give you another vibe.
              </p>
              <Button />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[30px] h-[284px]">
            <div className="relative bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={feature3}
                  alt=""
                  className="absolute z-10 lg:w-1/2 w-1/2"
                />
              </div>
              <div className="absolute z-30 left-8 bottom-8 flex flex-col gap-4 items-start">
                <h1 className="font-semibold text-[24px] capitalize">
                  Speakers
                </h1>
                <p className="font-secondary text-sm leading-5">
                  Company wireless speakers
                </p>
                <Button />
              </div>
            </div>
            <div className="relative bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#D9D9D9] opacity-30 rounded-full blur-[100px] z-0 w-[500px] h-[500px]"></div>
                <img src={feature4} alt="" className="absolute z-10 w-1/2" />
              </div>
              <div className="absolute z-30 left-8 bottom-8 flex flex-col gap-4 items-start">
                <h1 className="font-semibold text-[24px] capitalize">
                  Perfume
                </h1>
                <p className="font-secondary text-sm leading-5 uppercase">
                  Jasmine INTENSE OUD EDP
                </p>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;

const Button = () => {
  return (
    <button className="text-white text-md font-medium font-secondary border-b border-gray-400 leading-6 capitalize">
      Shop now
    </button>
  );
};
