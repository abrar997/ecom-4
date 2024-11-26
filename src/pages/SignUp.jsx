import { Link } from "react-router-dom";
import signUpImage from "../assets/images/signup.png";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Google from "../assets/icons/google.svg";
import Footer from "../components/Footer";

const SignUp = () => {
  return (
    <>
      <TopHeader />
      <Header isSignUp />
      <div className="grid lg:grid-cols-3 gap-4 lg:gap-32 lg:pr-[135px]">
        <div className="lg:col-span-2">
          <img src={signUpImage} />
        </div>
        <div className="flex flex-col gap-6 lg:gap-12 lg:py-[125.5px] px-4 lg:px-0 pb-12">
          <div className="grid lg:gap-6 gap-3">
            <h1 className="font-medium text-4xl whitespace-nowrap">
              Create an account
            </h1>
            <p className="font-secondary text-md font-normal">
              Enter your details below
            </p>
          </div>
          <div className="grid lg:gap-10 gap-5">
            <form action="" className="grid gap-10 w-full">
              <div className="grid gap-10">
                <input
                  type="text"
                  className="border-b bg-transparent font-secondary text-md font-normal"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="border-b bg-transparent font-secondary text-md font-normal"
                  placeholder="Email or Phone Number"
                />
                <input
                  type="password"
                  className="border-b bg-transparent font-secondary text-md font-normal"
                  placeholder="Password"
                />
              </div>
              <div className="grid gap-4">
                <button className="bg-secondary rounded text-center py-4 text-white hover:bg-hoverBtn font-secondary text-md font-medium">
                  Create Account
                </button>
                <button className="border border-black flex items-center justify-center gap-4 text-center py-4 text-md font-secondary">
                  <img src={Google} /> Sign up with Google
                </button>
              </div>
            </form>
            <p className="text-center font-secondary text-md font-normal justify-center flex gap-4">
              Already have account?
              <Link to="" className="border-b font-medium border-black">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SignUp;
