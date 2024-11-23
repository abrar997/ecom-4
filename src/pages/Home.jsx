import FirstSection from "../components/FirstSection";
import FlashProducts from "../components/FlashProducts";
import Categories from "../components/Categories";
import BestProducts from "../components/BestProducts";
import { useEffect, useState } from "react";
import Enhancing from "../components/Enhancing";

const Home = () => {
  const [products, setProducts] = useState([]);

  async function fetchAllProducts() {
    const data = await fetch("data.json");
    const res = await data.json();
    setProducts(res);
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <div className="p-inline">
        <FirstSection />
      </div>
      <FlashProducts products={products} />
      <Categories />
      <BestProducts products={products} />
      <Enhancing />
    </div>
  );
};

export default Home;
