/** @type {import('eslint').ESLint} */
module.exports = {
  extends: ["plugin:astro/recommended"],
  plugins: [
    "prettier",
    "simple-import-sort",
    "typescript-sort-keys",
    "unused-imports",
    "tailwindcss",
    "jsx-a11y",
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
};
