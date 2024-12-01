import { useContext } from "react";
import { ProductsContext } from "../context/context";
import { FaArrowUp } from "react-icons/fa";
import FirstSection from "../components/Home/FirstSection";
import FlashProducts from "../components/Home/FlashProducts";
import Categories from "../components/Home/Categories";
import BestProducts from "../components/Home/BestProducts";
import Enhancing from "../components/Home/Enhancing";
import OurProducts from "../components/Home/OurProducts";
import Featured from "../components/Home/Featured";
import Services from "../components/reusable/Services";
import { AuthContext } from "../context/authContext";
import TopHeader from "../components/reusable/TopHeader";
import Header from "../components/reusable/Header";
import Footer from "../components/reusable/Footer";

const Home = () => {
  const { products } = useContext(ProductsContext);
  const { user } = useContext(AuthContext);

  return (
    <div>
      <TopHeader />
      {user ? <Header isRed /> : <Header />}
      <div className="relative">
        <FirstSection />
        <FlashProducts products={products} />
        <Categories />
        <BestProducts products={products} />
        <Enhancing />
        <OurProducts products={products} />
        <Featured />
        <Services isHome />
        <a
          href="#firstSection"
          className="absolute w-[46px] h-[46px] lg:right-[89px] right-6 -bottom-28 flex items-center justify-center rounded-full bg-secondary2 transition-all duration-300"
        >
          <FaArrowUp />
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
