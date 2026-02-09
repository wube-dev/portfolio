import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // This is the engine

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // This processes your CSS
  ],
});
