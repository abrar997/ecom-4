import { ServicesData } from "../assets/mockData";

const Services = () => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center grid grid-cols-2 lg:my-[140px] my-12 ga-6 lg:gap-[88px] p-4 lg:p-0">
      {ServicesData.map((service, index) => (
        <div className="grid lg:gap-6 gap-3 items-center" key={index}>
          <div className="bg-black rounded-full m-auto w-16 h-16 border-8 border-[#c1c0c1] flex items-center justify-center text-white text-4xl">
            {service.icon}
          </div>
          <div className="grid lg:gap-2">
            <h1 className="uppercase lg:text-[20px] text-md font-semibold font-secondary lg:leading-7">
              {service.title}
            </h1>
            <p className="text-sm font-secondary text-center">
              {service.paragraph}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Services;
