import Footer from "../components/reusable/Footer";
import PathPages from "../components/reusable/PathPages";
import TopHeader from "../components/reusable/TopHeader";
import Services from "../components/reusable/Services";
import FirstSectionAbout from "../components/About/FirstSectionAbout";
import NumberOfUsers from "../components/About/NumberOfUsers";
import OurTeam from "../components/About/OurTeam";
import { NumberOfUsersData, TeamData } from "../assets/mockData";
import Header from "../components/reusable/Header";
import { AboutLinks } from "../assets/LinksPageData";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/context";
import FilteredProducts from "../components/reusable/FilteredProducts";

const About = () => {
  const { filteredProducts, searchProduct } = useContext(ProductsContext);

  return (
    <div>
      <TopHeader />
      <Header />
      {searchProduct?.trim().length > 0 && filteredProducts?.length > 0 ? (
        <FilteredProducts />
      ) : (
        <div className="lg:mt-20 mt-8 lg:mb-[130px] mb-12 lg:gap-[42px] gap-8">
          <div className="lg:p-inline p-4 lg:mb-10">
            <PathPages lastIndex={1} links={AboutLinks} />
          </div>
          <div className="lg:gap-[140px] gap-12 flex flex-col">
            <FirstSectionAbout />
            <div className="lg:p-inline px-4 flex flex-col lg:gap-[140px] gap-12">
              <NumberOfUsers data={NumberOfUsersData} />
              <OurTeam data={TeamData} />
            </div>
            <Services />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default About;
