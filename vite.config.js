import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  // root прибираємо, за замовчуванням він буде в корені
  build: {
    outDir: "dist", // Тепер папка dist створиться прямо в корені
    emptyOutDir: true,
  },
  plugins: [
    injectHTML(),
    FullReload(["./**/*.html"]), // Стежимо за всіма html файлами в проекті
  ],
});
