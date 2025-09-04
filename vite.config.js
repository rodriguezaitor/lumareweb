import { defineConfig } from "vite";
import { VitePluginRadar } from "vite-plugin-radar";

export default defineConfig({
  plugins: [
    VitePluginRadar({
      enableDev: true,
      gtm: {
        id: "GTM-XXXXXXX", // Replace with your GTM ID
      },
    }),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
});
