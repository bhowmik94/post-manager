import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "src": path.resolve(__dirname, "src"),
    },
  },
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
    include: ["src/__tests__/**/*.test.{js,jsx,ts,tsx}"],
  },
});
