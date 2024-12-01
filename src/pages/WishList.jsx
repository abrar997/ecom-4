import { useContext } from "react";
import { ProductsContext } from "../context/context";
import ForYouProducts from "../components/Wishlist/ForYouProducts";
import WishlistAllProducts from "../components/Wishlist/WishlistAllProducts";
import TopHeader from "../components/reusable/TopHeader";
import Header from "../components/reusable/Header";
import Footer from "../components/reusable/Footer";

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
