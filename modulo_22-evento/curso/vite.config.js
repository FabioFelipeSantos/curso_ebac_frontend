import { defineConfig } from "vite";

export default defineConfig({
	root: "./src",
	css: {
		modules: {
			localsConvention: "dashes",
		},
		preprocessorOptions: {
			sass: {
				api: "modern-compiler",
			},
		},
		devSourcemap: true,
	},
});
