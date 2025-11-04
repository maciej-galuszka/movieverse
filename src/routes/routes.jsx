import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/components/AppLayout.jsx";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

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
            index: true,
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

export default router;
