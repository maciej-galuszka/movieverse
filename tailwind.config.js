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
        darkHover: "#1a1f24",
        lightGray: "#434a52",
        lightGrayHover: "#3F464E",
        grayLight: "#adb5bd",
        grayDark: "#495057",
        violet: {
          550: "#844FF0",
        },
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
