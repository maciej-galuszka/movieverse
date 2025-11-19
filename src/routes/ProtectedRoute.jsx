import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsAuthenticated } from "@/features/auth/authSlice";

// The protected route is accesible only to logged users
// If the user is logged it renders the Outlet, otherwise it navigates to Login page

function ProtectedRoute() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
