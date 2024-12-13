import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProductsContext = ({ children }) => {
  const initialData = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const [cartItems, setCartItems] = useState(initialData);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.price).toFixed(2) * (item.quantity || 1),
    0
  );
  const shipping = 0;
  const totalPrice = subtotal + shipping;

  const addToCart = (product) => {
    const exitingItem = cartItems.find((item) => item.id === product.id);

    if (exitingItem) {
      Increment(product.id);
    } else {
      const selectedItem = {
        id: product.id,
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
        quantity: product.quantity,
      };

      setCartItems([...cartItems, selectedItem]);
    }
  };

  const Increment = (id) => {
    const updatedQuantity = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedQuantity);
  };

  const Decrement = (id) => {
    const updatedQuantity = cartItems
      .map((item) => {
        if (item.id === id) {
          return item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : null;
        }
        return item;
      })
      .filter((item) => item !== null);
    setCartItems(updatedQuantity);
  };

  const DeleteAllItems = () => {
    return setCartItems([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        Increment,
        Decrement,
        DeleteAllItems,
        subtotal,
        totalPrice,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProductsContext;
