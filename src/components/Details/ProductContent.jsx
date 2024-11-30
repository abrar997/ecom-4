import { IoHeartOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import returnIcon from "../../assets/icons/return.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductContent = ({ singleProduct }) => {
  const [counter, setCounter] = useState(1);
  const [totalPrice, setTotalPrice] = useState(singleProduct.price);

  const IncreaseCounter = () => {
    setCounter((prev) => {
      const newCounter = prev + 1;
      setTotalPrice(singleProduct.price * newCounter);
      return newCounter;
    });
  };
  const DecreaseCounter = () => {
    setCounter((prev) => {
      if (counter > 1) {
        const newCounter = prev - 1;
        setTotalPrice(singleProduct.price * newCounter);
        return newCounter;
      } else {
        return prev;
      }
    });
  };

  return (
    <div className="flex flex-col lg:gap-6 gap-6 col-span-1">
      <ProductContents singleProduct={singleProduct} totalPrice={totalPrice} />
      <div className="bg-black h-[1px] w-full" />
      <Colours />
      <Sizes />
      <Counter
        IncreaseCounter={IncreaseCounter}
        counter={counter}
        DecreaseCounter={DecreaseCounter}
      />
      <Offers />
    </div>
  );
};

export default ProductContent;

const Colours = () => {
  return (
    <div className="flex lg:gap-6 gap-3 items-center">
      <h1 className="text-xl">Colours:</h1>
      <div className="flex gap-2">
        <button className="w-5 h-5 rounded-full border-black border flex items-center justify-center">
          <div className="bg-[#A0BCE0] w-3 h-3 rounded-full" />
        </button>
        <button className="w-5 h-5 rounded-full border-black border flex items-center justify-center">
          <div className="bg-[#E07575] w-3 h-3 rounded-full" />
        </button>
      </div>
    </div>
  );
};

const Sizes = () => {
  return (
    <div className="flex items-center lg:gap-6 gap-3">
      <h1 className="text-xl">Size:</h1>
      <div className="flex lg:gap-4 gap-2">
        <button className="w-8 h-8 rounded border border-black border-opacity-50 text-sm font-medium font-secondary">
          XS
        </button>
        <button className="w-8 h-8 rounded border border-black border-opacity-50 text-sm font-medium font-secondary">
          S
        </button>
        <button className="w-8 h-8 rounded border border-black border-opacity-50 text-sm font-medium font-secondary">
          M
        </button>
        <button className="w-8 h-8 rounded border border-black border-opacity-50 text-sm font-medium font-secondary">
          L
        </button>
        <button className="w-8 h-8 rounded border border-black border-opacity-50 text-sm font-medium font-secondary">
          XL
        </button>
      </div>
    </div>
  );
};

const ProductContents = ({ singleProduct, totalPrice }) => {
  return (
    <div className="grid lg:gap-6 gap-3">
      <div className="grid lg:gap-4 gap-2">
        <h1 className="text-2xl font-semibold tracking-[3%]">
          {singleProduct.title}
        </h1>
        <div className="flex gap-4 font-secondary text-sm">
          <div className="flex gap-2">
            <div>views</div>
            <span className="opacity-50">({singleProduct.views} Reviews)</span>
          </div>
          <span>|</span>
          <span className="text-lightGreen capitalize">in stock</span>
        </div>
        <p className="lg:text-2xl text-xl">
          ${totalPrice || singleProduct.price}
        </p>
      </div>
      <p className="text-sm font-secondary">{singleProduct.description}</p>
    </div>
  );
};

const Counter = ({ IncreaseCounter, counter, DecreaseCounter }) => {
  return (
    <div className="flex lg:gap-4 items-center">
      <div className="flex items-center justify-center border border-black border-r-0 rounded border-opacity-50">
        <button
          onClick={DecreaseCounter}
          className="w-10 h-11  border border-r border-l-0 border-t-0 border-b-0 border-black border-opacity-50"
        >
          -
        </button>
        <span className="px-4">{counter}</span>
        <button
          className="bg-secondary text-white w-10 h-11 rounded rounded-l-none"
          onClick={IncreaseCounter}
        >
          +
        </button>
      </div>
      <Link
        to=""
        className="m-auto bg-secondary capitalize text-white rounded lg:py-[10px] py-3 text-md lg:px-12 px-6 hover:bg-hoverBtn transition-all duration-300"
      >
        buy now
      </Link>
      <button className="w-10 h-10 rounded flex items-center justify-center border border-black text-2xl border-opacity-50">
        <IoHeartOutline />
      </button>
    </div>
  );
};

const Offers = () => {
  return (
    <div className="grid border rounded py-6 gap-4 border-black border-opacity-50">
      <div className="flex items-center gap-4 border-b border-black pl-4">
        <TbTruckDelivery className="text-5xl" />
        <div className="flex flex-col gp-2">
          <h1 className="text-md font-secondary font-medium">Free Delivery</h1>
          <p className="text-xs font-secondary pb-4">
            Enter your postal code for Delivery Availability
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 border-black pl-4">
        <img src={returnIcon} alt="" />
        <div className="flex flex-col gp-2">
          <h1 className="text-md font-secondary font-medium">
            Return Delivery
          </h1>
          <p className="text-xs font-secondary">
            Free 30 Days Delivery Returns. Details
          </p>
        </div>
      </div>
    </div>
  );
};
