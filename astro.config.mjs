// SPDX-FileCopyrightText: 2024 winston <hey@winston.sh>
//
// SPDX-License-Identifier: MIT
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
});
