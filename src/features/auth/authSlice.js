import { createSlice } from "@reduxjs/toolkit";

// Demo user credentials (hardcoded for demo/login simulation)
const DEMO_USER = {
  email: "John@example.com",
  password: "test123",
  name: "John Doe",
};

// Initial state of auth slice
const initialState = {
  isAuthenticated: false, // whether user is logged in
  user: null, // user info object
  settings: {
    notifications: true,
    emailUpdates: false,
    locationAccess: false,
    saveHistory: true,
  },
  error: null, // error message for login failures
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Attempt to log in with email/password
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

    // Log out user
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },

    // Reset error message (e.g., on input change)
    resetError(state) {
      state.error = null;
    },

    // Toggle user settings (notifications, etc.)
    updateSettings(state, action) {
      const { key } = action.payload;
      if (key in state.settings) {
        state.settings[key] = !state.settings[key];
      }
    },
  },
});

// Selectors for components
export const selectUser = (state) => state.auth.user;
export const selectSettings = (state) => state.auth.settings;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

// Export actions
export const { login, logout, resetError, updateSettings } = authSlice.actions;
export default authSlice.reducer;
