import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProductsContext = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const [productQuantity, setProductQuantity] = useState(1);
  const [isItem, setIsItem] = useState({});

  const addToCart = (product) => {
    const selectedItem = {
      title: product.title,
      description: product.description,
      image: product.image,
      price: product.price,
    };

    setIsItem(selectedItem);

    setCartItems([...cartItems, selectedItem]);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    console.log(cartItems);
  };

  const Increment = () => {
    if (isItem) setProductQuantity((prev) => prev + 1);
  };
  const Decrement = () => {
    if (isItem) setProductQuantity((prev) => prev - 1);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, productQuantity, Increment, Decrement }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProductsContext;
