import Coupon from "../components/reusable/Coupon";
import Button from "../components/reusable/Button";
import PathPages from "../components/reusable/PathPages";
import TopHeader from "../components/reusable/TopHeader";
import Header from "../components/reusable/Header";
import Footer from "../components/reusable/Footer";
import TotalPrice from "../components/reusable/TotalPrice";
import UserDataForm from "../components/Checkout/UserDataForm";
import CheckoutItems from "../components/Checkout/CheckoutItems";
import PaymentMethods from "../components/Checkout/PaymentMethods";
import { CheckoutLinks } from "../assets/LinksPageData";

const Checkout = () => {
  return (
    <div>
      <TopHeader />
      <Header isWithUSer />
      <div className="lg:p-inline p-4 pt-8 pb-12 lg:pt-[80px] lg:pb-[140px] grid lg:gap-[80px] gap-6">
        <PathPages links={CheckoutLinks} lastIndex={4} />
        <div className="grid lg:gap-12 gap-6">
          <h1 className="lg:text-4xl text-3xl font-medium">Billing Details</h1>
          <div className="lg:flex items-start lg:gap-[173px] grid gap-6">
            <UserDataForm />
            <div className="flex flex-col gap-8 mt-8">
              <CheckoutItems />
              <TotalPrice isCheckout />
              <PaymentMethods />
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
