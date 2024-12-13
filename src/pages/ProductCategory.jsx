import { useContext } from "react";
import { ProductsContext } from "../context/context";
import SingleProduct from "../components/reusable/SingleProduct";
import TopHeader from "../components/reusable/TopHeader";
import Header from "../components/reusable/Header";
import Footer from "../components/reusable/Footer";
import { useParams } from "react-router-dom";

const ProductCategory = () => {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div>
      <TopHeader />
      <Header />
      <div className="lg:p-inline lg:mt-20 mt-8 p-4 grid lg:gap-12 gap-4 lg:mb-[140px] mb-12">
        <h1 className="text-2xl font-secondary font-semibold capitalize">
          {category}
        </h1>
        <div className="grid lg:grid-cols-4 lg:gap-8 lg:gap-y-20">
          {filteredProducts.map((item, index) => (
            <SingleProduct product={item} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCategory;
