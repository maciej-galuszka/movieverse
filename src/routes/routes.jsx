import { createHashRouter } from "react-router-dom";
import AppLayout from "@/app/AppLayout";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import MoviePage from "@/pages/MoviePage";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import Watched from "@/pages/Watched";
import Movies from "@/pages/Movies";
import Watchlist from "@/pages/Watchlist";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Settings from "../pages/Settings";

const router = createHashRouter([
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
            path: "movies/:imdbID",
            element: <MoviePage />,
          },
          {
            path: "watched",
            element: <Watched />,
          },
          {
            path: "watchlist",
            element: <Watchlist />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);

export default router;
