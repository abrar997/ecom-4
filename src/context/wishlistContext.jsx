import { createContext, useEffect, useState } from "react";

export const WishListContextProvider = createContext();

const WishlistContext = ({ children }) => {
  const initialData = localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [];
  const [wishListProducts, setWishListProducts] = useState(initialData);
  const [isLike, setIsLike] = useState(false);

  const addToWishlist = (product) => {
    const existingItem = wishListProducts.find(
      (item) => item.id === product.id
    );
    if (existingItem) {
      alert("remove item from Wishlist");
    } else {
      const item = {
        id: product.id,
        title: product.title,
        description: product.description,
        image: product.description,
        discount: product.discount,
        price: product.price,
        views: product.views,
      };
      setWishListProducts([...wishListProducts, item]);
      setIsLike(true);
    }
  };

  const deleteItem = (id) => {
    const filterProducts = wishListProducts.filter((item) => item.id !== id);
    setWishListProducts(filterProducts);
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishListProducts));
  }, [wishListProducts]);

  return (
    <WishListContextProvider.Provider
      value={{ wishListProducts, addToWishlist, deleteItem, isLike }}
    >
      {children}
    </WishListContextProvider.Provider>
  );
};

export default WishlistContext;
