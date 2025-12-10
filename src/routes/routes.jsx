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

/**
 * Main app router
 * -----------------------
 * Structure:
 * - "/" - main page
 * - "/pricing" - pricing page
 * - "/about" - about page
 * - "/login" - public route (only for not logged users)
 * - "/app" - protected routes (only for logged users)
 *   - dashboard
 *   - watched
 *   - watchlist
 *   - movies
 *   - movies/:id (page with full movie details)
 *   - profile
 *   - settings
 * - "*" - fallback: NotFound
 *
 * Loader functions to preload background images
 *
 */

const router = createBrowserRouter([
  {
    element: <AppLayout />, // layout for all pages
    children: [
      { path: "*", element: <NotFound /> }, // fallback for unknown paths

      // Main page

      {
        path: "/",
        element: <Home />,
      },

      // Pricing page

      {
        path: "/pricing",
        element: <Pricing />,
      },

      // About page

      {
        path: "/about",
        element: <About />,
      },

      // Public route: login

      {
        path: "/login",
        element: <PublicRoute />,
      },

      // Protected routes: login required

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
