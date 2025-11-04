import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "@/features/movies/moviesSlice.js";
import authReducer from "@/features/auth/authSlice.js";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    auth: authReducer,
  },
});

export default store;
