import { defineConfig } from "vite";
import { VitePluginRadar } from "vite-plugin-radar";

export default defineConfig({
  plugins: [
    VitePluginRadar({
      gtm: [
        {
          id: "GTM-NWJZTBW7",
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        404: "404.html",
      },
    },
  },
});
