import Footer from "../components/Footer";
import Header from "../components/Header";
import PathPages from "../components/reusable/PathPages";
import TopHeader from "../components/TopHeader";
import ContactDetails from "../components/Contact/ContactDetails";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  const links = [
    { link: "home", to: "/" },
    { link: "contact", to: "/contact" },
  ];
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="lg:p-inline p-4 grid lg:gap-20 gap-12 lg:mb-[140px] mb-12 lg:mt-20 mt-8">
        <PathPages links={links} lastIndex={1} />

        <div className="lg:grid  flex flex-col lg:grid-cols-3 lg:gap-[30px] gap-6">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
