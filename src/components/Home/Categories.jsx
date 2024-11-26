import { CategoriesData } from "../../assets/mockData";
import HeaderSection from "../reusable/HeaderSection";
import Hr from "../reusable/Hr";

const Categories = () => {
  return (
    <div className="lg:py-20 py-4 grid lg:gap-sections gap-6">
      <HeaderSection subtitle="categories" title="browse by category" />
      <div className="grid lg:grid-cols-6 lg:gap-8 gap-4 lg:p-inline p-4">
        {CategoriesData.map((category, index) => (
          <div
            key={index}
            className="border border-black p-4 lg:pt-0 hover:border-slate-50 border-opacity-30 rounded py-6 flex lg:grid items-center lg:justify-center gap-4 hover:bg-secondary transition-all duration-300 group"
          >
            <div className="text-5xl lg:m-auto group-hover:text-white">
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
