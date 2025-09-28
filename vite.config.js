import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/NextSetLive/",   // 👈 ensures built paths work on GitHub Pages
  plugins: [react()],
  server: {
    open: true,
  },
});
