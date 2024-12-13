import { BsTrash } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { WishListContextProvider } from "../../context/wishlistContext";
import { CartContext } from "../../context/cartContext";

const WishListProduct = ({ product }) => {
  const { deleteItem } = useContext(WishListContextProvider);
  const { addToCart } = useContext(CartContext);

  if (!product) return null;
  return (
    <div className="grid gap-4 w-full">
      <div className="h-64 bg-secondary2 relative rounded flex items-center justify-center">
        <img src={product.image} alt="" className="p-6" />
        <div>
          {product.discount && (
            <span className="absolute left-3 top-3 bg-secondary text-white rounded px-3 py-1 text-xs">
              {product.discount}%
            </span>
          )}
          {product.isNew && (
            <span className="absolute left-3 top-3 bg-lightGreen text-white rounded px-3 py-1 uppercase text-xs">
              New
            </span>
          )}
        </div>
        <div className="grid absolute right-3 top-3 gap-2">
          <button
            onClick={() => deleteItem(product.id)}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
          >
            <BsTrash />
          </button>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="bg-black absolute inset-x-0 text-xs py-3 capitalize text-white text-center bottom-0 rounded-b flex items-center justify-center gap-2"
        >
          <IoCartOutline size={24} />
          add to cart
        </button>
      </div>
      <div className="flex flex-col gap-2 text-md font-medium">
        <h2>{product.title}</h2>
        <span className="flex gap-3">
          <p className="text-secondary">${product.price}</p>
          {product.oldPrice && (
            <p className="opacity-50 line-through decoration-black decoration-slice">
              ${product.oldPrice}
            </p>
          )}
        </span>
        <div>
          <p className="opacity-50 font-semibold text-sm">({product.views})</p>
        </div>
      </div>
    </div>
  );
};
export default WishListProduct;
