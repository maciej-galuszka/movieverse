import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watched: [], //list of watched movies
  watchlist: [], //list of movies user wants to watch
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // adding the movie to watched only if it's not already there
    addToWatched(state, action) {
      const exists = state.watched.some((movie) => movie.imdbID === action.payload.imdbID);
      if (!exists) state.watched.push(action.payload);
    },
    // deleting movie from watched
    deleteWatched(state, action) {
      state.watched = state.watched.filter((movie) => movie.imdbID !== action.payload);
    },
    // updating movie rating
    updateWatched(state, action) {
      const index = state.watched.findIndex((movie) => movie.imdbID === action.payload.imdbID);
      if (index !== -1) {
        state.watched[index] = { ...state.watched[index], ...action.payload };
      }
    },
    // adding the movie to watchlist only if it's not already there
    addToWatchlist(state, action) {
      const exists = state.watchlist.some((movie) => movie.imdbID === action.payload.imdbID);
      if (!exists) state.watchlist.push(action.payload);
    },
    // deleting movie from watchlist
    deleteFromWatchlist(state, action) {
      state.watchlist = state.watchlist.filter((movie) => movie.imdbID !== action.payload);
    },
  },
});

// selectors for components
export const selectWatched = (state) => state.movies.watched;
export const selectWatchlist = (state) => state.movies.watchlist;

// selector to check if the movie is already rated
export const selectRating = (movie) => (state) => {
  if (!movie) return null;
  const found = state.movies.watched.find((m) => m.imdbID === movie.imdbID);
  return found?.rating ?? null;
};

// selector to check if the movie is on the watchlist
export const selectOnWatchlist = (movie) => (state) => {
  if (!movie) return false;
  return state.movies.watchlist.some((m) => m.imdbID === movie.imdbID);
};

// exporting actions
export const { addToWatched, deleteWatched, updateWatched, addToWatchlist, deleteFromWatchlist } =
  moviesSlice.actions;

export default moviesSlice.reducer;
