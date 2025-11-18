import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/app/AppLayout";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import MoviePage from "@/pages/MoviePage";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import NotFound from "@/pages/NotFound";
import Watched from "@/pages/Watched";
import Movies from "@/pages/Movies";
import Watchlist from "@/pages/Watchlist";
import Settings from "@/pages/Settings";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "*", element: <NotFound /> },
      {
        path: "/",
        loader: async () => {
          const imageUrl = (await import("@/shared/assets/images/home-bg.jpg")).default;

          await new Promise((resolve) => {
            const img = new Image();
            img.src = imageUrl;
            img.onload = resolve;
          });

          return { imageUrl };
        },
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/pricing",
        loader: async () => {
          const imageUrl = (await import("@/shared/assets/images/home-bg.jpg")).default;

          await new Promise((resolve) => {
            const img = new Image();
            img.src = imageUrl;
            img.onload = resolve;
          });

          return { imageUrl };
        },
        element: <Pricing />,
      },
      {
        path: "/about",
        loader: async () => {
          const imageUrl = (await import("@/shared/assets/images/about.jpg")).default;

          await new Promise((resolve) => {
            const img = new Image();
            img.src = imageUrl;
            img.onload = resolve;
          });

          return { imageUrl };
        },
        element: <About />,
      },
      {
        path: "/login",
        element: <PublicRoute />,
      },
      {
        path: "/app",
        element: <ProtectedRoute />,
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
