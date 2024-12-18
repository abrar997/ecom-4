import { useContext } from "react";
import { ProductsContext } from "../context/context";
import SingleProduct from "../components/reusable/SingleProduct";
import TopHeader from "../components/reusable/TopHeader";
import Header from "../components/reusable/Header";
import Footer from "../components/reusable/Footer";
import { Link, useParams } from "react-router-dom";

const ProductCategory = () => {
  const { category, categoryChild } = useParams();
  const { products } = useContext(ProductsContext);

  const filteredProducts = products.filter((product) => {
    if (categoryChild) {
      return (
        product.category === category && product.categoryChild === categoryChild
      );
    }
    return product.category === category;
  });

  return (
    <div>
      <TopHeader />
      <Header />
      <div className="lg:p-inline lg:mt-20 mt-6 p-4 grid lg:gap-12 gap-6 lg:mb-[140px] mb-12">
        <div className="flex flex-wrap lg:flex-nowrap items-center lg:gap-3 gap-2 text-[14px] font-secondary">
          <Link
            to={`/category/${category}`}
            className="flex items-center gap-3 text-[14px] font-secondary capitalize"
          >
            {category === "womenClothing" ? (
              <span>Women clothes</span>
            ) : category === "menClothing" ? (
              <span>Men clothes</span>
            ) : (
              category
            )}
          </Link>
          {categoryChild && <span>/</span>}
          <Link
            to={`/category/${category}/${categoryChild}`}
            className="capitalize opacity-50"
          >
            <span>{categoryChild ? categoryChild : null}</span>
          </Link>
        </div>
        {filteredProducts && filteredProducts.length > 0 ? (
          <div className="grid lg:grid-cols-4 lg:gap-8 lg:gap-y-20">
            {filteredProducts.map((item, index) => (
              <SingleProduct product={item} key={index} />
            ))}
          </div>
        ) : (
          <p className="lg:text-lg text-gray-500 text-center mt-3 lg:mt-0">
            No products found
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductCategory;
