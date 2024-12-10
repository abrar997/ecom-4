import Button from "../reusable/Button";

const Coupon = () => {
  return (
    <div className="lg:flex grid gap-5 lg:items-center items-start lg:gap-4 lg:whitespace-nowrap lg:col-span-2">
      <input
        type="text"
        className="lg:w-[300px] border lg:py-4 lg:px-6 py-3 px-4 text-md font-secondary border-black rounded"
        placeholder="Coupon Code"
      />
      <div className="mr-auto">
        <Button text="apply coupon" />
      </div>
    </div>
  );
};

export default Coupon;
