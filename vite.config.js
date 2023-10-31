import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from 'url';
// https://vitejs.dev/config/

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, './src/assets'),
    },
  },
  plugins: [react()],
});
