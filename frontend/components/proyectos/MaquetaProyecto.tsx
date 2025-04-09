"use client";
import React from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type ProyectoLink = {
  titulo: string;
  link: string;
};

type AppShowcaseProps = {
  appImage: string;
  logoImage: string;
  appUrl: string;
  bgColorLeft: string;
  bgColorRight: string;
  showLink?: boolean;
};

type MaquetaElemento =
  | { tipo: "mainTitle"; texto: string }
  | { tipo: "titulo"; texto: string }
  | { tipo: "subtitulo"; texto: string }
  | { tipo: "descripcion"; texto: string }
  | { tipo: "imagenes"; urls: string[] }
  | { tipo: "tecnologias"; items: string[] }
  | { tipo: "boton"; texto: string; link: string }
  | { tipo: "atributosMarca"; subtitulo: string; titulos: string[] }
  | {
      tipo: "fuenteDestacada";
      titulos: string[];
      subtitulos: string[];
      imageUrl: string;
      colorFondo: string;
    }
  | { tipo: "brandTypography"; titulo: string; descripcion: string }
  | { tipo: "tags"; items: string[] }
  | { tipo: "divider"; altura?: number }
  | { tipo: "otrosProyectos"; titulo: string; proyectos: ProyectoLink[] }
  | { tipo: "appShowcase"; data: AppShowcaseProps };

const MaquetaProyecto = ({
  elementos,
  titulo,
  descripcion,
}: {
  elementos: MaquetaElemento[];
  titulo: string;
  descripcion: string;
}) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <div className=" space-y-12 pb-20 ">
      <section className="relative text-white  overflow-hidden min-h-[100vh] flex flex-col items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/proyectos/header.webp"
            alt="Servicios hero background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              {titulo}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-10">
              {descripcion}
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="w-full flex justify-center"
            >
              <button
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  });
                }}
                className="text-zinc-300 flex flex-col items-center"
              >
                <span className="mb-2">Descubre más</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                  }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div className="container md:mx-auto px-6 lg:px-4 py-8 max-w-5xl space-y-4">
        {elementos.map((el, i) => {
          switch (el.tipo) {
            case "mainTitle":
              return (
                <motion.h1
                  key={i}
                  className="text-4xl md:text-5xl font-bold text-zinc-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {el.texto}
                </motion.h1>
              );
            case "titulo":
              return (
                <motion.h1
                  key={i}
                  className="text-3xl md:text-4xl font-semibold text-zinc-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {el.texto}
                </motion.h1>
              );
            case "subtitulo":
              return (
                <p key={i} className="text-lg text-zinc-500">
                  {el.texto}
                </p>
              );
            case "descripcion":
              return (
                <motion.p
                  key={i}
                  className="text-zinc-700 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {el.texto}
                </motion.p>
              );
            case "imagenes":
              return (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {el.urls.map((img, index) => (
                    <motion.img
                      key={index}
                      src={img}
                      alt={`Imagen ${index}`}
                      className="rounded-xl shadow-md object-cover w-full h-64 border-[1px] border-zinc-100"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      loading="lazy"
                    />
                  ))}
                </div>
              );
            case "tecnologias":
              return (
                <div key={i}>
                  <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                    Tecnologías usadas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {el.items.map((tech) => (
                      <span
                        key={tech}
                        className="bg-zinc-200 text-zinc-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            case "boton":
              return (
                <div key={i}>
                  <Button variant="default" asChild>
                    <a href={el.link} target="_blank" rel="noopener noreferrer">
                      {el.texto} <ExternalLink size={16} className="ml-2" />
                    </a>
                  </Button>
                </div>
              );
            case "atributosMarca":
              return (
                <motion.div
                  key={i}
                  className="rounded-lg shadow-sm overflow-hidden w-full"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Sección de texto */}
                    <div className="bg-indigo-100 text-indigo-900 p-10 w-full lg:w-1/2 flex flex-col items-start justify-center">
                      <p className="text-sm font-medium text-indigo-700 uppercase tracking-wider mb-4">
                        {el.subtitulo}
                      </p>
                      <div className="space-y-2">
                        {el.titulos.map((titulo, idx) => (
                          <h2
                            key={idx}
                            className="text-4xl lg:text-5xl xl:text-6xl font-bold"
                          >
                            {titulo}
                          </h2>
                        ))}
                      </div>
                    </div>

                    {/* Cuadrados de colores */}
                    <div className="hidden lg:w-1/2 lg:grid grid-cols-2 grid-rows-2">
                      <div className="bg-yellow-100 flex items-center justify-center aspect-square">
                        <div className="w-10 h-10 bg-blue-600 shadow-xl rotate-45" />
                      </div>
                      <div className="bg-pink-100 flex items-center justify-center aspect-square">
                        <div className="w-10 h-10 bg-yellow-500 shadow-xl rotate-45" />
                      </div>
                      <div className="bg-cyan-100 flex items-center justify-center aspect-square">
                        <div className="w-10 h-10 bg-cyan-500 shadow-xl rotate-45" />
                      </div>
                      <div className="bg-indigo-100 flex items-center justify-center aspect-square">
                        <div className="w-10 h-10 bg-orange-500 shadow-xl rotate-45" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            case "fuenteDestacada":
              return (
                <motion.div
                  key={i}
                  className=" overflow-hidden w-full  lg:flex flex-col lg:flex-row"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                >
                  <div className="bg-white text-zinc-900 pb-10 lg:p-10 w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
                    <div className="mb-8">
                      {el.titulos.map((titulo, idx) => (
                        <h2
                          key={idx}
                          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                        >
                          {titulo}
                        </h2>
                      ))}
                    </div>
                    <div>
                      {el.subtitulos.map((subtitulo, idx) => (
                        <p
                          key={idx}
                          className={`text-lg mb-1 ${
                            idx === el.subtitulos.length - 1 ? "font-bold" : ""
                          }`}
                        >
                          {subtitulo}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`w-full rounded-lg lg:w-1/2 flex items-center justify-center p-10 order-1 lg:order-2 ${el.colorFondo}`}
                  >
                    <motion.img
                      src={el.imageUrl}
                      alt="Imagen destacada"
                      className="max-w-full h-auto max-h-[400px] object-contain rounded-md shadow-lg"
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true, amount: 0.5 }}
                    />
                  </div>
                </motion.div>
              );
            case "brandTypography":
              return (
                <motion.div
                  key={i}
                  className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex-1">
                    <h2 className="text-2xl lg:text-4xl font-semibold text-zinc-800 tracking-tight">
                      {el.titulo}
                    </h2>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-zinc-600 leading-relaxed text-center lg:text-left">
                      {el.descripcion}
                    </p>
                  </div>
                </motion.div>
              );
            case "tags":
              return (
                <motion.div
                  key={i}
                  className="flex flex-wrap gap-3 py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {el.items.map((tag, index) => (
                    <motion.span
                      key={tag}
                      className="bg-zinc-100 px-4 py-2 rounded-full text-zinc-800 text-sm md:text-base font-medium hover:bg-zinc-200 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              );
            case "divider":
              return (
                <div
                  key={i}
                  style={{ height: el.altura ? `${el.altura}px` : "48px" }}
                  className="w-full"
                />
              );
            case "otrosProyectos":
              return (
                <div key={i} className="py-12">
                  <motion.h3
                    className="text-2xl font-semibold text-zinc-800 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {el.titulo}
                  </motion.h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {el.proyectos.map((proyecto, index) => (
                      <motion.a
                        key={index}
                        href={proyecto.link}
                        className="group p-6 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-all duration-300 flex items-center justify-between"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <span className="text-lg text-zinc-700 group-hover:text-zinc-900">
                          {proyecto.titulo}
                        </span>
                        <ExternalLink
                          size={20}
                          className="text-zinc-400 group-hover:text-zinc-600 transition-colors"
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>
              );
            case "appShowcase":
              return (
                <div
                  key={i}
                  className="w-full flex flex-col md:flex-row rounded-2xl overflow-hidden"
                >
                  {/* LADO IZQUIERDO: Imagen en la esquina inferior izquierda */}
                  <div
                    className="relative w-full md:w-1/2 h-[150px] lg:h-[500px] overflow-hidden flex items-center justify-center "
                    style={{ backgroundColor: el.data.bgColorLeft }}
                  >
                    <motion.img
                      src={el.data.appImage}
                      alt="App showcase"
                      className="h-[90%] w-auto object-contain mx-auto my-auto relative lg:absolute lg:-bottom-12 lg:-left-12"
                      style={{ imageRendering: "auto" }}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>

                  {/* LADO DERECHO: dos bloques iguales en alto */}
                  <div className="w-full md:w-1/2 flex flex-col  h-[350px] lg:h-[500px]">
                    {/* Cuadrado gris claro */}
                    <motion.div
                      className="flex-1 bg-[#f2f2f2] flex items-center justify-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={el.data.logoImage}
                        alt="Logo"
                        className="w-16 h-16 object-contain"
                      />
                    </motion.div>

                    {/* Cuadrado negro con enlace dentro */}
                    <motion.div
                      className="flex-1 bg-black flex items-center justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {el.data.showLink ? (
                        <a
                          href={el.data.appUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 bg-[#f2f2f2] px-5 py-3 rounded-full"
                        >
                          <img
                            src={el.data.logoImage}
                            alt="Mini logo"
                            className="w-5 h-5 object-contain"
                          />
                          <span className="text-zinc-800 font-medium text-sm md:text-base">
                            {el.data.appUrl}
                          </span>
                        </a>
                      ) : (
                        <span className="flex items-center gap-3 bg-[#f2f2f2] px-5 py-3 rounded-full">
                          <img
                            src={el.data.logoImage}
                            alt="Mini logo"
                            className="w-5 h-5 object-contain"
                          />
                          <span className="text-zinc-800 font-medium text-sm md:text-base">
                            {el.data.appUrl}
                          </span>
                        </span>
                      )}
                    </motion.div>
                  </div>
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default MaquetaProyecto;
