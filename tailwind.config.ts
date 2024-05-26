// SPDX-FileCopyrightText: 2024 winston <hey@winston.sh>
//
// SPDX-License-Identifier: MIT

import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
