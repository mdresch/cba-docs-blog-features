// .eslintrc.js
module.exports = {
    extends: [
      "eslint:recommended",
      "next/core-web-vitals",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended", // Add this line
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    plugins: ["react", "jsx-a11y", "@typescript-eslint", "prettier"],
    rules: {
      "prettier/prettier": "error",
      // Add other rules as needed
    },
  };