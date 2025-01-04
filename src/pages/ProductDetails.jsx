import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/context";
import { useParams } from "react-router-dom";
import PathPages from "../components/reusable/PathPages";
import ProductImages from "../components/Details/ProductImages";
import ProductContent from "../components/Details/ProductContent";
import RelatedItems from "../components/Details/RelatedItems";
import TopHeader from "../components/reusable/TopHeader";
import Header from "../components/reusable/Header";
import Footer from "../components/reusable/Footer";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products, fetchSingleProduct } = useContext(ProductsContext);
  const item = products.find((product) => product.id.toString() === productId);

  useEffect(() => {
    fetchSingleProduct(productId);
  }, [productId, fetchSingleProduct]);

  if (!item) return <p>loading ...</p>;

  return (
    <div>
      <TopHeader />
      <Header />
      <div className="lg:p-inline p-4 lg:mt-20 mt-8 grid lg:gap-[140px] gap-8 lg:mb-[140px] mb-12">
        <div className="grid lg:gap-20 gap-8">
          <PathPages
            links={[
              { link: "Account", to: "/account" },
              {
                link: item.category,
                to: `/category/${item.category}`,
              },
              { link: item.title, to: "/" },
            ]}
            lastIndex={2}
          />
          <div className="grid lg:grid-cols-3 lg:gap-[71px] gap-6">
            <ProductImages singleProduct={item} />
            <ProductContent singleProduct={item} />
          </div>
        </div>
        <div>
          <RelatedItems products={products} singleProduct={item} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
