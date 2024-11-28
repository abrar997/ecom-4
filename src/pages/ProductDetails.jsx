import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/context";
import { Link, useParams } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PathPages from "../components/reusable/PathPages";
import Button from "../components/reusable/Button";
import { IoHeartOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

const ProductDetails = () => {
  const { singleProduct, fetchSingleProduct } = useContext(ProductsContext);
  const { productId } = useParams();
  useEffect(() => {
    fetchSingleProduct(productId);
  }, [productId]);
  console.log(singleProduct);
  if (!productId) return <p>loading ...</p>;
  return (
    <div>
      <TopHeader />
      <Header />

      <div className="p-inline mt-20 grid gap-20 mb-[140px]">
        <PathPages
          links={[
            { link: "Account", to: "/account" },
            { link: singleProduct.category, to: "/" },
            { link: singleProduct.title, to: "/" },
          ]}
          lastIndex={2}
        />
        <div className="grid grid-cols-3 gap-[71px]">
          <div className="flex gap-[30px] col-span-2">
            <div className="grid gap-4">
              {singleProduct.productsImages &&
                singleProduct.productsImages.map((image, index) => (
                  <button
                    className="bg-secondary2 w-[170px] h-[138px] flex items-center justify-center"
                    key={index}
                  >
                    <img src={image.image} alt={`image-${index + 1}`} />
                  </button>
                ))}
            </div>
            <div className="bg-secondary2 flex items-center justify-center w-full">
              <img src={singleProduct.image} />
            </div>
          </div>
          <div className="flex flex-col gap-6 col-span-1">
            <div className="grid gap-4">
              <h1 className="text-2xl font-semibold tracking-[3%]">
                {singleProduct.title}
              </h1>
              <div className="flex gap-4 font-secondary text-sm">
                <div className="flex gap-2">
                  <div>views</div>
                  <span className="opacity-50">
                    ({singleProduct.views} Reviews)
                  </span>
                </div>
                <span>|</span>
                <span className="text-lightGreen capitalize">in stock</span>
              </div>
              <p className="text-2xl">{singleProduct.price}</p>
            </div>
            <p className="text-sm font-secondary">
              {singleProduct.description}
            </p>
            <div className="bg-black h-[1px] w-full" />
            <div className="flex gap-6 items-center">
              <h1 className="text-xl">Colours:</h1>
              <div className="flex gap-2">
                <button className="w-5 h-5 rounded-full border-black border flex items-center justify-center">
                  <div className="bg-[#A0BCE0] w-3 h-3 rounded-full" />
                </button>
                <button className="w-5 h-5 rounded-full border-black border flex items-center justify-center">
                  <div className="bg-[#E07575] w-3 h-3 rounded-full" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <h1 className="text-xl">Size:</h1>
              <div className="flex gap-4">
                <button className="w-8 h-8 rounded border border-black border-opacity-50 text-sm font-medium font-secondary">
                  XS
                </button>
                <button className="w-8 h-8 rounded border border-black border-opacity-50 text-sm font-medium font-secondary">
                  S
                </button>
                <button className="w-8 h-8 rounded border border-black border-opacity-50 text-sm font-medium font-secondary">
                  M
                </button>
                <button className="w-8 h-8 rounded border border-black border-opacity-50 text-sm font-medium font-secondary">
                  L
                </button>
                <button className="w-8 h-8 rounded border border-black border-opacity-50 text-sm font-medium font-secondary">
                  XL
                </button>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center justify-center border border-black border-r-0 rounded border-opacity-50">
                <button className="w-10 h-11  border border-r border-l-0 border-t-0 border-b-0 border-black border-opacity-50">
                  -
                </button>
                <span className="px-4">2</span>
                <button className="bg-secondary text-white w-10 h-11 rounded rounded-l-none">
                  +
                </button>
              </div>
              <Link
                to=""
                className="m-auto bg-secondary capitalize text-white rounded lg:py-[10px] py-3 text-md lg:px-12 px-6 hover:bg-hoverBtn transition-all duration-300"
              >
                buy now
              </Link>
              <button className="w-10 h-10 rounded flex items-center justify-center border border-black text-2xl border-opacity-50">
                <IoHeartOutline />
              </button>
            </div>

            <div className="grid">
              <div className="px-4 py-6 flex gap-4">
                <TbTruckDelivery />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
