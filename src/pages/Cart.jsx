import { useContext } from "react";
import ProductCart from "../components/Cart/ProductCart";
import Coupon from "../components/reusable/Coupon";
import TotalPrice from "../components/reusable/TotalPrice";
import PathPages from "../components/reusable/PathPages";
import TopHeader from "../components/reusable/TopHeader";
import Header from "../components/reusable/Header";
import Footer from "../components/reusable/Footer";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { CartLinks } from "../assets/LinksPageData";
import { ProductsContext } from "../context/context";
import FilteredProducts from "../components/reusable/FilteredProducts";

const Cart = () => {
  const {
    cartItems,
    Decrement,
    Increment,
    DeleteAllItems,
    totalPrice,
    subtotal,
  } = useContext(CartContext);

  const { filteredProducts, searchProduct, handleSearchProducts, products } =
    useContext(ProductsContext);

  return (
    <div className="overflow-hidden">
      <TopHeader />
      <Header />
      {searchProduct?.trim().length > 0 && filteredProducts?.length > 0 ? (
        <FilteredProducts />
      ) : (
        <div>
          {cartItems && cartItems.length > 0 ? (
            <div className="lg:p-inline p-4 lg:mt-[80px] mt-8 lg:mb-[140px] mb-12 grid lg:gap-[80px] gap-8">
              <PathPages links={CartLinks} lastIndex={1} />
              <div className="grid items-start lg:gap-10 gap-4">
                <div className="grid grid-cols-4 gap-4 lg:px-10 px-2 lg:py-6 py-3 text-md capitalize font-secondary shadow-cartItem rounded">
                  <h1>Product</h1>
                  <h1>Price</h1>
                  <h1>Quantity</h1>
                  <h1>subtotal</h1>
                </div>
                <div className="grid lg:gap-10 gap-4">
                  {cartItems.length > 0 &&
                    cartItems.map((item, index) =>
                      item ? (
                        <ProductCart
                          item={item}
                          key={index}
                          Decrement={Decrement}
                          Increment={Increment}
                        />
                      ) : null
                    )}
                </div>
                <div className="flex lg:justify-between gap-4">
                  <Link
                    to="/products"
                    className="border rounded border-black border-opacity-50 lg:py-4 py-3 lg:px-12 px-6 text-md font-secondary capitalize"
                  >
                    Return to shop
                  </Link>
                  <button
                    onClick={() => DeleteAllItems()}
                    className="border rounded border-black border-opacity-50 lg:py-4 py-3 lg:px-12 px-6 text-md font-secondary capitalize"
                  >
                    update cart
                  </button>
                </div>
              </div>

              <div className="lg:flex items-start lg:gap-[173px] grid gap-10">
                <Coupon />
                <TotalPrice subtotal={subtotal} total={totalPrice} />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-[60vh] flex-col gap-3 px-4 lg:px-0">
              <p className="lg:text-3xl text-2xl font-semibold text-center capitalize">
                please start add products
              </p>
              <Link
                to="/products"
                className="bg-black px-12 py-3 text-white rounded hover:bg-opacity-80 transition-all duration-300 lg:mt-3 mt-2"
              >
                Our Shop
              </Link>
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
