import { createSlice } from "@reduxjs/toolkit";

const DEMO_USER = {
  email: import.meta.env.VITE_DEMO_EMAIL ?? "John@example.com",
  password: import.meta.env.VITE_DEMO_PASSWORD ?? "test123",
  name: "John Doe",
};

const savedState = JSON.parse(localStorage.getItem("auth"));

const initialState = savedState || {
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
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.error = null;

      const { email, password } = action.payload;

      if (email === DEMO_USER.email && password === DEMO_USER.password) {
        state.isAuthenticated = true;
        state.user = {
          name: DEMO_USER.name,
          email: DEMO_USER.email,
        };
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
      if (key in state.settings) {
        state.settings[key] = !state.settings[key];
      }
    },
  },
});

export const selectUser = (state) => state.auth.user;
export const selectSettings = (state) => state.auth.settings;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export const { login, logout, resetError, updateSettings } = authSlice.actions;
export default authSlice.reducer;
