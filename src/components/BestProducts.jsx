import HeaderSection from "./reusable/HeaderSection";
import SingleProduct from "./SingleProduct";

const BestProducts = ({ products }) => {
  return (
    <div className="grid gap-sections">
      <HeaderSection
        subtitle="this month"
        title="best selling products"
        isButton
        buttonText="view all"
      />
      <div className="grid grid-cols-4 gap-products p-inline">
        {products.slice(5, 9).map((item, index) => (
          <SingleProduct product={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
