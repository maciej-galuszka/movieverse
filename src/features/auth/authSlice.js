import { createSlice } from "@reduxjs/toolkit";

const CREDENTIALS = {
  email: "John@example.com",
  password: "test123",
  error: "",
};

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login(state, action) {
      state.error = "";
      if (
        action.payload.email === CREDENTIALS.email &&
        action.payload.password === CREDENTIALS.password
      ) {
        state.isAuthenticated = true;
        state.user = "John";
      } else {
        state.error = "Incorrect email or password!";
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
