// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Cambia por tu dominio final: se usa para canonical, OG y sitemap.
  site: "https://barberiaimperial.com",

  integrations: [sitemap()],

  // Tailwind CSS v4 se integra como plugin de Vite (sin archivo tailwind.config).
  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    // Genera variantes optimizadas en build usando sharp.
    // Los formatos modernos (WebP) se sirven vía <Image />.
    responsiveStyles: true,
  },
});
