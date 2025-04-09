"use client"
import React from 'react'
import MaquetaProyecto from '@/components/proyectos/MaquetaProyecto'

const elementos = [
    { tipo: "mainTitle", texto: "Conocete" },
    {
      tipo: "subtitulo",
      texto: "Tests de personalidad para cursos de liderazgo universitario",
    },
    {
      tipo: "descripcion",
      texto:
        "Conocete es una app web que permite realizar tests de personalidad de forma privada y organizada en grupos. Fue desarrollada para un profesor de la Universidad Católica de Córdoba, como parte de la materia de Liderazgo, con el fin de que los estudiantes puedan conocer su perfil y recibir recomendaciones personalizadas.",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "appShowcase",
      data: {
        appImage: "/images/landing/conocete.webp",
        logoImage: "/images/proyectos/conocete/logo.webp",
        appUrl: "https://conocete.app",
        bgColorLeft: "#7EA8D9",
        bgColorRight: "#F5F5F5",
      },
    },
  
    { tipo: "divider", altura: 90 },
    {
      tipo: "brandTypography",
      titulo: "Autoconocimiento como base del liderazgo",
      descripcion:
        "El objetivo principal fue brindar a los estudiantes una herramienta donde pudieran autoevaluarse en distintos aspectos, generar su propio perfil y fomentar el crecimiento personal y profesional.",
    },
  
    { tipo: "divider", altura: 80 },
    {
      tipo: "atributosMarca",
      subtitulo: "Valores de la Plataforma",
      titulos: ["Reflexión", "Privacidad", "Desarrollo Personal"],
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "titulo",
      texto: "01. Análisis de requerimientos",
    },
    {
      tipo: "descripcion",
      texto:
        "La aplicación debía permitir la creación de grupos por parte de los profesores o gestores, que luego definían las evaluaciones disponibles. Los tests podían abordar habilidades como liderazgo, empatía, comunicación, responsabilidad, entre otras.",
    },
    { tipo: "divider", altura: 32 },
    {
      tipo: "fuenteDestacada",
      titulos: ["Liderazgo", "Empatía", "Comunicación"],
      subtitulos: ["Evaluación", "Autoanálisis", "Perfil Personal"],
      imageUrl: "/images/proyectos/conocete/img1.webp",
      colorFondo: "bg-violet-100",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "titulo",
      texto: "02. Diseño UX/UI",
    },
    {
      tipo: "descripcion",
      texto:
        "Se diseñó una experiencia clara y accesible, donde cada estudiante pudiera navegar las evaluaciones sin distracciones y luego acceder a resultados comprensibles, con recomendaciones y descripciones de su perfil.",
    },
    { tipo: "divider", altura: 28 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/conocete/img2.webp",
        "/images/proyectos/conocete/img3.webp",
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
        "La aplicación fue desarrollada con Next.js y Firebase (Firestore) como backend serverless. Se implementaron diferentes tipos de tests (sí/no, escalas, elecciones múltiples) y una lógica de cálculo de resultados según el tipo de evaluación.",
    },
    { tipo: "divider", altura: 20 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/conocete/img4.webp",
        "/images/proyectos/conocete/img1.webp",
      ],
    },
  
    { tipo: "divider", altura: 90 },
    {
      tipo: "brandTypography",
      titulo: "Funcionalidades clave",
      descripcion:
        "Creación de grupos y evaluaciones por gestor, Diversidad de tipos de test (sí/no, escala, opciones múltiples), Resultados personalizados y recomendaciones, Perfiles visuales con insights sobre el estilo de liderazgo, Visualización privada de resultados.",
    },
    { tipo: "divider", altura: 80 },
    {
      tipo: "tecnologias",
      items: ["Next.js", "Firebase", "Firestore", "Tailwind CSS", "TypeScript"],
    },
  
    { tipo: "divider", altura: 64 },
    {
      tipo: "titulo",
      texto: "04. Aprendizajes",
    },
    {
      tipo: "descripcion",
      texto:
        "Este proyecto fue una oportunidad para profundizar en cómo hacer aplicaciones educativas centradas en el usuario. El diseño de tests variados y el cálculo de perfiles personalizados planteó desafíos interesantes en UX y lógica de negocio.",
    },
    {
      tipo: "tags",
      items: [
        "Evaluaciones personalizadas",
        "Lógica de tests complejos",
        "UX educativa",
        "Autoconocimiento",
        "Firebase serverless",
      ],
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "brandTypography",
      titulo: "Una herramienta para crecer",
      descripcion:
        "Más que una simple app de tests, Conocete se convirtió en un recurso valioso para estudiantes que buscan conocer su forma de liderar, comunicarse y desarrollarse a nivel personal y profesional.",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "otrosProyectos",
      titulo: "Otros Proyectos",
      proyectos: [
        { titulo: "TalentTrack", link: "/talenttrack" },
        { titulo: "Circular Tech", link: "/circular" },
        { titulo: "Portfolio personal", link: "/portfolio" },
      ],
    },
  ];
  

const Page = () => {
  return (
    <MaquetaProyecto
    elementos={elementos as any}
    titulo="Conocete"
    descripcion="Plataforma de tests de personalidad"
  />
  )
}

export default Page