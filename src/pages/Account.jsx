import { Link } from "react-router-dom";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import PathPages from "../components/reusable/PathPages";
import Button from "../components/reusable/Button";
import Footer from "../components/Footer";

const Account = () => {
  let itemIndex = 0;
  const links = [
    { link: "Home", to: "/" },
    { link: "Account", to: "/account" },
  ];
  const inputsData = [
    { label: "First name", type: "text", placeholder: "Md" },
    { label: "Last name", type: "text", placeholder: "Rimel" },
    { label: "Email", type: "email", placeholder: "rimel1111@gmail.com" },
    {
      label: "Address",
      type: "text",
      placeholder: "Kingston, 5236, United State",
    },
    { label: "Password change", type: "text", placeholder: "Current password" },
    { label: "", type: "text", placeholder: "New password" },
    { label: "", type: "text", placeholder: "Confirm password" },
  ];
  return (
    <div>
      <TopHeader />
      <Header isCheckout />
      <div className="lg:mt-[80px] mt-8 lg:mb-[140px] mb-12 lg:p-inline p-4 grid gap-[80px]">
        <div className="flex justify-between items-center font-secondary">
          <PathPages links={links} lastIndex={1} />
          <div className="flex gap-2 text-sm">
            <span>Welcome!</span>
            <span className="text-secondary capitalize">user NAme</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-0 gap-4">
          <div className="capitalize col-span-1 flex flex-col lg:gap-6 gap-3 font-secondary text-md">
            <div className="grid gap-4">
              <h1 className="font-medium">manage my account</h1>
              <div className="lg:pl-9 pl-2 grid gap-2">
                <Link to="/account" className="text-secondary">
                  my Profile
                </Link>
                <Link to="" className="opacity-50">
                  Address Book
                </Link>
                <Link to="" className="opacity-50">
                  My Payment Options{" "}
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              <h1 className="font-medium">manage my account</h1>
              <div className="lg:pl-9 pl-2 grid gap-2">
                <Link to="" className="opacity-50">
                  my returns
                </Link>
                <Link to="" className="opacity-50">
                  my cancellations{" "}
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              <h1 className="font-medium">my wishlist</h1>
            </div>
          </div>

          <div className="shadow-lg grid gap-6 lg:py-10 py-6 lg:px-20 px-4 lg:col-span-2">
            <div className="grid gap-4">
              <h1 className="text-md font-secondary text-secondary font-medium">
                Edit your profile
              </h1>
              <form
                action=""
                className={`grid ${
                  itemIndex > 2 ? "grid-cols-1" : "lg:grid-cols-2"
                } gap-6`}
              >
                {inputsData.map((input, index) => {
                  itemIndex === index;
                  return (
                    <InputField
                      key={index}
                      label={input.label}
                      placeholder={input.placeholder}
                      type={input.type}
                    />
                  );
                })}
              </form>
            </div>
            <div className="ml-auto flex items-center gap-8">
              <button className="border-none bg-transparent text-md">
                Cancel
              </button>
              <Button text="save changes" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;

const InputField = ({ label, placeholder, type }) => {
  return (
    <div className="grid gap-2 ">
      <label htmlFor="" className="text-md font-secondary capitalize">
        {label}
      </label>
      <input
        type={type}
        className="px-4 py-[13px] bg-secondary2 rounded border-none "
        placeholder={placeholder}
      />
    </div>
  );
};
