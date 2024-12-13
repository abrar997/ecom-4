import { useContext } from "react";
import { WishListContextProvider } from "../../context/wishlistContext";
import WishListProduct from "./WishListProduct";
import { CartContext } from "../../context/cartContext";

const WishlistAllProducts = () => {
  const { wishListProducts, setWishListProducts } = useContext(
    WishListContextProvider
  );
  const { cartItems, setCartItems } = useContext(CartContext);

  const sendAllProductToCart = () => {
    setCartItems([...cartItems, ...wishListProducts]);
    setWishListProducts([]);
  };

  return (
    <div className="grid lg:gap-[60px] gap-8">
      <div className="flex justify-between items-center">
        <h1 className="font-secondary text-xl font-normal">
          Wishlist ({wishListProducts.length > 0 ? wishListProducts.length : 0})
        </h1>
        <button
          onClick={sendAllProductToCart}
          className="border border-black rounded capitalize lg:py-4 py-2 lg:px-12 px-6 text-md font-secondary"
        >
          Move all to bag
        </button>
      </div>
      {wishListProducts.length > 0 ? (
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-[30px] gap-5">
          {wishListProducts.length > 0 &&
            wishListProducts.map((product, index) => (
              <WishListProduct key={index} product={product} />
            ))}
        </div>
      ) : (
        <p className="text-center text-xl font-secondary text-slate-500 capitalize">
          start add wishlist products
        </p>
      )}
    </div>
  );
};

export default WishlistAllProducts;
