import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/components/AppLayout.jsx";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Profile from "../pages/Profile";
import Watched from "../pages/Watched";
import Movies from "../pages/Movies";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: null,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <PublicRoute />,
        errorElement: null,
      },
      {
        path: "/app",
        element: <ProtectedRoute />,
        errorElement: null,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "movies",
            element: <Movies />,
          },
          {
            path: "watched",
            element: <Watched />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

export default router;
