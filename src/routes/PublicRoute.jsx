import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "@/features/auth/authSlice";
import Login from "@/pages/Login";

// The public route is accesible only to not logged users
// If the user is logged in it redirects to /app, otherwise it renders Login page

function PublicRoute() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? <Navigate to="/app" /> : <Login />;
}

export default PublicRoute;
