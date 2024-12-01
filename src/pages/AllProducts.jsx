import { useContext } from "react";
import { ProductsContext } from "../context/context";
import SingleProduct from "../components/reusable/SingleProduct";
import Header from "../components/reusable/Header";
import TopHeader from "../components/reusable/TopHeader";
import Footer from "../components/reusable/Footer";

const AllProducts = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="lg:p-inline lg:mt-20 mb-[140px] p-4 grid lg:gap-12 gap-4">
        <h1 className="capitalize lg:text-4xl text-3xl font-semibold lg:font-medium">
          All Products
        </h1>
        <div className="grid lg:grid-cols-4 gap-[30px] grid-cols-2">
          {products.map((item, index) => (
            <SingleProduct product={item} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
