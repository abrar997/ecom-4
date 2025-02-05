import { Link } from "react-router-dom";
import SingleProduct from "../reusable/SingleProduct";
import { ProductsContext } from "../../context/context";
import { useContext } from "react";

const ForYouProducts = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="grid lg:gap-[60px] gap-8">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-secondary text-xl font-normal flex items-center lg:gap-4 gap-2 capitalize">
            <span className="bg-secondary w-5 h-10 rounded" />
            Just for you
          </h1>
          <Link
            to="/products"
            className="border border-black rounded capitalize lg:py-4 py-2 lg:px-12 px-6 text-md font-secondary"
          >
            see all
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-[30px] gap-5">
        {products.length > 0 &&
          products
            .slice(0, 4)
            .map((product, index) => (
              <SingleProduct key={index} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ForYouProducts;
