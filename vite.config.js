import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    mockReset: true,
    restoreMocks: true,
    clearMocks: true,
    threads: false,
    isolate: false,
    reporters: "verbose",
  },
});
