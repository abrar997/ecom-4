import { Link } from "react-router-dom";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import { useContext } from "react";
import { ProductsContext } from "../context/context";
import ProductCart from "../components/Cart/ProductCart";
import Footer from "../components/Footer";
import Coupon from "../components/Cart/Coupon";
import CartTotal from "../components/Cart/CartTotal";

const Cart = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);

  return (
    <div>
      <TopHeader />
      <Header />
      <div className="lg:p-inline p-4 lg:mt-[80px] mt-8 lg:mb-[140px] mb-12 grid lg:gap-[80px] gap-12">
        <div className="flex items-center gap-3 text-[14px] font-secondary">
          <Link to="/" className="opacity-50">
            Home
          </Link>
          <span>/</span>
          <Link to="/cart">Cart</Link>
        </div>
        <div className="grid items-start gap-10 overflow-auto">
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
          <div className="flex justify-between">
            <button className="border rounded border-black border-opacity-50 py-4 px-12 text-md font-secondary capitalize">
              Return to shop
            </button>
            <button className="border rounded border-black border-opacity-50 py-4 px-12 text-md font-secondary capitalize">
              update cart
            </button>
          </div>
        </div>

        <div className="lg:flex items-start lg:gap-[173px] grid gap-6">
          <Coupon />
          <CartTotal />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
