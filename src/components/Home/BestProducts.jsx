import { useContext } from "react";
import { ProductsContext } from "../../context/context";
import HeaderSection from "../reusable/HeaderSection";
import SingleProduct from "../reusable/SingleProduct";

const BestProducts = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="grid lg:gap-sections gap-4">
      <HeaderSection
        subtitle="this month"
        title="best selling products"
        isButton
        buttonText="view all"
        isButtonTo="/products"
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-products gap-5 lg:p-inline px-4">
        {products.slice(5, 9).map((item, index) => (
          <SingleProduct product={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
