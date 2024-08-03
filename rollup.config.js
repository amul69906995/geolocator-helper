import { defineConfig } from "rollup";

export default defineConfig({
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "es",
    name: "geolocator-helper",
  },
  external: ["react", "react-dom"],
});