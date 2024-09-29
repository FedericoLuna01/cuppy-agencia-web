import { Analytics, Instagram, Stars, WhatsApp } from "@/components/icons";
import { Layers, Mail, MessagesSquare, MonitorSmartphone, Server } from "lucide-react";

export const data = {
  title: "Cuppy agencia web",
  description: "Cuppy Agencia Web es una agencia especializada en diseño y desarrollo de sitios web modernos y optimizados. Ofrecemos soluciones personalizadas para empresas y emprendedores, enfocadas en mejorar la presencia digital, aumentar las conversiones y potenciar tu marca online. Contáctanos para crear tu página web profesional.",
  name: "Cuppy",
  navbar: {
    links: [
      "Inicio", "Que ofrecemos", "Acerca", "Servicios", "Proyectos", "Contacto"
    ],
  },
  projects: [
    {
      href: "https://zavallacomuna.com",
      image: "/project-comuna.webp",
    },
    {
      href: "https://www.criptokuz.com/",
      image: "/project-criptokuz.webp",
    },
    {
      href: "https://dronealo.com.ar/",
      image: "/project-dronealo.webp",
    },
    {
      href: "https://page-template-1.vercel.app/",
      image: "/project-idk.webp",
    },
    {
      href: "https://gestoriamaxitramit.com.ar/",
      image: "/project-maxitramit.webp",
    },
    {
      href: "https://realstate-sanity.vercel.app/",
      image: "/project-realstate.webp",
    },
  ],
  socials: [
    {
      href: "https://www.instagram.com/cuppyagenciaweb/",
      icon: Instagram,
      label: "@cuppyagenciaweb",
    },
    {
      href: "https://wa.me/543413125385?text=Hola!%20queria%20hacer%20una%20consulta%20sobre%20una%20pagina%20web",
      icon: WhatsApp,
      label: "+54 341 312 5385"
    },
    {
      href: "mailto:cuppyagenciaweb@gmail.com",
      icon: Mail,
      label: "cuppyagenciaweb@gmail.com",
    },
  ],
  services: [
    {
      icon: Stars,
      title: "Flexible",
      desc: "Nos adaptamos a tus necesidades y requerimientos."
    },
    {
      icon: Layers,
      title: "Personalización",
      desc: "Diseñamos tu sitio web con el estilo que diferencia a tu marca."
    },
    {
      icon: Analytics,
      title: "Estadísticas",
      desc: "Acceso a las métricas de tu página web a través de Google Analytics."
    },
    {
      icon: Server,
      title: "Hosting",
      desc: "Alojamos tu página web para que esté 24/7 activa."
    },
    {
      icon: MonitorSmartphone,
      title: "Adaptación",
      desc: "Hacemos que tu sitio web se adapte a cualquier dispositivo."
    },
    {
      icon: MessagesSquare,
      title: "Soporte",
      desc: "Te brindamos soporte técnico para que tu sitio web esté siempre activo."
    }
  ],
  pricing: [
    {
      title: "Página web compleja",
      description: "Perfecto para empresas o proyectos que necesitan mostrar mucha información y funcionalidades",
      features: [
        "Diseño único a medida",
        "Las secciones que necesites",
        "Las vistas que necesites",
        "Formulario de contacto",
        "Botón de WhatsApp",
        "Estadísticas de tu web",
      ]
    },
    {
      title: "Landing page",
      description: "For individuals and organizations who want to try our system",
      features: [
        "Diseño único a medida",
        "Hasta 6 secciones",
        "Una vista",
        "Formulario de contacto",
        "Botón de WhatsApp",
        "Estadísticas de tu web",
      ]
    },
    {
      title: "Página web autogestionable",
      description: "For individuals and organizations who want to try our system",
      features: [
        "Diseño único a medida",
        "Las secciones que necesites",
        "Las vistas que necesites",
        "Formulario de contacto",
        "Botón de WhatsApp",
        "Estadísticas de tu web",
        "Panel de administración",
      ]
    },
  ]
}