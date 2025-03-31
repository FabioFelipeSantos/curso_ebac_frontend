import { defineConfig } from "vite";

export default defineConfig({
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
