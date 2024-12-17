import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLogin, userGoogleData } = useContext(AuthContext);
  return isLogin || userGoogleData ? children : <Navigate to="/signup" />;
};

export default ProtectedRoute;
