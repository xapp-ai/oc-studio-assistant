/*! Copyright (c) 2022, XAPP AI */
module.exports = {
  extends: ["plugin:@typescript-eslint/recommended", "react-app", "prettier"],
  plugins: ["@typescript-eslint", "react", "notice"],
  rules: {
    "notice/notice": [
      "error",
      {
        mustMatch: "Copyright \\(c\\) [0-9]{0,4}, XAPP AI",
        template: "/*! Copyright (c) <%= YEAR %>, XAPP AI */\n",
      },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
  },
};
