import HeaderSection from "../reusable/HeaderSection";
import SingleProduct from "../reusable/SingleProduct";

const BestProducts = ({ products, addToCart }) => {
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
          <SingleProduct product={item} key={index} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
