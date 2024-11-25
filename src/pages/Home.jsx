import { useContext } from "react";
import { ProductsContext } from "../context/context";
import { FaArrowUp } from "react-icons/fa";
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

  return (
    <div className="">
      <div className="relative">
        <FirstSection />
        <FlashProducts products={products} />
        <Categories />
        <BestProducts products={products} />
        <Enhancing />
        <OurProducts products={products} />
        <Featured />
        <Services />
        <a
          href="#firstSection"
          className="absolute w-[46px] h-[46px] right-[89px] -bottom-28 flex items-center justify-center rounded-full bg-[#F5F5F5] transition-all duration-300"
        >
          <FaArrowUp />
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
