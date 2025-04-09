"use client"
import React from 'react'
import MaquetaProyecto from '@/components/proyectos/MaquetaProyecto'

const elementos = [
    { tipo: "mainTitle", texto: "Fidooo" },
    {
      tipo: "subtitulo",
      texto: "Landing page para una consultora de software moderna",
    },
    {
      tipo: "descripcion",
      texto:
        "Fidooo es una consultora de software boliviana que necesitaba una landing page moderna y dinámica para comunicar sus servicios de forma clara, atractiva y tecnológica. El objetivo fue reflejar su identidad como empresa joven, ágil y experta en desarrollo digital.",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "appShowcase",
      data: {
        appImage: "/images/landing/fido.webp",
        logoImage: "/images/proyectos/fido/logo.webp",
        appUrl: "https://fidooo.com/",
        bgColorLeft: "#1CBFFF",
        bgColorRight: "#F8FAFC",
      },
    },
  
    { tipo: "divider", altura: 90 },
    {
      tipo: "brandTypography",
      titulo: "Tecnología con personalidad",
      descripcion:
        "La idea fue crear una landing fresca, con movimiento y personalidad propia. Se trabajaron animaciones suaves, secciones diferenciadas y componentes que mostraran el dinamismo y profesionalismo de Fidooo desde el primer momento.",
    },
  
    { tipo: "divider", altura: 80 },
    {
      tipo: "atributosMarca",
      subtitulo: "Identidad visual",
      titulos: ["Moderna", "Tecnológica", "Ágil"],
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "titulo",
      texto: "01. Objetivo del proyecto",
    },
    {
      tipo: "descripcion",
      texto:
        "La landing debía mostrar de forma atractiva los servicios que brinda Fidooo, generar confianza con potenciales clientes y destacar su enfoque dinámico y profesional. Todo esto con un diseño que se sintiera innovador, visual y moderno.",
    },
    { tipo: "divider", altura: 32 },
    {
      tipo: "fuenteDestacada",
      titulos: ["Consultoría", "Desarrollo a Medida"],
      subtitulos: ["Software", "Estrategia", "Experiencia"],
      imageUrl: "/images/proyectos/fido/img1.webp",
      colorFondo: "bg-slate-100",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "titulo",
      texto: "02. Diseño UX/UI",
    },
    {
      tipo: "descripcion",
      texto:
        "Se apostó por un diseño audaz, con contrastes oscuros y tipografías modernas. Se utilizaron animaciones con Framer Motion para transmitir energía y fluidez. Cada sección fue pensada para contar una historia clara y directa sobre qué hace Fidooo y por qué elegirlos.",
    },
    { tipo: "divider", altura: 28 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/fido/img2.webp",
        "/images/proyectos/fido/img3.webp",
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
        "La landing fue construida con Next.js y Tailwind CSS, haciendo foco en performance, animaciones fluidas y estructura escalable. Se priorizó un diseño responsive, una navegación clara y efectos que refuercen la imagen tecnológica.",
    },
    { tipo: "divider", altura: 20 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/fido/img4.webp",
        "/images/proyectos/fido/img5.webp",
      ],
    },
  
    { tipo: "divider", altura: 100 },
    {
      tipo: "brandTypography",
      titulo: "Componentes destacados",
      descripcion:
        "✔ Hero animado con scroll\n✔ Sección de servicios con íconos y transiciones\n✔ Experiencia visual moderna y limpia\n✔ Efectos dinámicos para reforzar la narrativa\n✔ CTA clara al contacto y propuesta de valor",
    },
  
    { tipo: "divider", altura: 80 },
      {
      tipo: "titulo",
      texto: "04. Impacto y resultado",
    },
    {
      tipo: "descripcion",
      texto:
        "La nueva landing logró consolidar la presencia digital de Fidooo, proyectando una imagen mucho más moderna y profesional. La estructura clara de servicios y el diseño visual aumentaron el interés y la interacción de potenciales clientes.",
    },
    {
      tipo: "tags",
      items: [
        "Consultora de software",
        "Diseño moderno",
        "Next.js landing",
        "Animaciones con propósito",
        "Servicios tecnológicos",
      ],
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "brandTypography",
      titulo: "Diseño con movimiento",
      descripcion:
        "Cada sección fue pensada para reflejar lo que es Fidooo: una empresa ágil, profesional, joven y tecnológica, con un estilo visual que lo demuestra.",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "otrosProyectos",
      titulo: "Otros Proyectos",
      proyectos: [
        { titulo: "Viena Global", link: "/proyectos/viena" },
        { titulo: "TalentTrack", link: "/proyectos/talenttrack" },
        { titulo: "People&Franq", link: "/proyectos/peopleandfranq" },
      ],
    },
  ];
  

const Page = () => {
  return (
    <MaquetaProyecto
    elementos={elementos as any}
    titulo="Fidooo"
    descripcion="Landing page para la consultora de software Fidooo"
  />
  )
}

export default Page