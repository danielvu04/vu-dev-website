import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended"
    ],
    "parserOptions": {
      "ecmaVersion": 12,
      "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
      "prettier/prettier": ["error"],
      "react/react-in-jsx-scope": "off"
    }
  }
  
];
