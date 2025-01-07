import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Component /> : <Navigate to="/signup" />;
};

export default ProtectedRoute;
