import { useContext } from "react";
import { ProductsContext } from "../../context/context";
import SingleProduct from "./SingleProduct";

const FilteredProducts = () => {
  const { filteredProducts, searchProduct } = useContext(ProductsContext);

  return (
    <div className="lg:p-inline lg:py-12 p-4 pb-12">
      {filteredProducts?.length > 0 ? (
        <div className="grid gap-10">
          <h1>{searchProduct}</h1>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 lg:gap-10">
            {filteredProducts.map((item, index) => (
              <SingleProduct key={index} product={item} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FilteredProducts;
