import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watched: [],
  wishlist: [],
};

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    addToWatched(state, action) {
      state.watched.push(action.payload);
    },
    addToWishlist(state, action) {
      state.wishlist.push(action.payload);
    },
  },
});

export const { addToWatched } = moviesSlice.actions;
export default moviesSlice.reducer;
