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
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("auth")
  );
  const [userGoogleData, setUserGoogleData] = useState(
    JSON.parse(localStorage.getItem("googleData")) || {}
  );
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("auth")) || null;

  const handleSignUp = () => {
    const item = {
      userName,
      email: email.trim().toLowerCase(),
      password,
    };
    localStorage.setItem("auth", JSON.stringify(item));
    setIsAuthenticated(true);
    navigate("/login");
  };

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("auth"));
    if (user) {
      if (email === user.email && password === user.password) {
        setIsAuthenticated(true);
        navigate("/");
      } else {
        setError("invalid email or password .");
      }
    }
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
        localStorage.setItem("googleData", JSON.stringify(res.data));
        setUserGoogleData(res.data);
        setIsAuthenticated(true);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
    setUserGoogleData(null);
    googleLogout();
    navigate("/signup");
  };

  useEffect(() => {
    let localAuth = JSON.parse(localStorage.getItem("auth"));
    let googleData = JSON.parse(localStorage.getItem("googleData"));
    if (localAuth || googleData) {
      setIsAuthenticated(true);
      setUserGoogleData(googleData || null);
    }
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
        isAuthenticated,
        signUpGoogle,
        userGoogleData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthenticationContext;
