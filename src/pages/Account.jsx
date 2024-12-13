import { Link } from "react-router-dom";
import Header from "../components/reusable/Header";
import TopHeader from "../components/reusable/TopHeader";
import PathPages from "../components/reusable/PathPages";
import Button from "../components/reusable/Button";
import Footer from "../components/reusable/Footer";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { AccountLinks } from "../assets/LinksPageData";

const Account = () => {
  const { user } = useContext(AuthContext);
  let itemIndex = 0;

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
      <div className="lg:mt-[80px] mt-8 lg:mb-[140px] mb-12 lg:p-inline p-4 grid lg:gap-[80px] gap-10">
        <div className="flex justify-between items-center font-secondary">
          <PathPages links={AccountLinks} lastIndex={1} />
          <div className="flex gap-2 text-sm">
            <span>Welcome!</span>
            <span className="text-secondary capitalize">
              {user ? user.userName : <p>user name</p>}
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-0 gap-4">
          <div className="capitalize col-span-1 flex flex-col lg:gap-6 gap-3 font-secondary lg:text-md">
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
                  My Payment Options
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
                  my cancellations
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              <h1 className="font-medium">my wishlist</h1>
            </div>
          </div>

          <div className="lg:shadow-contactBox grid gap-6 lg:py-10 py-6 lg:px-20 px-0 lg:col-span-2">
            <div className="grid gap-4">
              <h1 className="text-md font-secondary text-secondary font-medium">
                Edit your profile
              </h1>
              <form
                action=""
                className={`grid ${
                  itemIndex > 2 ? "grid-cols-1" : "lg:grid-cols-2"
                } lg:gap-6 gap-5`}
              >
                {inputsData.map((input, index) => {
                  const isLstThree = index >= inputsData.length - 3;
                  return (
                    <InputField
                      key={index}
                      label={input.label}
                      placeholder={input.placeholder}
                      type={input.type}
                      className={`${isLstThree ? "col-span-full w-full" : ""}`}
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

const InputField = ({ label, placeholder, type, className }) => {
  return (
    <div className={`grid gap-2  ${className}`}>
      <label htmlFor="" className="text-md font-secondary capitalize">
        {label}
      </label>
      <input
        type={type}
        className={`px-4 py-[13px] bg-secondary2 rounded border-none`}
        placeholder={placeholder}
      />
    </div>
  );
};
