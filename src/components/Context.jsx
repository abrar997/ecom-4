import { useEffect, useState } from "react";

export const ContextProvider = ({ children }) => {
  const [products, setProducsts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const respon = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducsts(data);
    };
    fetchProducts();
  }, []);
};
