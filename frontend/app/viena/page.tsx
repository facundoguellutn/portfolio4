"use client"
import MaquetaProyecto from '@/components/proyectos/MaquetaProyecto'
import React from 'react'


const elementos = [
    { tipo: "mainTitle", texto: "Viena Global" },
    {
      tipo: "subtitulo",
      texto: "Landing page para una inmobiliaria con visión moderna",
    },
    {
      tipo: "descripcion",
      texto:
        "Desarrollamos una landing page para Viena Global, una inmobiliaria de Córdoba, con el objetivo de renovar su imagen digital, destacar su profesionalismo y brindar una experiencia moderna, confiable y transparente a potenciales compradores.",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "appShowcase",
      data: {
        appImage: "/images/proyectos/viena-phone.webp",
        logoImage: "/images/proyectos/viena-logo.webp",
        appUrl: "https://vienaglobal.com",
        bgColorLeft: "#E4D3BA",
        bgColorRight: "#F5F5F5",
      },
    },
  
    { tipo: "divider", altura: 64 },
    {
      tipo: "brandTypography",
      titulo: "Modernización y confianza",
      descripcion:
        "Viena Global necesitaba una web que reflejara su nueva identidad visual y su compromiso con el acompañamiento profesional en la compra y venta de propiedades. El foco estuvo en transmitir cercanía, claridad y seguridad desde el primer scroll.",
    },
  
    { tipo: "divider", altura: 48 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/viena1.webp",
        "/images/proyectos/viena2.webp",
      ],
    },
    {
      tipo: "atributosMarca",
      subtitulo: "Identidad digital",
      titulos: ["Confiable", "Elegante", "Transparente"],
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "titulo",
      texto: "01. Objetivo del proyecto",
    },
    {
      tipo: "descripcion",
      texto:
        "El objetivo fue captar la atención de potenciales clientes desde el primer segundo, modernizar la imagen de la marca y reflejar todo el proceso de compra-venta de manera clara y visual. También se integró el acceso al portal de Zonaprop donde tienen cargadas todas sus propiedades.",
    },
    { tipo: "divider", altura: 32 },
    {
      tipo: "fuenteDestacada",
      titulos: ["Ventas", "Alquileres"],
      subtitulos: ["Zonaprop", "Confianza", "Experiencia"],
      imageUrl: "/images/proyectos/viena-ui.webp",
      colorFondo: "bg-yellow-100",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "titulo",
      texto: "02. Diseño UX/UI",
    },
    {
      tipo: "descripcion",
      texto:
        "Se diseñó una interfaz moderna, elegante y responsiva. Se utilizaron animaciones suaves, tipografías sobrias y colores cálidos para transmitir profesionalismo y transparencia. Cada sección fue pensada para facilitar el recorrido del usuario y generar confianza.",
    },
    { tipo: "divider", altura: 28 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/viena3.webp",
        "/images/proyectos/viena4.webp",
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
        "La landing fue desarrollada con tecnologías modernas, priorizando performance y buena experiencia en móviles. Se utilizó animación con Framer Motion y scroll controlado para guiar la narrativa visual. Todo fue desplegado de forma optimizada y con buena indexación SEO.",
    },
    { tipo: "divider", altura: 20 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/viena5.webp",
        "/images/proyectos/viena6.webp",
      ],
    },
  
    { tipo: "divider", altura: 30 },
    {
      tipo: "brandTypography",
      titulo: "Componentes destacados",
      descripcion:
        "✔ Hero animado con llamada a la acción\n✔ Sección de pasos del proceso de compra/venta\n✔ Destacado de valores de la inmobiliaria\n✔ Acceso directo al portal de Zonaprop\n✔ Responsive total y optimización para SEO",
    },
  
    { tipo: "divider", altura: 20 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/viena7.webp",
        "/images/proyectos/viena8.webp",
      ],
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "tecnologias",
      items: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    },
  
    { tipo: "divider", altura: 64 },
    {
      tipo: "titulo",
      texto: "04. Resultados y feedback",
    },
    {
      tipo: "descripcion",
      texto:
        "La nueva landing permitió a Viena Global dar un salto en su comunicación digital. Mejoró su imagen, generó mayor confianza en potenciales clientes y facilitó la conversión hacia el contacto o la consulta de propiedades.",
    },
    {
      tipo: "tags",
      items: [
        "Identidad visual",
        "Inmobiliaria moderna",
        "Zonaprop",
        "UX atractiva",
        "Confianza digital",
      ],
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "brandTypography",
      titulo: "Elegancia y claridad",
      descripcion:
        "El diseño simple pero efectivo ayudó a reflejar lo que la inmobiliaria representa: cercanía, experiencia y compromiso con el cliente.",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "otrosProyectos",
      titulo: "Otros Proyectos",
      proyectos: [
        { titulo: "People&Franq", link: "/proyectos/peopleandfranq" },
        { titulo: "TalentTrack", link: "/proyectos/talenttrack" },
        { titulo: "Circular Tech", link: "/proyectos/circular" },
      ],
    },
  ];
  

const Page = () => {
  return (
<MaquetaProyecto
    elementos={elementos as any}
    titulo="Vienna Global"
    descripcion="Landing page para la inmobiliaria Vienna Global"
  />  )
}

export default Page