import { createContext, useEffect, useState } from "react";

export const WishListContextProvider = createContext();

const WishlistContext = ({ children }) => {
  const initialData = localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [];

  const [wishListProducts, setWishListProducts] = useState(initialData);

  const addToWishlist = (product) => {
    const existingItem = wishListProducts.find(
      (item) => item.id === product.id
    );
    if (existingItem && Array.isArray(wishListProducts)) {
      const filteredItems = wishListProducts.filter(
        (item) => item.id !== product.id
      );
      setWishListProducts(filteredItems);
    } else {
      const item = {
        id: product.id,
        title: product.title,
        description: product.description,
        image: product.image,
        discount: product.discount,
        price: product.price,
        views: product.views,
        oldPrice: product.oldPrice,
      };
      setWishListProducts([...wishListProducts, item]);
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
      value={{
        wishListProducts,
        setWishListProducts,
        addToWishlist,
        deleteItem,
      }}
    >
      {children}
    </WishListContextProvider.Provider>
  );
};

export default WishlistContext;
