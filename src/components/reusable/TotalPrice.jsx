import { useContext } from "react";
import Button from "./Button";
import { CartContext } from "../../context/cartContext";

const TotalPrice = ({ isCheckout }) => {
  const { totalPrice, subtotal } = useContext(CartContext);

  return (
    <div
      className={`${
        !isCheckout &&
        "border border-black rounded lg:py-8 lg:px-6 px-4 py-6  pb-8 "
      } grid lg:gap-6 gap-8 lg:w-full`}
    >
      {!isCheckout && (
        <h1 className="text-xl font-medium font-secondary">Cart Total</h1>
      )}
      <div className="grid gap-4">
        <div className="flex justify-between pb-4 border-b border-black text-md font-secondary items-center">
          <h1>Subtotal</h1>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between pb-4 border-b border-black text-md font-secondary">
          <h1>Shipping</h1>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-md font-secondary">
          <h1>Total:</h1>
          <span>${Number(totalPrice)}</span>
        </div>
      </div>
      {!isCheckout && (
        <div className="m-auto">
          <Button text="process to checkout" to="/checkout" />
        </div>
      )}
    </div>
  );
};
export default TotalPrice;
