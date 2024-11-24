import { ServicesData } from "../assets/mockData";

const Services = () => {
  return (
    <div className="flex justify-center items-center my-[140px] gap-[88px]">
      {ServicesData.map((service, index) => (
        <div className="grid gap-6 items-center" key={index}>
          <div className="bg-black rounded-full m-auto w-16 h-16 border-8 border-[#c1c0c1] flex items-center justify-center text-white text-4xl">
            {service.icon}
          </div>
          <div className="grid gap-2">
            <h1 className="uppercase text-[20px] font-semibold font-secondary leading-7">
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
