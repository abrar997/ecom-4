import ForYouProducts from "../components/Wishlist/ForYouProducts";
import WishlistAllProducts from "../components/Wishlist/WishlistAllProducts";
import TopHeader from "../components/reusable/TopHeader";
import Header from "../components/reusable/Header";
import Footer from "../components/reusable/Footer";
import { useContext } from "react";
import { ProductsContext } from "../context/context";
import FilteredProducts from "../components/reusable/FilteredProducts";

const WishList = () => {
  const { filteredProducts, searchProduct } = useContext(ProductsContext);

  return (
    <div>
      <TopHeader />
      <Header />
      {searchProduct?.trim().length > 0 && filteredProducts?.length > 0 ? (
        <FilteredProducts />
      ) : (
        <div className="lg:p-inline p-4 lg:mt-[80px] mt-8 lg:mb-[140px] mb-12 grid lg:gap-[80px] gap-12">
          <WishlistAllProducts />
          <ForYouProducts />
        </div>
      )}
      <Footer />
    </div>
  );
};
export default WishList;
