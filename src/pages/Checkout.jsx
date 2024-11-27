import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";

const Checkout = () => {
  const FormInputsFields = [
    { label: "First name", to: "", name: "" },
    { label: "Company Name", to: "", name: "" },
    { label: "Street Address", to: "", name: "" },
    { label: " Apartment, floor, etc. (optional)", to: "", name: "" },
    { label: " Town/City*", to: "", name: "" },
    { label: "Phone Number**", to: "", name: "" },
    { label: "Email Address*", to: "", name: "" },
  ];
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="p-inline pt-[80px] pb-[140px] grid gap-[80px]">
        <div className="flex gap-3 text-black text-[14px] font-secondary">
          <Link to="/" className="opacity-50">
            Account
          </Link>{" "}
          <span className="opacity-50">/</span>
          <Link to="/" className="opacity-50">
            My Account
          </Link>
          <span className="opacity-50">/</span>
          <Link to="/" className="opacity-50">
            Products
          </Link>
          <span className="opacity-50">/</span>
          <Link to="/" className="opacity-50">
            View Cart
          </Link>
          <span className="opacity-50">/</span>
          <Link to="/">CheckOut</Link>
        </div>
        <div className="grid gap-12">
          <h1 className="text-4xl font-medium">Billing Details</h1>
          <div className="lg:flex items-start lg:gap-[173px] grid gap-6">
            <form action="" className="grid gap-8">
              {FormInputsFields.map((item, index) => (
                <FormInputs input={item} key={index} />
              ))}

              <div className="flex gap-4">
                <input type="checkbox" name="" id="" />
                <span className="text-md font-secondary">
                  Save this information for faster check-out next time
                </span>
              </div>
            </form>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Checkout;

const FormInputs = ({ input }) => {
  return (
    <div className="grid gap-2">
      <label htmlFor={input.to} className="font-secondary text-md opacity-40">
        {input.label}
      </label>
      <input
        type="text"
        name={input.name}
        className="bg-[#F5F5F5] rounded border-none h-[50px]"
      />
    </div>
  );
};
