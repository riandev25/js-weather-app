module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": 0,
    "no-alert": 0,
    quotes: ["error", "double"],
    "linebreak-style": 0,
    "comma-dangle": 0,
    "operator-linebreak": 0,
  },
};
