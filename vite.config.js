import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    server: {
      fs: {
        cachedChecks: false,
      },
      port: 3000,
    },
    base: "/profile/",
    build: {
      outDir: "build",
    },
    plugins: [react()],
  };
});
