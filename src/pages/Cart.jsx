import { useContext, useEffect } from "react";
import ProductCart from "../components/Cart/ProductCart";
import Coupon from "../components/Cart/Coupon";
import CartTotal from "../components/Cart/CartTotal";
import PathPages from "../components/reusable/PathPages";
import TopHeader from "../components/reusable/TopHeader";
import Header from "../components/reusable/Header";
import Footer from "../components/reusable/Footer";
import { CartContext } from "../context/cartContext";

const Cart = () => {
  const { cartItems, Increment, Decrement } = useContext(CartContext);

  const links = [
    { link: "Home", to: "/" },
    { link: "Cart", to: "/cart" },
  ];

  return (
    <div className="overflow-hidden">
      <TopHeader />
      <Header />
      {cartItems.length > 0 ? (
        <div className="lg:p-inline p-4 lg:mt-[80px] mt-8 lg:mb-[140px] mb-12 grid lg:gap-[80px] gap-12">
          <PathPages links={links} lastIndex={1} />
          <div className="grid items-start gap-10 overflow-x-auto w-fit">
            <div className="grid grid-cols-4 gap-4 lg:px-10 px-2 lg:py-6 py-3 text-md capitalize font-secondary shadow-cartItem rounded">
              <h1>Product</h1>
              <h1>Price</h1>
              <h1>Quantity</h1>
              <h1>subtotal</h1>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-10">
                {cartItems.length > 0 &&
                  cartItems.map((item, index) => (
                    <ProductCart
                      item={item}
                      key={index + 1}
                      Increment={Increment}
                      Decrement={Decrement}
                    />
                  ))}
              </div>
            </div>
            <div className="flex lg:justify-between gap-4">
              <button className="border rounded border-black border-opacity-50 lg:py-4 py-3 lg:px-12 px-6 text-md font-secondary capitalize">
                Return to shop
              </button>
              <button className="border rounded border-black border-opacity-50 lg:py-4 py-3 lg:px-12 px-6 text-md font-secondary capitalize">
                update cart
              </button>
            </div>
          </div>

          <div className="lg:flex items-start lg:gap-[173px] grid gap-6">
            <Coupon />
            <CartTotal />
          </div>
        </div>
      ) : (
        <p className="text-3xl font-semibold text-center flex items-center justify-center h-[60vh] capitalize">
          please start add products
        </p>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
