import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import signUpImage from "../assets/images/signup.png";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <TopHeader />
      <Header isSignUp />
      <div className="grid lg:grid-cols-3 gap-4 lg:gap-32 lg:pr-[135px] items-center lg:mb-[140px]">
        <div className="lg:col-span-2">
          <img src={signUpImage} />
        </div>
        <div className="flex flex-col gap-6 lg:gap-12 px-4 lg:px-0">
          <div className="grid lg:gap-6 gap-3">
            <h1 className="font-medium text-4xl whitespace-nowrap">
              Log in to Exclusive
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
                  placeholder="Email or Phone Number"
                />
                <input
                  type="password"
                  className="border-b bg-transparent font-secondary text-md font-normal"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-between items-center">
                <button className="bg-secondary rounded text-center py-4 px-12 text-white hover:bg-hoverBtn font-secondary text-md font-medium">
                  Login
                </button>
                <p className="text-secondary text-md font-secondary font-normal">
                  Forget Password?
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Login;
