import { useContext } from "react";
import { ProductsContext } from "../context/context";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import SingleProduct from "../components/reusable/SingleProduct";
import Footer from "../components/Footer";

const AllProducts = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="lg:p-inline lg:mt-20 mb-[140px] p-4 grid gap-12">
        <h1 className="capitalize text-4xl font-medium">All Products</h1>
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
