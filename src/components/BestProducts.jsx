import HeaderSection from "./reusable/HeaderSection";
import SingleProduct from "./SingleProduct";

const BestProducts = ({ products }) => {
  return (
    <div className="grid lg:gap-sections gap-4">
      <HeaderSection
        subtitle="this month"
        title="best selling products"
        isButton
        buttonText="view all"
      />
      <div className="grid lg:grid-cols-4 lg:gap-products gap-5 lg:p-inline px-4">
        {products.slice(5, 9).map((item, index) => (
          <SingleProduct product={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
