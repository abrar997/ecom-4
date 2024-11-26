import { useContext } from "react";
import { ProductsContext } from "../context/context";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import ForYouProducts from "../components/Wishlist/ForYouProducts";
import WishlistAllProducts from "../components/Wishlist/WishlistAllProducts";

const WishList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <TopHeader />
      <Header />
      <div className="lg:p-inline p-4 lg:mt-[80px] mt-8 lg:mb-[140px] mb-12 grid lg:gap-[80px] gap-12">
        <WishlistAllProducts products={products} />
        <ForYouProducts products={products} />
      </div>
      <Footer />
    </div>
  );
};
export default WishList;
