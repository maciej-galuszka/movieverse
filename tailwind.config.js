export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xxs: "0.625rem",
      },
      colors: {
        dark: "#212529",
        lightGray: "#434a52",
        lightGrayHover: "#3F464E",
        darkerLightGray: "#3c434a",
        violet: {
          550: "#844FF0",
        },
      },
      keyframes: {
        textPulse: {
          "0%, 100%": { color: "#ffffff" },
          "50%": { color: "#a684ff" },
        },
      },
      animation: {
        textPulse: "textPulse 4s ease-in-out infinite",
      },
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
