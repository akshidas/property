import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      pages: "/src/pages",
      utils: "/src/utils",
      store: "/src/store",
      theme: "/src/theme",
      layout: "/src/layout",
    },
  },
  server: {
    port: 3000,
  },
});
