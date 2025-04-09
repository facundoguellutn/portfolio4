"use client"
import React from 'react'
import MaquetaProyecto from '@/components/proyectos/MaquetaProyecto'

const elementos = [
    { tipo: "mainTitle", texto: "Portfolio Personal" },
    {
      tipo: "subtitulo",
      texto: "Un recorrido visual y técnico por mi evolución como desarrollador",
    },
    {
      tipo: "descripcion",
      texto:
        "Este proyecto es mi carta de presentación. Desde mis primeros pasos en desarrollo web, el portfolio fue una forma de explorar, expresarme y mostrar lo que sé hacer. Con el tiempo fue mutando, y hoy representa un equilibrio entre lo técnico, lo creativo y lo personal.",
    },
  
    { tipo: "divider", altura: 32 },
    {tipo:"boton", texto: "Ver mi primer portfolio", link: "https://portfolio-guellfacundo.vercel.app/"},
  
    { tipo: "divider", altura: 90 },
    {
      tipo: "brandTypography",
      titulo: "Mi historia en código",
      descripcion:
        "Este portfolio no es sólo un proyecto más, es una línea de tiempo de cómo fui creciendo como profesional. Cada versión cuenta algo distinto de mí: desde mis ganas de jugar, hasta mi foco en lo funcional y ahora, mi búsqueda de identidad.",
    },
  
    { tipo: "divider", altura: 80 },
    {
      tipo: "atributosMarca",
      subtitulo: "Etapas del portfolio",
      titulos: ["Creatividad","Identidad"],
    },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "titulo",
      texto: "01. Primera versión",
    },
    {
      tipo: "descripcion",
      texto:
        "Fue mi primer experimento personal. Una landing con animaciones, colores, efectos por todos lados y mucha personalidad. No tenía miedo de mostrar mi estilo, de probar cosas nuevas, y eso lo hacía único. Mostraba todo de forma muy directa, con transiciones locas y secciones inesperadas.",
    },
  
    { tipo: "divider", altura: 28 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/portfolio/img6.webp",
        "/images/proyectos/portfolio/img1.webp",
      ],
    },
  
    { tipo: "divider", altura: 48 },
    {
      tipo: "titulo",
      texto: "02. Segunda versión",
    },
    {
      tipo: "descripcion",
      texto:
        "En esta etapa busqué algo más sobrio y profesional. El diseño se acercaba más a una web app: sidebar, navegación clara, sin muchas animaciones. El foco estaba en la claridad, el contenido, la organización. Era funcional, limpio, con un perfil más técnico.",
    },
    { tipo: "divider", altura: 28 },
    {
      tipo: "imagenes",
      urls: [
        "/images/proyectos/portfolio/img3.webp",
        "/images/proyectos/portfolio/img4.webp",
      ],
    },
    { tipo: "divider", altura: 48 },

    {tipo:"boton", texto: "Ver mi segundo portfolio", link: "https://facundoguell.vercel.app/"},

    { tipo: "divider", altura: 48 },
    {
      tipo: "titulo",
      texto: "03. Versión actual",
    },
    {
      tipo: "descripcion",
      texto:
        "La versión que estás viendo ahora es la síntesis de todo lo anterior. Retomo lo creativo, lo lúdico y lo visual de la primera versión, pero con la estructura y solidez de la segunda. Una experiencia que invita a explorar y que al mismo tiempo comunica profesionalismo.",
    },
  
    { tipo: "divider", altura: 100 },
    {
      tipo: "brandTypography",
      titulo: "Qué busqué lograr",
      descripcion:
        "✔ Mostrar mi personalidad como desarrollador\n✔ Equilibrar lo visual y lo funcional\n✔ Invitar a descubrir mi trabajo como algo más que un listado\n✔ Crear una experiencia que represente quién soy hoy",
    },
  
    { tipo: "divider", altura: 90 },
  
    { tipo: "divider", altura: 32 },
    {
      tipo: "tecnologias",
      items: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
    },
  
    { tipo: "divider", altura: 64 },
    {
      tipo: "titulo",
      texto: "Lo que aprendí en el camino",
    },
    {
      tipo: "descripcion",
      texto:
        "Más allá de las tecnologías, este proyecto me ayudó a pensar cómo quiero presentarme, cómo evolucioné, y qué valor quiero transmitir. Aprendí sobre diseño, storytelling, feedback visual y sobre todo, sobre mí mismo.",
    },
    {
      tipo: "tags",
      items: [
        "Exploración creativa",
        "Diseño iterativo",
        "Storytelling visual",
        "Identidad profesional",
        "Evolución personal",
      ],
    },
  
    { tipo: "divider", altura: 100 },
    {
      tipo: "brandTypography",
      titulo: "Siempre en construcción",
      descripcion:
        "Este portfolio no está terminado. Es un proyecto vivo que va creciendo conmigo. Lo actualizo, lo reviso y lo dejo evolucionar, igual que yo como desarrollador.",
    },
  
    { tipo: "divider", altura: 100 },
    {
      tipo: "otrosProyectos",
      titulo: "Otros Proyectos",
      proyectos: [
        { titulo: "People&Franq", link: "/peopleandfranq" },
        { titulo: "Conocete", link: "/conocete" },
        { titulo: "TalentTrack", link: "/talenttrack" },
      ],
    },
  ];
  

const Page = () => {
  return (
    <MaquetaProyecto
    elementos={elementos as any}
    titulo="Portfolio Personal"
    descripcion="Un recorrido visual y técnico por mi evolución como desarrollador"
  />  )
}

export default Page