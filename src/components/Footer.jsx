import { BsSend } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="p-inline py-20 grid grid-cols-5 gap-[87px] text-text">
        <div className="grid gap-6">
          <h1 className="text-[24px] font-bold tracking-[3%]">Exclusive</h1>
          <h2 className="font-secondary font-medium text-[20px] leading-7">
            Subscribe
          </h2>
          <p className="text-md font-secondary leading-6">
            Get 10% off your first order
          </p>
          <form>
            <div className="relative border border-white rounded">
              <input
                type="text"
                name=""
                id=""
                className="border-none bg-transparent outline-none placeholder:opacity-40 text-md"
              />
              <BsSend className="absolute right-3 top-3 bottom-3 text-white" />
            </div>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Footer;
