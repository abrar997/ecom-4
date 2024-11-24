import { useContext } from "react";
import { ProductsContext } from "../context/context";
import FirstSection from "../components/FirstSection";
import FlashProducts from "../components/FlashProducts";
import Categories from "../components/Categories";
import BestProducts from "../components/BestProducts";
import Enhancing from "../components/Enhancing";
import OurProducts from "../components/OurProducts";
import Featured from "../components/Featured";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);

  return (
    <div>
      <div className="p-inline">
        <FirstSection />
      </div>
      <FlashProducts products={products} />
      <Categories />
      <BestProducts products={products} />
      <Enhancing />
      <OurProducts products={products} />
      <Featured />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
