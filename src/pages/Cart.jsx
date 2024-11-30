import { Link } from "react-router-dom";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import { useContext } from "react";
import { ProductsContext } from "../context/context";
import ProductCart from "../components/Cart/ProductCart";
import Footer from "../components/Footer";
import Coupon from "../components/Cart/Coupon";
import CartTotal from "../components/Cart/CartTotal";
import PathPages from "../components/reusable/PathPages";

const Cart = () => {
  const { products } = useContext(ProductsContext);
  const links = [
    { link: "Home", to: "/" },
    { link: "Cart", to: "/cart" },
  ];

  return (
    <div>
      <TopHeader />
      <Header />
      {products.length > 0 ? (
        <div className="lg:p-inline p-4 lg:mt-[80px] mt-8 lg:mb-[140px] mb-12 grid lg:gap-[80px] gap-12">
          <PathPages links={links} lastIndex={1} />
          <div className="grid items-start gap-10">
            <div className="grid grid-cols-4 gap-4 px-10 py-6 text-md capitalize font-secondary shadow-cartItem rounded">
              <h1>Product</h1>
              <h1>Price</h1>
              <h1>Quantity</h1>
              <h1>subtotal</h1>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-10">
                {products.slice(0, 2).map((item, index) => (
                  <ProductCart item={item} key={index} />
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
        <div>please start add products</div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
