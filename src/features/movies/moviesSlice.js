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
      state.watched.push(action.payload);
    },
    addToWatchlist(state, action) {
      state.watchlist.push(action.payload);
    },
  },
});

export default moviesSlice.reducer;
export const { addToWatched, addToWatchlist } = moviesSlice.actions;

export const selectWatched = (state) => state.movies.watched;
export const selectWatchlist = (state) => state.movies.watchlist;
export const selectRating = (movie) => (state) => {
  if (!movie) return null;
  const watchedMovie = state.movies.watched.find((watched) => watched.imdbID === movie.imdbID);
  return watchedMovie ? watchedMovie.rating : null;
};
export const selectOnWatchlist = (movie) => (state) => {
  if (!movie) return null;
  return state.movies.watchlist.some((mov) => mov.imdbID === movie.imdbID);
};
