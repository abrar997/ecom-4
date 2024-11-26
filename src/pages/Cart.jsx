import { Link } from "react-router-dom";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";

const Cart = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="lg:p-inline p-4 mt-[80px] mb-[140px] grid gap-[80px]">
        <div className="flex items-center gap-3 text-[14px] font-secondary">
          <Link to="" className="opacity-50">
            Home
          </Link>
          <span>/</span>
          <Link to="/cart">Cart</Link>
        </div>

        <div className="grid grid-cols-4 px-10 py-6 text-md capitalize font-secondary shadow-cartItem rounded">
          <h1>Product</h1>
          <h1>Price</h1>
          <h1>Quantity</h1>
          <h1>subtotal</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
