import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthenticationContext = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("auth")) || null;
  const navigate = useNavigate();

  const handleSignUp = () => {
    const item = {
      userName,
      email: email.trim().toLowerCase(),
      password,
    };
    localStorage.setItem("auth", JSON.stringify(item));
  };

  const handleLogin = () => {
    if (!user) {
      setError("No account found. Please sign up first.");
      setEmail("");
      setPassword("");
    } else if (user.email !== email.trim().toLowerCase()) {
      setEmail("");
      setError("There is an issue with the email. Please try again.");
    } else if (user.password !== password) {
      setError("There is an issue with the password. Please try again.");
      setPassword("");
    } else {
      console.log("User is correct");
      navigate("/cart");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("signup");
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthenticationContext;
