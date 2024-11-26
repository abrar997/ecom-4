import WishListProduct from "./WishListProduct";

const WishlistAllProducts = ({ products }) => {
  return (
    <div className="grid lg:gap-[60px] gap-8">
      <div className="flex justify-between items-center">
        <h1 className="font-secondary text-xl font-normal">Wishlist (4)</h1>
        <button className="border border-black rounded capitalize lg:py-4 py-2 lg:px-12 px-6 text-md font-secondary">
          Move all to bag
        </button>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-[30px] gap-5">
        {products.slice(0, 4).map((product, index) => (
          <WishListProduct key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WishlistAllProducts;
