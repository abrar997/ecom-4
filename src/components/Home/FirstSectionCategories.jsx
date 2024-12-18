import { Link } from "react-router-dom";
import { FirstSectionCategoriesData } from "../../assets/mockData";
import Dropdown from "../reusable/Dropdown";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IoArrowDown } from "react-icons/io5";
import { useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const FirstSectionCategories = () => {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  return (
    <div
      className={`lg:w-full relative transition-all duration-300 ease-in-out ${
        isOpenMobile ? "w-full" : "w-14"
      }`}
    >
      <button
        className="lg:hidden p-4 pb-0 text-2xl"
        onClick={() => setIsOpenMobile(!isOpenMobile)}
      >
        {isOpenMobile ? (
          <CgClose className="absolute right-2 text-lg top-2" />
        ) : (
          <BiSolidCategory />
        )}
      </button>
      {isOpenMobile ? (
        <div className="px-4 py-2 transition-all duration-300 whitespace-nowrap relative lg:hidden">
          <div className="grid gap-4">
            {FirstSectionCategoriesData.map((category, index) => (
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
                                to: `/category/${category.category}/${category.children[0].category}`,
                              },
                              {
                                id: 2,
                                title: "Tops & Tees",
                                to: `/category/${category.category}/${category.children[1].category}`,
                              },
                              {
                                id: 3,
                                title: "Jeans",
                                to: `/category/${category.category}/${category.children[2].category}`,
                              },
                              {
                                id: 4,
                                title: "Shoes",
                                to: `/category/${category.category}/${category.children[3].category}`,
                              },
                            ]
                          : [
                              {
                                id: 1,
                                title: "Shirts",
                                to: `/category/${category.category}/${category.children[0].category}`,
                              },
                              {
                                id: 2,
                                title: "Trousers",
                                to: `/category/${category.category}/${category.children[1].category}`,
                              },
                              {
                                id: 3,
                                title: "Suits",
                                to: `/category/${category.category}/${category.children[2].category}`,
                              },
                              {
                                id: 4,
                                title: "Shoes",
                                to: `/category/${category.category}/${category.children[3].category}`,
                              },
                            ]
                      }
                      ClassBtn={
                        "text-black flex justify-between items-center capitalize"
                      }
                      button={
                        <div className="text-sm flex justify-between items-center w-full">
                          <span>{category.title}</span>
                          <span className="ml-auto">{category.icon}</span>
                        </div>
                      }
                      anchor="left start"
                      className="bg-white shadow capitalize mt-3 origin-top-left rounded absolute z-[40] right-0 top-0 py-2 pl-5 pr-4 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 grid gap-2 items-start"
                      itemClassName="hover:text-secondary capitalize"
                    />
                  </div>
                ) : (
                  <Link
                    to={`/category/${category.category}`}
                    className="flex justify-between text-sm items-center capitalize"
                  >
                    {category.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <div className="border-r col-span-4 p-4 lg:grid lg:p-0 order-2 relative hidden">
        <div className="lg:pt-10 grid lg:gap-y-4 gap-2 lg:text-base">
          {FirstSectionCategoriesData.map((category, index) => (
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
                              to: `/category/${category.category}/${category.children[0].category}`,
                            },
                            {
                              id: 2,
                              title: "Tops & Tees",
                              to: `/category/${category.category}/${category.children[1].category}`,
                            },
                            {
                              id: 3,
                              title: "Jeans",
                              to: `/category/${category.category}/${category.children[2].category}`,
                            },
                            {
                              id: 4,
                              title: "Shoes",
                              to: `/category/${category.category}/${category.children[3].category}`,
                            },
                          ]
                        : [
                            {
                              id: 1,
                              title: "Shirts",
                              to: `/category/${category.category}/${category.children[0].category}`,
                            },
                            {
                              id: 2,
                              title: "Trousers",
                              to: `/category/${category.category}/${category.children[1].category}`,
                            },
                            {
                              id: 3,
                              title: "Suits",
                              to: `/category/${category.category}/${category.children[2].category}`,
                            },
                            {
                              id: 4,
                              title: "Shoes",
                              to: `/category/${category.category}/${category.children[3].category}`,
                            },
                          ]
                    }
                    ClassBtn={
                      "text-black flex justify-between pr-4 w-full items-center capitalize"
                    }
                    button={
                      <div className="flex justify-between items-center w-full">
                        <span>{category.title}</span>
                        <span className="ml-auto">{category.icon}</span>
                      </div>
                    }
                    anchor="left start"
                    className="bg-white shadow capitalize mt-3 origin-top-left rounded absolute z-[40] right-0 -ml-4 top-0 lg:px-6 lg:w-60 py-4 w-fit pl-5 pr-4 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 grid gap-2 items-start"
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
    </div>
  );
};

export default FirstSectionCategories;
