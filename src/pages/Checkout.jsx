import { useContext } from "react";
import Coupon from "../components/reusable/Coupon";
import Button from "../components/reusable/Button";
import { FormInputsFieldsCheckOut } from "../assets/mockData";
import bk from "../assets/icons/bkash.svg";
import visa from "../assets/icons/visa.svg";
import master from "../assets/icons/master.svg";
import bangali from "../assets/icons/bangali.svg";
import PathPages from "../components/reusable/PathPages";
import TopHeader from "../components/reusable/TopHeader";
import Header from "../components/reusable/Header";
import Footer from "../components/reusable/Footer";
import { CartContext } from "../context/cartContext";
import TotalPrice from "../components/reusable/TotalPrice";

const Checkout = () => {
  const { cartItems, totalPrice, subtotal } = useContext(CartContext);

  const links = [
    { link: "Account", to: "/account" },
    { link: "My Account", to: "/myAccount" },
    { link: "Products", to: "/products" },
    { link: "View Cart", to: "/cart" },
    { link: "CheckOut", to: "/checkout" },
  ];
  return (
    <div>
      <TopHeader />
      <Header isWithUSer />
      <div className="lg:p-inline p-4 pt-8 pb-12 lg:pt-[80px] lg:pb-[140px] grid lg:gap-[80px] gap-6">
        <PathPages links={links} lastIndex={4} />
        <div className="grid lg:gap-12 gap-6">
          <h1 className="lg:text-4xl text-3xl font-medium">Billing Details</h1>
          <div className="lg:flex items-start lg:gap-[173px] grid gap-6">
            <form action="" className="grid lg:gap-8 gap-4">
              {FormInputsFieldsCheckOut.map((item, index) => (
                <FormInputs input={item} key={index} />
              ))}
              <div className="flex gap-4">
                <input type="checkbox" name="" id="" />
                <span className="text-md font-secondary">
                  Save this information for faster check-out next time
                </span>
              </div>
            </form>
            <div className="flex flex-col gap-8 mt-8">
              <div className="grid gap-8">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center text-md font-secondary"
                  >
                    <div className="flex items-center gap-6">
                      <img src={item.image} className="w-[50px] h-[40px]" />
                      <h1>{item.title}</h1>
                    </div>
                    <p>${item.price}</p>
                  </div>
                ))}
              </div>
              <TotalPrice isCheckout subtotal={subtotal} total={totalPrice} />
              <div>
                <div className="grid gap-8">
                  <div className="flex justify-between items-center text-md font-secondary">
                    <div className="flex gap-4">
                      <input type="radio" name="" id="" className="w-6 h-6" />
                      <label htmlFor="">Bank</label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <button>
                        <img src={bk} alt="" />
                      </button>
                      <button>
                        <img src={visa} alt="" />
                      </button>
                      <button>
                        <img src={master} alt="" />
                      </button>
                      <button>
                        <img src={bangali} alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <input type="radio" name="" id="" className="w-6 h-6" />
                    <label htmlFor="">Cash on delivery</label>
                  </div>
                </div>
              </div>
              <Coupon />
              <div className="mr-auto">
                <Button text="place order" />
              </div>
            </div>
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
        className="bg-secondary2 rounded border-none h-[50px]"
      />
    </div>
  );
};
