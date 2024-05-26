// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  eslintPluginUnicorn.configs["flat/recommended"],
  {
    files: ["**/*.astro"],
    rules: {
      "unicorn/filename-case": "off",
      "unicorn/text-encoding-identifier-case": "off",
    },
  },
  {
    files: ["**/env.d.ts"],
    rules: {
      "unicorn/prevent-abbreviations": "off",
    },
  },
);
