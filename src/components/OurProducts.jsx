import Button from "./reusable/Button";
import HeaderSection from "./reusable/HeaderSection";
import SingleProduct from "./SingleProduct";

const OurProducts = ({ products }) => {
  return (
    <div className="grid gap-sections mt-[71px]">
      <HeaderSection subtitle="our products" title="explore our products" />
      <div className="grid grid-cols-4 gap-products p-inline">
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
