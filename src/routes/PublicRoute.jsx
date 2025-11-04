import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";

function PublicRoute() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? <Navigate to="/app" /> : <Login />;
}

export default PublicRoute;
