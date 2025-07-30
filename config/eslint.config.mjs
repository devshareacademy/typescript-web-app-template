import eslintConfig from "@devshareacademy/eslint-config";

export default [
  {
    ignores: ["**/node_modules", "**/dist"],
  },
  ...eslintConfig,
  {
    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "@typescript-eslint/unbound-method": "off",
    },
  },
];
