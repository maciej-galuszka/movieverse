import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "@/features/movies/moviesSlice.js";
import authReducer from "@/features/auth/authSlice.js";

const loadState = () => {
  try {
    const serialized = localStorage.getItem("appState");
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch (err) {
    console.error("Error loading state", err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem("appState", serialized);
  } catch (err) {
    console.error("Error saving state", err);
  }
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    auth: authReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    auth: {
      settings: store.getState().auth.settings,
    },
    movies: store.getState().movies,
  });
});

export default store;
