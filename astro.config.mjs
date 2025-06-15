// @ts-check
// @ts-ignore
import { defineConfig } from "astro/config";
// @ts-ignore
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
});