import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FirstSectionCategories } from "../../assets/mockData";
import Pagination from "../reusable/Pagination";
import { BsSoundwave } from "react-icons/bs";
import Dropdown from "../reusable/Dropdown";

const FirstSection = () => {
  return (
    <div
      className="grid lg:p-inline p-0 lg:grid-cols-4 lg:gap-x-11"
      id="firstSection"
    >
      <div className="border-r col-span-1 p-4 lg:p-0 order-2 relative">
        <div className="lg:pt-10 grid lg:gap-y-4 gap-2 text-base">
          {FirstSectionCategories.map((category, index) => (
            <div key={index}>
              {category.category === "womenClothing" ||
              category.category === "menClothing" ? (
                <div className="flex justify-between relative">
                  <Dropdown
                    data={
                      category.category === "womenClothing"
                        ? [
                            {
                              id: 1,
                              title: "Dresses",
                              to: `/category/${category.category}`,
                            },
                            {
                              id: 2,
                              title: "Tops & Tees",
                              to: `/category/${category.category}`,
                            },
                            {
                              id: 3,
                              title: "Jeans",
                              to: `/category/${category.category}`,
                            },
                            {
                              id: 4,
                              title: "Shoes",
                              to: `/category/${category.category}`,
                            },
                          ]
                        : [
                            {
                              id: 1,
                              title: "Shirts",
                              to: `/category/${category.category}`,
                            },
                            {
                              id: 2,
                              title: "Trousers",
                              to: `/category/${category.category}`,
                            },
                            {
                              id: 3,
                              title: "Suits",
                              to: `/category/${category.category}`,
                            },
                            {
                              id: 4,
                              title: "Shoes",
                              to: `/category/${category.category}`,
                            },
                          ]
                    }
                    ClassBtn={
                      "text-black flex justify-between pr-4 items-center capitalize"
                    }
                    button={
                      <div className="flex justify-between items-center w-full">
                        <span>{category.title}</span>
                        <span>{category.icon}</span>
                      </div>
                    }
                    anchor="left start"
                    className="bg-white shadow capitalize mt-1 origin-top-left rounded absolute z-[40] right-0 top-0 lg:px-4 lg:w-56 py-3 w-fit pl-5 pr-4 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 grid gap-2 items-start"
                    itemClassName="hover:text-secondary capitalize"
                  />
                </div>
              ) : (
                <Link
                  to={`/category/${category.category}`}
                  className="flex justify-between pr-4 items-center capitalize"
                >
                  {category.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-3 text-white lg:order-2 flex lg:pt-10 pt-0 lg:gap-12">
        <div className="relative bg-black lg:py-10 lg:px-11 py-6 px-4 lg:flex w-full">
          <div className="grid lg:gap-5 gap-3">
            <div className="flex items-center gap-2">
              <BsSoundwave className="text-3xl" />
              <span className="text-base capitalize font-secondary">
                Headphone 14 series
              </span>
            </div>
            <h1 className="font-semibold lg:text-5xl text-3xl flex lg:flex-col gap-2">
              <span>Up to 10%</span>
              <span>off Voucher</span>
            </h1>
            <button className="flex items-center gap-2">
              <span className="border-b capitalize">shop now</span>
              <IoArrowForward className="text-lg" />
            </button>
          </div>
          <img
            src="https://www.freeiconspng.com/thumbs/headphones-png/headphones-png-0.png"
            alt=""
            className="brightness-75 lg:w-[33%] m-auto w-[50%] lg:my-0 p-4 lg:py-0"
          />
          <Pagination isHome />
        </div>
      </div>
    </div>
  );
};
export default FirstSection;
