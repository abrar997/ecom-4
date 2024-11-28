import Button from "../reusable/Button";

const Coupon = () => {
  return (
    <div className="flex lg:gap-4 lg:whitespace-nowrap lg:col-span-2">
      <input
        type="text"
        className="lg:w-[300px] border lg:py-4 lg:px-6 px-4 text-md font-secondary border-black rounded"
        placeholder="Coupon Code"
      />
      <Button text="apply coupon" />
    </div>
  );
};

export default Coupon;
