export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["import"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "linebreak-style": "off",
    "import/no-unresolved": "error",
    "import/no-duplicates": "error",
    "import/order": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
