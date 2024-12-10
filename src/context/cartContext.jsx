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
    const updatedQuantity = cartItems.map((item) => {
      if (item.id === id)
        return { ...item, quantity: (item.quantity || 1) + 1 };
    });
    setCartItems(updatedQuantity);
  };
  const Decrement = (id) => {
    const exitingItem = cartItems.find((item) => item.id === id);
    if (exitingItem.quantity > 1) {
      const updatedQuantity = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
      });
      setCartItems(updatedQuantity);
    } else {
      DeleteItem(id);
    }
  };

  const DeleteItem = (id) => {
    const deletedItem = cartItems.filter((item) => item.id !== id);
    setCartItems(deletedItem);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        productQuantity,
        Increment,
        Decrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProductsContext;
