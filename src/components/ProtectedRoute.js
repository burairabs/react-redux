import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export const AuthRoute = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);
  
    return isLoggedIn ?  <Navigate to="/" /> : <Outlet />;
  };