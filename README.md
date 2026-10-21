# Barbería Imperial — Landing Page

Landing page de una barbería tradicional construida con **Astro 5** y **Tailwind CSS 4**.
Diseño vintage renovado, mobile-first, accesible y sin dependencias de UI externas.

---

## 1. Requisitos

- Node.js 20 o superior
- npm (o pnpm / yarn)

## 2. Puesta en marcha

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
npm run preview  # sirve /dist en local
```

## 3. Estructura

```
.
├── astro.config.mjs          # Astro + plugin de Tailwind 4 + sitemap
├── public/
│   ├── favicon.svg           # Monograma BI
│   ├── og.jpg                # Imagen Open Graph (1200×630)
│   └── robots.txt
└── src/
    ├── assets/               # Imágenes originales (optimizadas en build)
    │   ├── hero.jpg
    │   ├── interior.jpg
    │   └── shave.jpg
    ├── components/
    │   ├── Header.astro      # Nav fijo + menú móvil accesible
    │   ├── Hero.astro        # Hero a pantalla completa + CTAs
    │   ├── Services.astro    # Grid de 6 servicios
    │   ├── WhyUs.astro       # Diferenciación + composición de imágenes
    │   ├── Contact.astro     # Info práctica + formulario → WhatsApp
    │   ├── Footer.astro      # Enlaces, redes y legal
    │   └── Icon.astro        # Iconos SVG inline (Lucide-style)
    ├── data/
    │   └── site.ts           # ⭐ Todos los textos, precios y datos de contacto
    ├── layouts/
    │   └── Layout.astro      # <head>, SEO, JSON-LD, animaciones de scroll
    ├── lib/
    │   └── icons.ts          # Catálogo de paths SVG
    ├── pages/
    │   ├── index.astro
    │   └── privacidad.astro
    └── styles/
        └── global.css        # Tokens de diseño + clases base
```

### Editar contenido

Casi todo el contenido editable vive en **`src/data/site.ts`**:

- Nombre, teléfono, WhatsApp, email y dirección.
- Horarios y enlaces de redes sociales.
- Lista de servicios (nombre, precio, duración, descripción, destacado).
- Los 3 puntos de "Por qué elegirnos".

El número de WhatsApp se inyecta también en el formulario, así que **cambiar
`site.whatsapp` actualiza el botón de contacto y el envío del formulario**.

## 4. Decisiones de UI/UX

| Área | Implementación |
| --- | --- |
| Paleta | Carbón `#121212`, cuero `#2B1E1A`, dorado `#D4AF37`, marfil `#F5F5F0` |
| Tipografía | Playfair Display (títulos) + Inter (cuerpo), con `display=swap` |
| Contraste | Textos secundarios verificados ≥ 4.5:1 sobre fondo oscuro y claro |
| Ritmo | Secciones alternas oscuro → claro (servicios) → oscuro → tarjeta clara |
| CTA | "Reservar cita" repetido en header, hero y formulario |
| Microinteracciones | 150–300 ms, `hover` con elevación sutil, `focus-visible` dorado |
| Movimiento | `reveal` con IntersectionObserver, respeta `prefers-reduced-motion` |
| Responsive | Mobile-first, probado en 375 / 390 / 768 / 1024 / 1440 px |
| A11y | HTML semántico, skip link, `aria-expanded`, foco visible, labels reales |

### Reservas sin backend

El formulario valida con la API nativa (`checkValidity` + `reportValidity`) y
abre **WhatsApp** con el mensaje ya redactado:

```
Hola, quiero reservar una cita en Barbería Imperial.
Nombre: …
Teléfono: …
Servicio: …
Fecha deseada: jueves, 5 de noviembre
```

Para conectar un backend (Formspree, Resend, una API propia…), sustituye el
listener de `submit` en `Contact.astro` por un `fetch()` al endpoint.

## 5. Rendimiento

- `<Image />` de `astro:assets` genera WebP responsive con `srcset` y `sizes`.
- El hero se precarga (`loading="eager"`, `fetchpriority="high"`); el resto es lazy.
- CSS de Tailwind v4: solo se emite lo usado (≈ 70 KB sin minificar, ~12 KB gzip).
- JS propio mínimo y sin frameworks de cliente (solo 3 scripts pequeños).
- Fuentes con `preconnect` y `display=swap`.

## 6. Despliegue

Cualquier hosting estático funciona (el build es 100 % estático):

```bash
npm run build
```

| Plataforma | Configuración |
| --- | --- |
| **Vercel** | Framework: Astro · Build: `npm run build` · Output: `dist` |
| **Netlify** | Build: `npm run build` · Publish: `dist` |
| **Cloudflare Pages** | Build: `npm run build` · Output: `dist` |

Antes de publicar:

1. Cambia `site` en `astro.config.mjs` y `site.url` en `src/data/site.ts` por tu dominio.
2. Reemplaza las imágenes de `src/assets/` por fotos propias de la barbería.
3. Sustituye dirección, teléfono, horarios y redes sociales en `src/data/site.ts`.
4. Regenera `public/og.jpg` si cambias la foto principal.
5. Ajusta `public/robots.txt` si usas otro dominio.

## 7. Imágenes

Las fotos de demostración provienen de [Unsplash](https://unsplash.com) y se usan
como *placeholders*. Sustitúyelas por material propio antes de lanzar el sitio.

## 8. Créditos

Generado con Astro + Tailwind, apoyado en la skill **UI/UX Pro Max**
(pairing "Classic Elegant": Playfair Display + Inter) y en la checklist de
pre-entrega (iconos SVG, foco visible, contraste, reduced-motion, responsive).
