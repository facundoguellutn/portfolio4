"use client"
import MaquetaProyecto from '@/components/proyectos/MaquetaProyecto'
import React from 'react'

const elementos = [
    { tipo: "mainTitle", texto: "Aluam" },
    {
      tipo: "subtitulo",
      texto: "Landing page para una fábrica de aberturas líder en Argentina",
    },
    {
      tipo: "descripcion",
      texto:
        "Aluam es una fábrica de aberturas de aluminio con trayectoria en el país. Desarrollamos una landing page pensada para captar la atención de potenciales compradores, mostrando su catálogo completo de productos, proyectos realizados y contenido audiovisual de gran impacto visual.",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "appShowcase",
      data: {
        appImage: "/images/landing/aluam.webp",
        logoImage: "/images/proyectos/aluam/logo.webp",
        appUrl: "https://aluamsl.com/",
        bgColorLeft: "#EE8E70",
        bgColorRight: "#F8F9FA",
        showLink: true,
      },
    },
  
    { tipo: "divider", altura: 90 },
    {
      tipo: "brandTypography",
      titulo: "Calidad, trayectoria y presencia",
      descripcion:
        "La web fue pensada para comunicar los valores de Aluam: experiencia, profesionalismo, compromiso con el cliente y calidad de materiales. Era clave brindar una navegación clara, con foco tanto en productos como en el valor de los proyectos ya realizados.",
    },
  
    { tipo: "divider", altura: 80 },
    {
      tipo: "atributosMarca",
      subtitulo: "Valores de Aluam",
      titulos: ["Precisión", "Experiencia", "Calidad"],
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "titulo",
      texto: "01. Objetivo del proyecto",
    },
    {
      tipo: "descripcion",
      texto:
        "La landing debía servir como vidriera digital para la fábrica. Se trabajó en destacar el catálogo completo de productos, brindar información técnica clara, mostrar proyectos anteriores e incluir grabaciones con drones de obras importantes para reflejar la escala y profesionalismo de Aluam.",
    },
    { tipo: "divider", altura: 32 },
    {
      tipo: "fuenteDestacada",
      titulos: ["Catálogo", "Proyectos", "Técnica"],
      subtitulos: ["Materiales", "Diseño", "Obras"],
      imageUrl: "/images/proyectos/aluam/img1.webp",
      colorFondo: "bg-orange-100",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "titulo",
      texto: "02. Diseño UX/UI",
    },
    {
      tipo: "descripcion",
      texto:
        "Se diseñó una interfaz visualmente limpia, enfocada en las imágenes y materiales. Se organizó el contenido en secciones por categoría de producto, cada una con sus fichas técnicas. Se destacaron las obras con una galería de fotos y se incluyeron videos de drones como parte clave del storytelling visual.",
    },
    { tipo: "divider", altura: 28 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/aluam/img2.webp",
        "/images/proyectos/aluam/img3.webp",
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
        "La landing se desarrolló con Next.js y Tailwind CSS. Se incorporaron componentes visuales dinámicos, como sliders, galerías interactivas y reproductores de video embebido. Además, se optimizó para performance y navegación desde dispositivos móviles.",
    },
    { tipo: "divider", altura: 20 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/aluam/img4.webp",
        "/images/proyectos/aluam/img5.webp",
      ],
    },
  
    { tipo: "divider", altura: 90 },
    {
      tipo: "brandTypography",
      titulo: "Secciones clave",
      descripcion:
        "✔ Catálogo dividido por categoría (ventanas, puertas, frentes, etc.)\n✔ Fichas técnicas descargables\n✔ Galería de proyectos realizados\n✔ Videos de obras filmadas con drones\n✔ Formulario de contacto con CTA claro",
    },  
    { tipo: "divider", altura: 80 },
    {
      tipo: "tecnologias",
      items: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    },
  
    { tipo: "divider", altura: 64 },
    {
      tipo: "titulo",
      texto: "04. Resultado y percepción",
    },
    {
      tipo: "descripcion",
      texto:
        "La nueva web permitió a Aluam presentar su marca de forma profesional y moderna. Los clientes pueden explorar fácilmente el catálogo, conocer la calidad de las obras anteriores y obtener confianza desde el primer contacto visual.",
    },
    {
      tipo: "tags",
      items: [
        "Industria Argentina",
        "Landing visual",
        "Catálogo técnico",
        "Obras con drones",
        "Confianza y calidad",
      ],
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "brandTypography",
      titulo: "Confianza desde el diseño",
      descripcion:
        "Cada sección de la landing fue pensada para mostrar lo mejor de Aluam: su capacidad, sus productos, su experiencia y su enfoque en el cliente. Una web sólida y directa, como su marca.",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "otrosProyectos",
      titulo: "Otros Proyectos",
      proyectos: [
        { titulo: "Fidooo", link: "/fido" },
        { titulo: "Viena Global", link: "/viena" },
        { titulo: "TalentTrack", link: "/talenttrack" },
      ],
    },
  ];
  

const page = () => {
  return (
    <MaquetaProyecto
    elementos={elementos as any}
    titulo="Aluam"
    descripcion="Landing page para la empresa Aluam"
  />
  )
}

export default page