import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const { email, setEmail, setOTP } = useContext(AuthContext);
  const navigate = useNavigate();
  const navigateToForgetPassword = async () => {
    if (email) {
      const OTP = Math.floor(Math.random() * 9500 + 1000); //create random number as verification number to send it to email
      setOTP(OTP);
      await axios
        .post("http://localhost:5173/forgetPassword", {
          OTP,
          recipient_email: email,
        })
        .then(() => {
          navigate("/reset");
        })
        .catch((error) => {
          console.log(error);
        });
      return;
    }
  };

  return (
    <div className="bg-secondary2 flex items-center justify-center h-screen">
      <div className="rounded bg-white shadow w-[30%] p-6 grid gap-4">
        <h1 className="font-semibold text-2xl text-center">Forget password</h1>
        <form
          className="grid gap-4 text-sm font-secondary"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            className="border-b bg-transparent py-2 focus:outline-none font-secondary lg:text-md font-normal"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            defaultValue=""
          />
          <button
            onClick={navigateToForgetPassword}
            className="bg-black text-white rounded px-6 py-3 capitalize hover:bg-opacity-80"
          >
            forget password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
