import { BsHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { IoEyeOutline, IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SingleProduct = ({ product, addToCart, addToWishlist, isLike }) => {
  return (
    <div className="grid gap-4 w-full">
      <div className="lg:h-64 h-52 p-6 lg:p-0 group overflow-hidden bg-secondary2 relative rounded flex items-center justify-center">
        <img src={product.image} alt="" />
        <div>
          {product.discount && (
            <span className="absolute left-3 top-3 bg-secondary text-white rounded lg:px-3 px-2 py-1 text-xs">
              {product.discount}%
            </span>
          )}
          {product.isNew && (
            <span className="absolute left-3 top-3 bg-lightGreen text-white rounded px-3 py-1 uppercase text-xs">
              New
            </span>
          )}
        </div>
        <div className="grid absolute right-3 top-3 lg:gap-2 gap-0.5">
          <button
            onClick={() => addToWishlist(product)}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
          >
            {isLike ? (
              <BsHeartFill className="text-secondary" />
            ) : (
              <IoHeartOutline />
            )}
          </button>
          <Link
            to={`/product/${product.id}/`}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
          >
            <IoEyeOutline />
          </Link>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="bg-black absolute -bottom-7 opacity-0 transition-all duration-300 inset-x-0 py-2 capitalize text-white text-center group-hover:bottom-0 group-hover:opacity-100 rounded-b"
        >
          add to cart
        </button>
      </div>
      <div className="flex flex-col gap-2 lg:text-md text-sm font-medium">
        <h2>{product.title}</h2>
        <span className="flex gap-3">
          <p className="text-secondary">${product.price}</p>
          {product.oldPrice && (
            <p className="opacity-50 line-through decoration-black decoration-slice">
              ${product.oldPrice}
            </p>
          )}
        </span>
        <div className="flex gap-2">
          <div className="flex gap-0.5">
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
            <FaStar className="text-[#FFAD33]" />
          </div>
          <p className="opacity-50 font-semibold text-sm">({product.views})</p>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
