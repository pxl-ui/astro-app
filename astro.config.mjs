// @ts-check

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	srcDir: "./app",
	publicDir: "./app/public",
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [react()],
});
