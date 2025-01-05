import { createContext, useEffect, useState } from "react";
export const ProductsContext = createContext();

export default function ContextProvider({ children }) {
  const AllProducts = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];

  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const [searchProduct, setSearchProduct] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchAllProducts = async () => {
    const res = await fetch("data.json");
    const dataApi = await res.json();
    setProducts(dataApi);
    localStorage.setItem("products", JSON.stringify(dataApi));
  };

  const fetchSingleProduct = async (id) => {
    const product = products.find((item) => item.id.toString() === id);
    if (product) {
      setSingleProduct(product);
    } else {
      console.log("product not found");
    }
  };

  const handleSearchProducts = async () => {
    if (!searchProduct.trim()) {
      setFilteredProducts(products);
      return;
    }
    const filterProducts = products.filter((item) =>
      item.title.toLowerCase().includes(searchProduct.toLowerCase())
    );
    setFilteredProducts(filterProducts);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    handleSearchProducts();
  }, [searchProduct]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        singleProduct,
        fetchSingleProduct,
        handleSearchProducts,
        searchProduct,
        setSearchProduct,
        setFilteredProducts,
        filteredProducts,
        AllProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
