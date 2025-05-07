// components/PrivateRoute.js
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = !!localStorage.getItem("userData"); 
  return auth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
