"use client";
import MaquetaProyecto from "@/components/proyectos/MaquetaProyecto";
import React from "react";
const elementos = [
  { tipo: "mainTitle", texto: "Circular Tech" },
  {
    tipo: "subtitulo",
    texto:
      "Software de gestión de envíos y órdenes para empresas de indumentaria",
  },
  {
    tipo: "descripcion",
    texto:
      "Circular Tech es una plataforma pensada para optimizar la operación logística de marcas del rubro de la indumentaria. Desarrollada con el objetivo de adaptarse a cualquier empresa del sector, ya está siendo utilizada por marcas reconocidas como Rotunda.",
  },
  { tipo: "divider", altura: 20 },
  {
    tipo: "appShowcase",
    data: {
      appImage: "/images/landing/circular.webp",
      logoImage: "/images/proyectos/circular/logo.webp",
      appUrl: "https://www.thecirculartech.com/",
      bgColorLeft: "#2E3B51",
      bgColorRight: "#B3B74F",
      showLink: true,
    },
  },

  { tipo: "divider", altura: 80 },
  {
    tipo: "brandTypography",
    titulo: "Escucha activa",
    descripcion:
      "Desde el primer momento, se trabajó de cerca con los usuarios potenciales para entender sus dolores y necesidades operativas, especialmente en relación a cómo manejan los productos, proveedores y clientes.",
  },
  { tipo: "divider", altura: 80 },
  {
    tipo: "atributosMarca",
    subtitulo: "Valores de la Marca",
    titulos: ["Flexibilidad", "Escalabilidad", "Precisión"],
  },
  { tipo: "divider", altura: 32 },

  {
    tipo: "titulo",
    texto: "01. Análisis de requerimientos",
  },
  {
    tipo: "descripcion",
    texto:
      "El proyecto nació con la necesidad de crear una plataforma donde las empresas pudieran cargar productos con toda su información y luego gestionar órdenes y envíos. El objetivo principal era lograr una herramienta completa y específica para el modelo de negocio.",
  },
  { tipo: "divider", altura: 32 },
  {
    tipo: "fuenteDestacada",
    titulos: ["Ordenes", "Productos Envíos"],
    subtitulos: ["Colores", "Materiales", "Telas"],
    imageUrl: "/images/proyectos/circular/img4.webp",
    colorFondo: "bg-indigo-100",
  },

  { tipo: "divider", altura: 32 },
  {
    tipo: "titulo",
    texto: "02. Diseño UX/UI",
  },
  {
    tipo: "descripcion",
    texto:
      "Se realizó un diseño integral en Figma. Se definió la identidad visual de la marca, un sistema de diseño adaptable y un flujo de usuario que abarcara desde la carga de productos hasta la consulta de reportes.",
  },
  { tipo: "divider", altura: 28 },
  {
    tipo: "imagenes",
    urls: [
      "/images/proyectos/circular/img5.webp",
      "/images/proyectos/circular/img6.webp",
    ],
  },

  { tipo: "divider", altura: 48 },

  {
    tipo: "titulo",
    texto: "03. Desarrollo",
  },
  {
    tipo: "descripcion",
    texto:
      "El desarrollo se hizo en Next.js 14 utilizando MongoDB como base de datos, Tailwind para los estilos y Framer Motion para animaciones. El sistema fue creciendo funcionalidad por funcionalidad.",
  },
  { tipo: "divider", altura: 20 },

  {
    tipo: "imagenes",
    urls: [
      "/images/proyectos/circular/img3.webp",
      "/images/proyectos/circular/img2.webp",
    ],
  },
  { tipo: "divider", altura: 80 },
  {
    tipo: "brandTypography",
    titulo: "Funcionalidades clave",
    descripcion:
      "Envío de invitaciones por email, Dashboard con métricas, Reportes en Excel de órdenes, productos y variantes, Subida y edición de imágenes para proveedores, Gestión por cuentas y usuarios",
  },
  { tipo: "divider", altura: 80 },
  {
    tipo: "imagenes",
    urls: [
      "/images/proyectos/circular/img7.webp",
      "/images/proyectos/circular/img8.webp",
    ],
  },
  { tipo: "divider", altura: 32 },

  {
    tipo: "tecnologias",
    items: ["Next.js", "MongoDB", "Tailwind CSS", "Framer Motion", "Figma"],
  },
  { tipo: "divider", altura: 64 },
  {
    tipo: "titulo",
    texto: "04. Aprendizajes",
  },
  {
    tipo: "descripcion",
    texto:
      "Durante el proceso de desarrollo y validación surgieron muchos aprendizajes. Algunos de los más importantes fueron:",
  },
  {
    tipo: "tags",
    items: [
      "Comunicación con usuarios",
      "Flexibilidad de datos",
      "Modelo de negocio",
      "Arquitectura escalable",
      "Iteración continua",
    ],
  },
  { tipo: "divider", altura: 60 },

  {
    tipo: "brandTypography",
    titulo: "Adaptarse es clave",
    descripcion:
      "El sistema fue evolucionando no solo en funcionalidad sino también en cómo se estructuraban los datos para permitir mayor adaptabilidad, lo cual es clave cuando se trabaja con distintas empresas del mismo rubro.",
  },
  { tipo: "divider", altura: 60 },
  {
    tipo: "otrosProyectos",
    titulo: "Otros Proyectos",
    proyectos: [
      { titulo: "Conocete", link: "/conocete" },
      { titulo: "People&Franq", link: "/peopleandfranq" },
      { titulo: "Portfolio personal", link: "/portfolio" },
    ],
  },
];

const Page = () => {
  return (
    <MaquetaProyecto
      elementos={elementos as any}
      titulo="Circular Tech"
      descripcion="Software de gestión de envíos y órdenes para empresas de indumentaria"
    />
  );
};

export default Page;
