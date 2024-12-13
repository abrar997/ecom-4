import { useContext } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { CartContext } from "../../context/cartContext";

const ProductCart = ({ item }) => {
  const { Decrement, Increment } = useContext(CartContext);
  return (
    <div
      key={item.id}
      className="grid grid-cols-4 gap-4 lg:px-10 px-2 lg:py-6 py-3 lg:text-md text-sm capitalize font-secondary shadow-cartItem rounded items-center"
    >
      <div className="lg:flex gap-5 items-center">
        <img
          src={item.image}
          alt={item.title}
          className="lg:w-[54px] lg:h-[54px] w-8 h-8"
        />
        <h1 className="text-[10px]">{item.title}</h1>
      </div>

      <p>${item.price}</p>
      <div className="flex gap-4 border-[1.5px] border-black rounded items-center justify-between border-opacity-40 lg:w-[72px] lg:h-[44px] lg:px-3 px-2 w-fit h-fit">
        <span>{Number(item.quantity) || 1}</span>
        <div className="flex flex-col">
          <button
            className="w-4 h-4 flex items-center justify-center"
            onClick={() => Increment(item.id)}
          >
            <MdKeyboardArrowUp />
          </button>
          <button
            className="w-4 h-4 flex items-center justify-center"
            onClick={() => Decrement(item.id)}
          >
            <MdKeyboardArrowDown />
          </button>
        </div>
      </div>
      <p>${Number(item.price).toFixed(2) * (item.quantity || 1)}</p>
    </div>
  );
};

export default ProductCart;
