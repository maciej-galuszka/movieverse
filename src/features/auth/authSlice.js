import { createSlice } from "@reduxjs/toolkit";

const CREDENTIALS = {
  email: "John@example.com",
  password: "test123",
  error: "",
};

const initialState = {
  isAuthenticated: false,
  user: null,
  settings: {
    notifications: true,
    emailUpdates: false,
    locationAccess: false,
    saveHistory: true,
  },
  error: null,
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
        state.user = ["John", "Doe"];
      } else {
        state.error = "Incorrect email or password!";
      }
    },

    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },

    resetError(state) {
      state.error = null;
    },

    updateSettings(state, action) {
      const { key } = action.payload;
      state.settings[key] = !state.settings[key];
    },
  },
});

export const selectUser = (state) => state.auth.user;
export const selectSettings = (state) => state.auth.settings;

export const { login, logout, resetError, updateSettings } = authSlice.actions;
export default authSlice.reducer;
