"use client"
import MaquetaProyecto from '@/components/proyectos/MaquetaProyecto'
import React from 'react'

const elementos = [
    { tipo: "mainTitle", texto: "TalentTrack" },
    {
      tipo: "subtitulo",
      texto:
        "Sistema de gestión del talento para empresas asesoradas por consultoras privadas",
    },
    {
      tipo: "descripcion",
      texto:
        "TalentTrack es una plataforma diseñada para que consultoras puedan hacer seguimiento del rendimiento del personal de múltiples empresas. Permite gestionar jerarquías, planificar evaluaciones, registrar responsabilidades y competencias, y visualizar el desempeño en distintos niveles.",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "appShowcase",
      data: {
        appImage: "/images/proyectos/talent-phone.webp",
        logoImage: "/images/proyectos/talent-logo.webp",
        appUrl: "https://talenttrack.app",
        bgColorLeft: "#3C82F6",
        bgColorRight: "#F5F5F5",
      },
    },
  
    { tipo: "divider", altura: 64 },
    {
      tipo: "brandTypography",
      titulo: "Una visión integral del talento",
      descripcion:
        "Desde el principio el objetivo fue construir una herramienta que se adaptara tanto a la estructura de cada empresa como a los procesos internos de la consultora. La clave fue permitir una gestión flexible pero rigurosa del rendimiento de las personas.",
    },
  
    { tipo: "divider", altura: 48 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/talenttrack1.webp",
        "/images/proyectos/talenttrack2.webp",
      ],
    },
    {
      tipo: "atributosMarca",
      subtitulo: "Valores de la Marca",
      titulos: ["Claridad", "Seguimiento", "Crecimiento"],
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "titulo",
      texto: "01. Análisis de requerimientos",
    },
    {
      tipo: "descripcion",
      texto:
        "Se trabajó en conjunto con la consultora para entender los flujos de evaluación del talento que implementaban con sus clientes. Se definieron etapas, responsables, jerarquías y distintos tipos de competencias según el tipo de rol.",
    },
    { tipo: "divider", altura: 32 },
    {
      tipo: "fuenteDestacada",
      titulos: ["Evaluaciones","Indicadores", "Roles"],
      subtitulos: ["Objetivos", "Competencias", "Responsabilidades"],
      imageUrl: "/images/proyectos/talent-ui.webp",
      colorFondo: "bg-blue-100",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "titulo",
      texto: "02. Diseño UX/UI",
    },
    {
      tipo: "descripcion",
      texto:
        "Se diseñó una experiencia centrada en claridad y simplicidad. El foco estuvo en que tanto los empleados como los consultores pudieran navegar fácilmente evaluaciones, jerarquías y resultados sin fricción.",
    },
    { tipo: "divider", altura: 28 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/talenttrack3.webp",
        "/images/proyectos/talenttrack4.webp",
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
        "TalentTrack fue desarrollado usando Next.js, MongoDB y Tailwind CSS. Se creó una arquitectura modular que permite escalar a muchas empresas, roles y jerarquías. La app corre en Vercel con enfoque full stack moderno.",
    },
    { tipo: "divider", altura: 20 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/talenttrack5.webp",
        "/images/proyectos/talenttrack6.webp",
      ],
    },
  
    { tipo: "divider", altura: 30 },
    {
      tipo: "brandTypography",
      titulo: "Funcionalidades clave",
      descripcion:
        "Definición de etapas y períodos de evaluación, Gestión jerárquica de roles y usuarios, Evaluaciones por competencias, indicadores y objetivos, Feedback y seguimiento por parte del supervisor, Dashboard con resultados individuales y por empresa.",
    },
  
    { tipo: "divider", altura: 20 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/talenttrack7.webp",
        "/images/proyectos/talenttrack8.webp",
      ],
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "tecnologias",
      items: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript", "Vercel"],
    },
  
    { tipo: "divider", altura: 64 },
    {
      tipo: "titulo",
      texto: "04. Aprendizajes",
    },
    {
      tipo: "descripcion",
      texto:
        "Durante el desarrollo del sistema, aprendimos mucho sobre cómo adaptarse a modelos organizativos complejos y necesidades de consultoría en tiempo real.",
    },
    {
      tipo: "tags",
      items: [
        "Modelo jerárquico flexible",
        "Roles dinámicos",
        "Evaluaciones personalizadas",
        "UX para usuarios no técnicos",
        "Análisis de rendimiento",
      ],
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "brandTypography",
      titulo: "Enfoque consultivo",
      descripcion:
        "El desarrollo se nutrió del feedback constante de la consultora y sus empresas clientes, permitiendo ajustes iterativos y mejoras basadas en la experiencia real de uso.",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "otrosProyectos",
      titulo: "Otros Proyectos",
      proyectos: [
        { titulo: "Circular Tech", link: "/proyectos/circular" },
        { titulo: "Conocete", link: "/proyectos/conocete" },
        { titulo: "E-commerce Dashboard", link: "/proyectos/ecommerce" },
      ],
    },
  ];

const Page = () => {
  return (
    <MaquetaProyecto
    elementos={elementos as any}
    titulo="TalentTrack"
    descripcion="Sistema de gestión del talento para empresas asesoradas por consultoras privadas"
  />
  )
}

export default Page