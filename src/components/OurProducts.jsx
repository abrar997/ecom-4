import Button from "./reusable/Button";
import HeaderSection from "./reusable/HeaderSection";
import SingleProduct from "./SingleProduct";

const OurProducts = ({ products }) => {
  return (
    <div className="grid lg:gap-sections gap-6 lg:mt-[71px] mt-12">
      <HeaderSection subtitle="our products" title="explore our products" />
      <div className="grid lg:grid-cols-4 gap-products lg:p-inline p-4">
        {products.slice(9, 17).map((item, index) => (
          <SingleProduct product={item} key={index} />
        ))}
      </div>
      <div className="m-auto">
        <Button text="view all products" />
      </div>
    </div>
  );
};
export default OurProducts;
