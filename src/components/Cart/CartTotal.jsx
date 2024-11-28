import Button from "../reusable/Button";

const CartTotal = () => {
  return (
    <div className="border border-black rounded lg:py-8 lg:px-6 px-4 py-6 grid lg:gap-6 gap-3 w-full">
      <h1 className="text-xl font-medium font-secondary">Cart Total</h1>
      <div className="grid gap-4">
        <div className="flex justify-between pb-4 border-b border-black text-md font-secondary">
          <h1>Subtotal</h1>
          <span>$</span>
        </div>
        <div className="flex justify-between pb-4 border-b border-black text-md font-secondary">
          <h1>Shipping</h1>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-md font-secondary">
          <h1>Total:</h1>
          <span>$1170</span>
        </div>
      </div>
      <div className="m-auto">
        <Button text="process to checkout" to="/checkout" />
      </div>
    </div>
  );
};
export default CartTotal;
