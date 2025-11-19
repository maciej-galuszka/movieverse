import { configureStore } from "@reduxjs/toolkit";
import initialState from "./initialState";
import moviesReducer from "@/features/movies/moviesSlice.js";
import authReducer from "@/features/auth/authSlice.js";

// Function to load saved state from local storage. If saved state exists it returns it, otherwise it returns undefined

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

// Function to save state to local storage

const saveState = (state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem("appState", serialized);
  } catch (err) {
    console.error("Error saving state", err);
  }
};

const persistedState = loadState();

// Creating Redux store
const store = configureStore({
  reducer: {
    movies: moviesReducer,
    auth: authReducer,
  },
  preloadedState: persistedState || initialState,
});

// Store subscription to save certain pieces of state to local storage

store.subscribe(() => {
  const state = store.getState();

  const stateToPersist = {
    auth: {
      isAuthenticated: state.auth.isAuthenticated,
      user: state.auth.user,
      settings: state.auth.settings,
    },
    movies: {
      watchlist: state.movies.watchlist,
      watched: state.movies.watched,
    },
  };

  saveState(stateToPersist);
});

export default store;
