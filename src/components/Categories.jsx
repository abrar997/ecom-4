import { CategoriesData } from "../assets/mockData";
import HeaderSection from "./reusable/HeaderSection";
import Hr from "./reusable/Hr";

const Categories = () => {
  return (
    <div className="py-20 grid gap-sections">
      <HeaderSection subtitle="categories" title="browse by category" />
      <div className="grid grid-cols-6 gap-8 p-inline">
        {CategoriesData.map((category, index) => (
          <div
            key={index}
            className="border border-black hover:border-slate-50 border-opacity-30 rounded py-6 grid items-center justify-center gap-4 hover:bg-secondary transition-all duration-300 group"
          >
            <div className="text-5xl m-auto group-hover:text-white">
              {category.icon}
            </div>
            <h2 className="text-center capitalize text-md font-secondary group-hover:text-white">
              {category.title}
            </h2>
          </div>
        ))}
      </div>
      <Hr className="mt-[10px]" />
    </div>
  );
};
export default Categories;
