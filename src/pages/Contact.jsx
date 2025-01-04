import PathPages from "../components/reusable/PathPages";
import ContactDetails from "../components/Contact/ContactDetails";
import ContactForm from "../components/Contact/ContactForm";
import TopHeader from "../components/reusable/TopHeader";
import Header from "../components/reusable/Header";
import Footer from "../components/reusable/Footer";
import { ContactLinks } from "../assets/LinksPageData";
import FilteredProducts from "../components/reusable/FilteredProducts";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/context";

const Contact = () => {
  const { filteredProducts, searchProduct, handleSearchProducts, products } =
    useContext(ProductsContext);

  useEffect(() => {
    handleSearchProducts();
  }, [searchProduct, filteredProducts, products]);

  return (
    <div>
      <TopHeader />
      <Header />
      {searchProduct?.trim().length > 0 && filteredProducts?.length > 0 ? (
        <FilteredProducts />
      ) : (
        <div className="lg:p-inline p-4 grid lg:gap-20 gap-8 lg:mb-[140px] mb-12 lg:mt-20 mt-8">
          <PathPages links={ContactLinks} lastIndex={1} />
          <div className="lg:grid flex flex-col lg:grid-cols-3 lg:gap-[30px] gap-4">
            <ContactDetails />
            <ContactForm />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Contact;
