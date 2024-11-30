import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/context";
import { useParams } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PathPages from "../components/reusable/PathPages";
import ProductImages from "../components/Details/ProductImages";
import ProductContent from "../components/Details/ProductContent";
import RelatedItems from "../components/Details/RelatedItems";

const ProductDetails = () => {
  const { products, singleProduct, fetchSingleProduct } =
    useContext(ProductsContext);
  const { productId } = useParams();

  useEffect(() => {
    fetchSingleProduct(productId);
  }, [productId, singleProduct]);

  if (!productId) return <p>loading ...</p>;

  return (
    <div>
      <TopHeader />
      <Header />
      <div className="lg:p-inline p-4 lg:mt-20 mt-8 grid lg:gap-[140px] gap-8 lg:mb-[140px] mb-12">
        <div className="grid lg:gap-20 gap-8">
          <PathPages
            links={[
              { link: "Account", to: "/account" },
              { link: singleProduct.category, to: "/" },
              { link: singleProduct.title, to: "/" },
            ]}
            lastIndex={2}
          />
          <div className="grid lg:grid-cols-3 lg:gap-[71px] gap-6">
            <ProductImages singleProduct={singleProduct} />
            <ProductContent singleProduct={singleProduct} />
          </div>
        </div>
        <div>
          <RelatedItems products={products} singleProduct={singleProduct} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
