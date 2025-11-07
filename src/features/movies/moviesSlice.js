import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watched: [],
  watchlist: [],
};

const moviesSlice = createSlice({
  name: "moviesSlice",
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

export const selectWatched = (state) => state.moviesSlice.watched;
export const selectWatchlist = (state) => state.moviesSlice.watchlist;
export const selectRating = (movie) => (state) => {
  if (!movie) return null;
  const watchedMovie = state.movies.watched.find((watched) => watched.imdbID === movie.imdbID);
  return watchedMovie ? watchedMovie.rating : null;
};
