import { createContext, useState } from "react";

const CartContext = createContext();

const CartProductsContext = ({ children }) => {
  const [products, setProducts] = useState([]);

  return <CartContext.Provider>{children}</CartContext.Provider>;
};
