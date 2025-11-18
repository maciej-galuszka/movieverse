import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "@/features/auth/authSlice";
import Login from "@/pages/Login";

function PublicRoute() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return isAuthenticated ? <Navigate to="/app" /> : <Login />;
}

export default PublicRoute;
