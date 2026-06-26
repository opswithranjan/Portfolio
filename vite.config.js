import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep CRA's output dir so `gh-pages -d build` and the Dockerfile keep working.
    outDir: "build"
  },
  server: {
    port: 3000,
    open: true
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.js"],
    css: true,
    deps: {
      optimizer: {
        web: {
          include: ["vitest-canvas-mock"]
        }
      }
    }
  }
});
