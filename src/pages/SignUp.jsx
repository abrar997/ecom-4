import { Link, useNavigate } from "react-router-dom";
import signUpImage from "../assets/images/signup.png";
import Google from "../assets/icons/google.svg";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import TopHeader from "../components/reusable/TopHeader";
import Header from "../components/reusable/Header";
import Footer from "../components/reusable/Footer";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    handleSignUp,
    userName,
    email,
    password,
    setEmail,
    setUserName,
    setPassword,
  } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
    navigate("/login");
  };

  return (
    <>
      <TopHeader />
      <Header />
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
            <form
              className="grid lg:gap-8 gap-6  w-full"
              onSubmit={handleSubmit}
            >
              <div className="grid lg:gap-10 gap-5 font-secondary text-md font-normal">
                <input
                  type="text"
                  className="border-b bg-transparent py-2 focus:outline-none"
                  placeholder="Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  type="email"
                  className="border-b bg-transparent py-2 focus:outline-none"
                  placeholder="Email or Phone Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="border-b bg-transparent py-2 focus:outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-4">
                <button
                  className={`${
                    !userName || !email || !password
                      ? "bg-gray-400  cursor-not-allowed"
                      : "bg-secondary hover:bg-hoverBtn"
                  } rounded text-center py-4 text-white font-secondary text-md font-medium`}
                >
                  Create Account
                </button>
                <button className="border border-black flex items-center justify-center gap-4 text-center py-4 text-md font-secondary">
                  <img src={Google} /> Sign up with Google
                </button>
              </div>
            </form>
            <p className="text-center font-secondary text-md font-normal justify-center flex gap-4">
              Already have account?
              <Link to="/login" className="border-b font-medium border-black">
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
