/**
 * Catálogo de iconos SVG inline (estilo Lucide, trazo 1.6) + glifos de marca.
 * Se mantiene fuera del componente .astro para que el compilador de Astro
 * no tenga que hoistear datos y tipos desde el frontmatter.
 */

export const iconNames = [
  "clock",
  "scissors",
  "bottle",
  "beer",
  "map-pin",
  "phone",
  "arrow-right",
  "arrow-up-right",
  "check",
  "star",
  "menu",
  "close",
  "instagram",
  "facebook",
  "whatsapp",
] as const;

export type IconName = (typeof iconNames)[number];

type IconDefinition = {
  body: string;
  /** Los glifos de marca usan relleno en lugar de trazo. */
  filled?: boolean;
};

export const icons: Record<IconName, IconDefinition> = {
  clock: {
    body: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  },
  scissors: {
    body: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88"/><path d="M14.47 14.48 20 20"/><path d="M8.12 8.12 12 12"/>',
  },
  bottle: {
    body: '<path d="M9 2h6v3l1.5 2.5V20a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V7.5L9 5V2Z"/><path d="M8 13h8"/>',
  },
  beer: {
    body: '<path d="M17 11h1a3 3 0 0 1 0 6h-1"/><path d="M9 12v6"/><path d="M13 12v6"/><path d="M5 8h9a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a1 1 0 0 1 1-1Z"/><path d="M14 7.5c0-1.5 1-2 1-3.5 0 0-1.5.5-1.5 2s1 2.5 1 4"/>',
  },
  "map-pin": {
    body: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  },
  phone: {
    body: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>',
  },
  "arrow-right": {
    body: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  },
  "arrow-up-right": {
    body: '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
  },
  check: {
    body: '<path d="m20 6-11 11-5-5"/>',
  },
  star: {
    body: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2Z"/>',
    filled: true,
  },
  menu: {
    body: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
  },
  close: {
    body: '<path d="M6 6l12 12"/><path d="M18 6 6 18"/>',
  },
  instagram: {
    body: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>',
  },
  facebook: {
    body: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"/>',
  },
  whatsapp: {
    body: '<path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.05-.52-.1-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34m-5.42 7.4a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.89 9.89m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9 0-3.17-1.23-6.16-3.48-8.41Z"/>',
    filled: true,
  },
};
