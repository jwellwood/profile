import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    resolve: {
      alias: [
        {
          find: /^@nectary\/components\/(.*)$/,
          replacement: "@nectary/components/$1/index",
        },
      ],
    },
    server: {
      fs: {
        cachedChecks: false,
      },
      port: 3000,
    },
    base: "/",
    build: {
      outDir: "build",
    },
    plugins: [react()],
  };
});
