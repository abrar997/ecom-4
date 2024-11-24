import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export default function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const fetchAllProducts = async () => {
    const res = await fetch("data.json");
    const data = await res.json();
    setProducts(data);
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}
