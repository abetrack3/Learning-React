import { defineConfig } from "vite";
import { viteReact as react } from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react],
    root: "src",
})
