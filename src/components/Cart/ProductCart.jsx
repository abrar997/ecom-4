import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const ProductCart = ({ item, Increment, Decrement }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:px-10 pz-2 lg:py-6 py-3 lg:text-md text-sm capitalize font-secondary shadow-cartItem rounded lg:items-center items-start">
      <div className="lg:flex gap-5 items-center">
        <img
          src={item.image}
          alt={item.title}
          className="lg:w-[54px] lg:h-[54px] w-9 h-9"
        />
        <h1>{item.title}</h1>
      </div>
      <p>${item.price}</p>
      <div className="flex gap-4 border-[1.5px] border-black rounded items-center border-opacity-40 lg:w-[72px] lg:h-[44px] lg:px-3 px-2 w-fit">
        <span>{item.quantity ? item.quantity : 1}</span>
        <div className="flex flex-col">
          <button className="w-4 h-4" onClick={() => Increment(item.id)}>
            <MdKeyboardArrowUp />
          </button>
          <button className="w-4 h-4" onClick={Decrement}>
            <MdKeyboardArrowDown />
          </button>
        </div>
      </div>
      <p>${Math.floor(item.price * item.quantity)}</p>
    </div>
  );
};

export default ProductCart;
