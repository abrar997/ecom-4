import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProductsContext = ({ children }) => {
  const data = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  const [cartItems, setCartItems] = useState(data);
  const [productQuantity, setProductQuantity] = useState(1);

  const addToCart = (product) => {
    const selectedItem = {
      title: product.title,
      description: product.description,
      image: product.image,
      price: product.price,
    };

    setCartItems([...cartItems, selectedItem]);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const Increment = (id) => {
    cartItems.map((item) => {
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item;
    });
  };
  const Decrement = (id) => {
    cartItems.map((item) => {
      setProductQuantity(() => item - 1);
    });
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
