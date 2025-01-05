import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/context";
import SingleProduct from "../components/reusable/SingleProduct";
import Header from "../components/reusable/Header";
import TopHeader from "../components/reusable/TopHeader";
import Footer from "../components/reusable/Footer";
import FilteredProducts from "../components/reusable/FilteredProducts";

const AllProducts = () => {
  const { searchProduct, products, filteredProducts } =
    useContext(ProductsContext);

  return (
    <div>
      <TopHeader />
      <Header />
      {searchProduct?.trim().length > 0 && filteredProducts?.length > 0 ? (
        <FilteredProducts />
      ) : (
        <div className="lg:p-inline lg:mt-20 mb-[140px] p-4 grid lg:gap-12 gap-4">
          <h1 className="capitalize lg:text-3xl text-2xl font-secondary font-semibold">
            All Products
          </h1>
          <div className="grid lg:grid-cols-4 gap-[30px] grid-cols-2">
            {products.map((item, index) => (
              <SingleProduct product={item} key={index} />
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default AllProducts;
