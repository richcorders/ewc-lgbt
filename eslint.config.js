// SPDX-FileCopyrightText: 2024 winston <hey@winston.sh>
//
// SPDX-License-Identifier: MIT
// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
// @ts-expect-error - https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2324
import eslintPluginUnicorn from "eslint-plugin-unicorn";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  eslintPluginUnicorn.configs["flat/recommended"],
  { rules: { "unicorn/filename-case": "off" } },
  {
    files: ["**/*.astro"],
    rules: {
      "unicorn/text-encoding-identifier-case": "off",
      "unicorn/prevent-abbreviations": [
        "error",
        {
          // `interface Props` is used by `Astro.props`
          allowList: {
            Props: true,
          },
        },
      ],
    },
  },
  {
    files: ["**/env.d.ts"],
    rules: {
      "unicorn/prevent-abbreviations": "off",
    },
  },
);
