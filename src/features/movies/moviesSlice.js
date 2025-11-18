import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watched: [],
  watchlist: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToWatched(state, action) {
      const exists = state.watched.some((movie) => movie.imdbID === action.payload.imdbID);
      if (!exists) state.watched.push(action.payload);
    },
    deleteWatched(state, action) {
      state.watched = state.watched.filter((movie) => movie.imdbID !== action.payload);
    },
    updateWatched(state, action) {
      const index = state.watched.findIndex((movie) => movie.imdbID === action.payload.imdbID);
      if (index !== -1) {
        state.watched[index] = { ...state.watched[index], ...action.payload };
      }
    },
    addToWatchlist(state, action) {
      const exists = state.watchlist.some((movie) => movie.imdbID === action.payload.imdbID);
      if (!exists) state.watchlist.push(action.payload);
    },
    deleteFromWatchlist(state, action) {
      state.watchlist = state.watchlist.filter((movie) => movie.imdbID !== action.payload);
    },
  },
});

export default moviesSlice.reducer;

export const { addToWatched, deleteWatched, updateWatched, addToWatchlist, deleteFromWatchlist } =
  moviesSlice.actions;

export const selectWatched = (state) => state.movies.watched;
export const selectWatchlist = (state) => state.movies.watchlist;

export const selectRating = (movie) => (state) => {
  if (!movie) return null;
  const found = state.movies.watched.find((m) => m.imdbID === movie.imdbID);
  return found?.rating ?? null;
};

export const selectOnWatchlist = (movie) => (state) => {
  if (!movie) return false;
  return state.movies.watchlist.some((m) => m.imdbID === movie.imdbID);
};
