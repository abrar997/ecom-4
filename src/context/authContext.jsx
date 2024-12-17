import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthenticationContext = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("auth"));
  const [userGoogleData, setUserGoogleData] = useState(
    JSON.parse(localStorage.getItem("googleData")) || {}
  );

  const user = JSON.parse(localStorage.getItem("auth")) || null;

  const handleSignUp = () => {
    const item = {
      userName,
      email: email.trim().toLowerCase(),
      password,
    };
    localStorage.setItem("auth", JSON.stringify(item));
    setIsLogin(true);
  };

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("auth"));
    if (user) {
      if (email === user.email && password === user.password) {
        localStorage.setItem("auth", "true");
        setIsLogin(true);
      } else {
        setError("invalid email or password .");
      }
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("googleData");
    setIsLogin(false);
    setUserGoogleData(null);
    googleLogout();
  };
  const signUpGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        setUserGoogleData(res.data);
        localStorage.setItem("googleData", JSON.stringify(res.data));
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },
  });
  useEffect(() => {
    JSON.parse(localStorage.getItem("googleData"), userGoogleData);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        handleSignUp,
        userName,
        email,
        password,
        setEmail,
        setUserName,
        setPassword,
        handleLogin,
        error,
        user,
        handleLogout,
        isLogin,
        signUpGoogle,
        userGoogleData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthenticationContext;
