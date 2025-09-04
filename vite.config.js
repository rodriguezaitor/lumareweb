import { defineConfig } from "vite";
import { VitePluginRadar } from "vite-plugin-radar";

export default defineConfig({
  plugins: [
    VitePluginRadar({
      enableDev: true,
      gtm: {
        id: "GTM-NWJZTBW7",
      },
    }),
  ],
});
