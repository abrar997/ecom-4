import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CheckoutItems = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <div className="grid gap-8">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-md font-secondary"
          >
            <div className="flex items-center gap-6">
              <img src={item.image} className="w-[50px] h-[40px]" />
              <h1>{item.title}</h1>
            </div>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutItems;
