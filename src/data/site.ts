/**
 * Datos del negocio en un único lugar.
 * Editar este archivo actualiza toda la landing (header, hero, footer, SEO y formulario).
 */

export interface Service {
  name: string;
  price: string;
  duration: string;
  description: string;
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: "Barbería Imperial",
  shortName: "Imperial",
  tagline: "Barber Club · Est. 1998",
  description:
    "Barbería tradicional con cortes clásicos, afeitado a navaja y toalla caliente. Reserva tu cita en el centro de la ciudad.",
  url: "https://barberiaimperial.com",

  // Contacto
  phoneDisplay: "+52 55 1234 5678",
  phone: "+525512345678", // formato internacional sin espacios (tel: / WhatsApp)
  whatsapp: "525512345678",
  email: "hola@barberiaimperial.com",

  // Dirección (se usa también para el enlace de Google Maps)
  address: {
    street: "Calle Hidalgo 128",
    neighborhood: "Centro Histórico",
    city: "Ciudad de México",
    country: "México",
    zip: "06000",
  },

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },

  rating: { value: "4.9", count: 320 },
  years: "25+",
} as const;

/** Enlace universal de Google Maps (funciona en web y app). */
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.neighborhood}, ${site.address.city}`,
)}`;

/** Enlace de WhatsApp con mensaje precargado. */
export function whatsappUrl(message = "Hola, quiero reservar una cita en Barbería Imperial.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export const services: Service[] = [
  {
    name: "Corte Clásico",
    price: "$25",
    duration: "45 min",
    description: "Tijera y máquina, lavado y peinado con cera de acabado mate.",
  },
  {
    name: "Afeitado a Toalla Caliente",
    price: "$22",
    duration: "40 min",
    description: "Navaja recta, aceite pre-shave y bálsamo calmante.",
  },
  {
    name: "Arreglo de Barba",
    price: "$18",
    duration: "30 min",
    description: "Perfilado a navaja, recorte de precisión y aceite para barba.",
  },
  {
    name: "Combo Completo",
    price: "$40",
    duration: "75 min",
    description: "Corte, afeitado y barba. La experiencia completa de barbería.",
    featured: true,
  },
  {
    name: "Corte Infantil",
    price: "$18",
    duration: "30 min",
    description: "Paciencia, tijera y buen humor para los más pequeños.",
  },
  {
    name: "Camuflaje de Canas",
    price: "$30",
    duration: "60 min",
    description: "Tono natural sin amoníaco para un acabado discreto.",
  },
];

export const openingHours = [
  { days: "Martes – Viernes", hours: "10:00 – 20:00" },
  { days: "Sábado", hours: "09:00 – 18:00" },
  { days: "Domingo – Lunes", hours: "Cerrado" },
] as const;

export const highlights = [
  {
    icon: "scissors" as const,
    title: "Barberos experimentados",
    text: "Más de 25 años combinando técnica clásica y tendencia actual.",
  },
  {
    icon: "bottle" as const,
    title: "Productos premium",
    text: "Ceras, aceites y bálsamos de marcas profesionales, sin siliconas.",
  },
  {
    icon: "beer" as const,
    title: "Ambiente clásico y cerveza de cortesía",
    text: "Cuero, vinilo y ladrillo. Un respiro con cerveza fría incluida.",
  },
];
