import { useContext } from "react";
import ForYouProducts from "../components/Wishlist/ForYouProducts";
import WishlistAllProducts from "../components/Wishlist/WishlistAllProducts";
import TopHeader from "../components/reusable/TopHeader";
import Header from "../components/reusable/Header";
import Footer from "../components/reusable/Footer";
import { WishListContextProvider } from "../context/wishlistContext";

const WishList = () => {
  const { wishListProducts, deleteItem } = useContext(WishListContextProvider);

  return (
    <div>
      <TopHeader />
      <Header />
      <div className="lg:p-inline p-4 lg:mt-[80px] mt-8 lg:mb-[140px] mb-12 grid lg:gap-[80px] gap-12">
        <WishlistAllProducts products={wishListProducts} />
        <ForYouProducts products={wishListProducts} />
      </div>
      <Footer />
    </div>
  );
};
export default WishList;
