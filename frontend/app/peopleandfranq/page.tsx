"use client"
import MaquetaProyecto from '@/components/proyectos/MaquetaProyecto'
import React from 'react'

const elementos = [
    { tipo: "mainTitle", texto: "People&Franq" },
    {
      tipo: "subtitulo",
      texto: "Software de gestión de RRHH para franquicias asesoradas",
    },
    {
      tipo: "descripcion",
      texto:
        "People&Franq fue mi primer proyecto profesional. Lo desarrollé como parte de mi práctica supervisada para obtener el título de Ingeniero en Sistemas de Información. El objetivo fue crear un software de gestión de recursos humanos específico para una consultora de franquicias, permitiendo definir plantillas de evaluación, aplicarlas a sus franquiciados y realizar un seguimiento continuo del desempeño.",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "appShowcase",
      data: {
        appImage: "/images/proyectos/people-phone.webp",
        logoImage: "/images/proyectos/people-logo.webp",
        appUrl: "https://peopleandfranq.app",
        bgColorLeft: "#0C6B58",
        bgColorRight: "#F3F4F6",
      },
    },
  
    { tipo: "divider", altura: 64 },
    {
      tipo: "brandTypography",
      titulo: "Un primer proyecto con impacto real",
      descripcion:
        "People&Franq fue más que un desarrollo técnico: fue mi primer contacto real con clientes, deadlines, validación de funcionalidades y pruebas en producción. Aprendí a hablar con usuarios, entender sus problemas y transformarlos en soluciones concretas.",
    },
  
    { tipo: "divider", altura: 48 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/people1.webp",
        "/images/proyectos/people2.webp",
      ],
    },
    {
      tipo: "atributosMarca",
      subtitulo: "Pilares del sistema",
      titulos: ["Seguimiento", "Estándares", "Estrategia"],
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "titulo",
      texto: "01. Análisis de requerimientos",
    },
    {
      tipo: "descripcion",
      texto:
        "El proyecto comenzó con una etapa profunda de entrevistas con la consultora. La necesidad principal era tener una plataforma donde pudieran diseñar plantillas de evaluación reutilizables, aplicarlas a sus clientes y obtener datos claros para orientar su asesoramiento.",
    },
    { tipo: "divider", altura: 32 },
    {
      tipo: "fuenteDestacada",
      titulos: ["Plantillas", "Evaluaciones"],
      subtitulos: ["Feedback", "Seguimiento", "Desempeño"],
      imageUrl: "/images/proyectos/people-ui.webp",
      colorFondo: "bg-emerald-100",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "titulo",
      texto: "02. Diseño UX/UI",
    },
    {
      tipo: "descripcion",
      texto:
        "Diseñé una interfaz simple e intuitiva para que tanto la consultora como sus clientes pudieran usar la app sin fricciones. El foco estuvo en facilitar la navegación entre evaluaciones, resultados y seguimiento.",
    },
    { tipo: "divider", altura: 28 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/people3.webp",
        "/images/proyectos/people4.webp",
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
        "La app fue desarrollada con React para el frontend, Express.js como servidor y MongoDB para los datos. Implementé funcionalidades como creación de plantillas, evaluaciones individuales y grupales, seguimiento y visualización de resultados.",
    },
    { tipo: "divider", altura: 20 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/people5.webp",
        "/images/proyectos/people6.webp",
      ],
    },
  
    { tipo: "divider", altura: 30 },
    {
      tipo: "brandTypography",
      titulo: "Funcionalidades clave",
      descripcion:
        "✔ Creación de plantillas personalizadas\n✔ Asignación de evaluaciones por cliente\n✔ Visualización de resultados individuales o globales\n✔ Informe de seguimiento\n✔ Accesos diferenciados para consultora y clientes",
    },
  
    { tipo: "divider", altura: 20 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/people7.webp",
        "/images/proyectos/people8.webp",
      ],
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "tecnologias",
      items: ["React", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
    },
  
    { tipo: "divider", altura: 64 },
    {
      tipo: "titulo",
      texto: "04. Aprendizajes",
    },
    {
      tipo: "descripcion",
      texto:
        "People&Franq fue mi escuela práctica. Aprendí cómo encarar un proyecto desde cero, hablar con clientes, documentar, diseñar, programar, testear, entregar y dar soporte. También a manejar tiempos, prioridades y entregas reales.",
    },
    {
      tipo: "tags",
      items: [
        "Relación con clientes",
        "Diseño desde cero",
        "Pruebas reales",
        "Deadlines reales",
        "Despliegue y mantenimiento",
      ],
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "brandTypography",
      titulo: "Fundación para lo que vino después",
      descripcion:
        "Este proyecto me dio la base para seguir creciendo como desarrollador. Aprendí a construir software robusto y flexible, algo que sigo aplicando en cada producto que diseño y desarrollo hoy.",
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "otrosProyectos",
      titulo: "Otros Proyectos",
      proyectos: [
        { titulo: "TalentTrack", link: "/proyectos/talenttrack" },
        { titulo: "Circular Tech", link: "/proyectos/circular" },
        { titulo: "Conocete", link: "/proyectos/conocete" },
      ],
    },
  ];
  

const Page = () => {
  return (
    <MaquetaProyecto
    elementos={elementos as any}
    titulo="People and Franq"
    descripcion="Plataforma de gestión de talento para franquicias"
  />
  )
}

export default Page