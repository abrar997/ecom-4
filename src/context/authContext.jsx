import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthenticationContext = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("auth"));

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
    if (isLogin) {
      localStorage.removeItem("auth");
    }
    setIsLogin(false);
  };
  const signUpGoogle = () => {
    console.log("goole");
  };

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthenticationContext;
