import HeaderSection from "../reusable/HeaderSection";
import SingleProduct from "../reusable/SingleProduct";

const RelatedItems = ({ products, singleProduct }) => {
  const data = products.filter(
    (product) => product.category === singleProduct.category
  );

  return (
    <div className="grid lg:gap-[60px] gap-6">
      <HeaderSection title="" subtitle="Related Item" isDetail />
      <div className="grid lg:grid-cols-4 lg:gap-[30px] gap-5">
        {data.map((item, index) => (
          <SingleProduct product={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RelatedItems;
