import { useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { FaArrowUp } from "react-icons/fa";
import FirstSection from "../components/Home/FirstSection";
import FlashProducts from "../components/Home/FlashProducts";
import Categories from "../components/Home/Categories";
import BestProducts from "../components/Home/BestProducts";
import Enhancing from "../components/Home/Enhancing";
import OurProducts from "../components/Home/OurProducts";
import Featured from "../components/Home/Featured";
import Services from "../components/reusable/Services";
import TopHeader from "../components/reusable/TopHeader";
import Header from "../components/reusable/Header";
import Footer from "../components/reusable/Footer";
import { Link, Element } from "react-scroll";

const Home = () => {
  const { user, userGoogleData } = useContext(AuthContext);

  const handleScroll = () => {
    if (window.scrollY >= 450) {
      document.getElementById("arrow").classList.add("right-[89px]");
      document.getElementById("arrow").classList.remove("-right-16");
    } else {
      document.getElementById("arrow").classList.add("-right-16");
      document.getElementById("arrow").classList.remove("right-[89px]");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <TopHeader />
      <Element name="section1">
        {user || userGoogleData ? <Header isRed /> : <Header />}
      </Element>
      <div className="relative">
        <FirstSection />
        <FlashProducts />
        <Categories />
        <BestProducts />
        <Enhancing />
        <OurProducts />
        <Featured />
        <Services isHome />
        <Link
          to="section1"
          smooth={true}
          duration={500}
          id="arrow"
          className="fixed w-[46px] h-[46px] z-50 cursor-pointer bottom-16 flex items-center justify-center rounded-full bg-secondary2 transition-all duration-500"
        >
          <FaArrowUp />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
