"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Database,
  Layers,
  Lightbulb,
  CheckCircle,
  Rocket,
  GraduationCap,
  ChevronRight,
  Figma,
  Globe,
  Search,
  Smartphone,
  Server,
  FileCode,
  Cpu,
  Users,
  ClipboardList,
  GitBranch,
  Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Servicios() {
  const [activeTab, setActiveTab] = useState("frontend");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-zinc-50 min-h-screen w-full ">
      <div className="w-full px-10 max-w-7xl "></div>
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden min-h-[100vh] flex flex-col items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/servicios/hero.webp"
            alt="Servicios hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 to-zinc-800/80"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(154,224,29,0.4),transparent_40%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(154,224,29,0.4),transparent_40%)]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transformando <span className="text-lime-400">ideas</span> en
              experiencias digitales
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10">
              Ofrezco soluciones tecnológicas completas para ayudarte a destacar
              en el mundo digital
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-lime-500 hover:bg-lime-600 text-zinc-900 rounded-[32px] border-t-2 border-l-2 border-b-4 border-r-4 border-lime-600/90 text-[17px] font-semibold"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contáctame
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-t-2 border-l-2 border-b-4 border-r-4 border-white/90 text-white bg-transparent rounded-[32px] hover:bg-white/10 text-[17px] font-semibold"
                onClick={() => {
                  const servicesSection = document.getElementById("services");
                  servicesSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver servicios
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-10 w-full flex flex-col items-center justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Mis Servicios
            </h2>
            <p className="text-lg text-zinc-600">
              Ofrezco un conjunto completo de servicios de desarrollo web y
              enseñanza, adaptados a tus necesidades específicas para ayudarte a
              alcanzar tus objetivos digitales.
            </p>
          </motion.div>
          <Tabs
            defaultValue="frontend"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full max-w-7xl "
          >
            <div className="w-full flex items-center justify-center mb-12">
              <ScrollArea>
                <TabsList className="">
                  <TabsTrigger
                    value="frontend"
                    className="flex items-center gap-2 px-4 py-3"
                  >
                    <Layout size={18} />
                    <span>Frontend</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="backend"
                    className="flex items-center gap-2 px-4 py-3"
                  >
                    <Database size={18} />
                    <span>Backend</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="fullstack"
                    className="flex items-center gap-2 px-4 py-3"
                  >
                    <Layers size={18} />
                    <span>Proyectos Completos</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="teaching"
                    className="flex items-center gap-2 px-4 py-3"
                  >
                    <GraduationCap size={18} />
                    <span>Enseñanza</span>
                  </TabsTrigger>
                </TabsList>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>

            {/* Frontend Development */}
            <TabsContent value="frontend">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <motion.div
                    variants={fadeIn}
                    className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden"
                  >
                    <img
                      src="/images/servicios/hero.webp"
                      alt="Frontend Development"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Desarrollo Frontend
                        </h3>
                        <p className="text-zinc-200">
                          Interfaces modernas, responsivas y optimizadas
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-8">
                  <motion.div variants={fadeIn}>
                    <h3 className="text-2xl font-bold mb-4">
                      Desarrollo Frontend
                    </h3>
                    <p className="text-zinc-600 mb-6">
                      Creo experiencias digitales atractivas y funcionales que
                      cautivan a los usuarios y convierten visitantes en
                      clientes. Utilizando las últimas tecnologías y mejores
                      prácticas para garantizar sitios web rápidos, accesibles y
                      visualmente impactantes.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <Figma size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Diseño UI/UX</h4>
                        <p className="text-sm text-zinc-600">
                          Interfaces intuitivas y atractivas diseñadas en Figma
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <Code size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">React & Next.js</h4>
                        <p className="text-sm text-zinc-600">
                          Desarrollo con las tecnologías más modernas y
                          eficientes
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <Globe size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Sitios Web</h4>
                        <p className="text-sm text-zinc-600">
                          Páginas corporativas, blogs y portafolios
                          personalizados
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <Search size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">SEO Optimizado</h4>
                        <p className="text-sm text-zinc-600">
                          Mejora tu visibilidad en buscadores con Next.js
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <Smartphone size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Responsive Design</h4>
                        <p className="text-sm text-zinc-600">
                          Adaptación perfecta a todos los dispositivos
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <Rocket size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Landing Pages</h4>
                        <p className="text-sm text-zinc-600">
                          Páginas optimizadas para conversión
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Button className="group flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-zinc-900">
                      <span>Ver proyectos frontend</span>
                      <ChevronRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Backend Development */}
            <TabsContent value="backend">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div className="order-2 md:order-1 space-y-8">
                  <motion.div variants={fadeIn}>
                    <h3 className="text-2xl font-bold mb-4">
                      Desarrollo Backend
                    </h3>
                    <p className="text-zinc-600 mb-6">
                      Construyo la infraestructura robusta que impulsa tus
                      aplicaciones web. Desarrollo APIs eficientes, bases de
                      datos optimizadas y sistemas seguros que garantizan el
                      rendimiento y la escalabilidad de tu proyecto.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <Server size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Express.js</h4>
                        <p className="text-sm text-zinc-600">
                          APIs RESTful y servicios web eficientes
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <Database size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">MongoDB</h4>
                        <p className="text-sm text-zinc-600">
                          Bases de datos NoSQL flexibles y escalables
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <Cpu size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Node.js</h4>
                        <p className="text-sm text-zinc-600">
                          Desarrollo backend rápido y eficiente
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <FileCode size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Firebase</h4>
                        <p className="text-sm text-zinc-600">
                          Autenticación, bases de datos en tiempo real y hosting
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <Cloud size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Servicios Cloud</h4>
                        <p className="text-sm text-zinc-600">
                          Integración con AWS, Google Cloud y más
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <CheckCircle size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Testing</h4>
                        <p className="text-sm text-zinc-600">
                          Pruebas unitarias y de integración
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Button className="group flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-zinc-900">
                      <span>Ver proyectos backend</span>
                      <ChevronRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Button>
                  </motion.div>
                </div>

                <div className="order-1 md:order-2">
                  <motion.div
                    variants={fadeIn}
                    className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden"
                  >
                    <img
                      src="/images/servicios/backend.webp"
                      alt="Frontend Development"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Desarrollo Backend
                        </h3>
                        <p className="text-zinc-200">
                          Infraestructura robusta y escalable
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Full Stack Projects */}
            <TabsContent value="fullstack">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <motion.div
                    variants={fadeIn}
                    className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden"
                  >
                    <img
                      src="/images/servicios/gestion.webp"
                      alt="Frontend Development"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Proyectos Completos
                        </h3>
                        <p className="text-zinc-200">
                          De la idea al producto final
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-8">
                  <motion.div variants={fadeIn}>
                    <h3 className="text-2xl font-bold mb-4">
                      Proyectos Completos
                    </h3>
                    <p className="text-zinc-600 mb-6">
                      Gestiono todo el ciclo de vida de tu proyecto digital,
                      desde la concepción inicial hasta la implementación final.
                      Mi enfoque integral garantiza una solución coherente y
                      alineada con tus objetivos de negocio.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <ClipboardList size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Relevamiento</h4>
                        <p className="text-sm text-zinc-600">
                          Análisis detallado de requisitos y necesidades
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <Lightbulb size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Planificación</h4>
                        <p className="text-sm text-zinc-600">
                          Estrategia y arquitectura del proyecto
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <Code size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Desarrollo</h4>
                        <p className="text-sm text-zinc-600">
                          Implementación frontend y backend integrados
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <GitBranch size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Control de Calidad</h4>
                        <p className="text-sm text-zinc-600">
                          Testing exhaustivo y optimización
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <Rocket size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Despliegue</h4>
                        <p className="text-sm text-zinc-600">
                          Lanzamiento y configuración en producción
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                        <Users size={20} className="text-lime-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Capacitación</h4>
                        <p className="text-sm text-zinc-600">
                          Entrenamiento para el uso del sistema
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Button className="group flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-zinc-900">
                      <span>Ver proyectos completos</span>
                      <ChevronRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Teaching */}
            <TabsContent value="teaching">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div className="order-2 md:order-1 space-y-8">
                  <motion.div variants={fadeIn}>
                    <h3 className="text-2xl font-bold mb-4">
                      Clases de Programación
                    </h3>
                    <p className="text-zinc-600 mb-6">
                      Comparto mi conocimiento y experiencia a través de clases
                      personalizadas de programación. Mi enfoque práctico y
                      orientado a proyectos te ayudará a dominar las tecnologías
                      web modernas y desarrollar tus propias aplicaciones.
                    </p>
                  </motion.div>

                  <motion.div variants={staggerContainer} className="space-y-6">
                    <motion.div
                      variants={fadeIn}
                      className="  rounded-xl "
                    >
                      <h4 className="font-bold text-lg mb-3">
                        Desarrollo Web Frontend
                      </h4>
                      <p className="text-zinc-600 mb-4">
                        Aprende a crear interfaces modernas con HTML, CSS,
                        JavaScript, React y Next.js. Desde los fundamentos hasta
                        técnicas avanzadas.
                      </p>
                      <div className="flex items-center text-sm text-lime-600">
                        <span className="font-medium">
                          Para principiantes y nivel intermedio
                        </span>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="  rounded-xl "
                    >
                      <h4 className="font-bold text-lg mb-3">
                        Desarrollo Backend con Node.js
                      </h4>
                      <p className="text-zinc-600 mb-4">
                        Domina la creación de APIs, manejo de bases de datos y
                        autenticación con Express, MongoDB y Firebase.
                      </p>
                      <div className="flex items-center text-sm text-lime-600">
                        <span className="font-medium">
                          Para nivel intermedio y avanzado
                        </span>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className=" rounded-xl "
                    >
                      <h4 className="font-bold text-lg mb-3">
                        Proyectos Prácticos Guiados
                      </h4>
                      <p className="text-zinc-600 mb-4">
                        Aprende construyendo aplicaciones reales desde cero.
                        Mentoría personalizada durante todo el proceso de
                        desarrollo.
                      </p>
                      <div className="flex items-center text-sm text-lime-600">
                        <span className="font-medium">
                          Para todos los niveles
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Button className="group flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-zinc-900" onClick={() => {
                      window.open("https://wa.me/+5493515558870", "_blank");
                    }}>
                      <span>Consultar por clases</span>
                      <ChevronRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Button>
                  </motion.div>
                </div>

                <div className="order-1 md:order-2">
                  <motion.div
                    variants={fadeIn}
                    className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden"
                  >
                     <img
                      src="/images/servicios/clases.webp"
                      alt="Frontend Development"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Clases de Programación
                        </h3>
                        <p className="text-zinc-200">
                          Aprende a crear tus propias aplicaciones
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-6xl mx-auto rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {/* Imagen */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
                <img
                  src="/images/servicios/contactar.webp"
                  alt="Contacto background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/60 to-transparent md:block hidden"></div>
              </div>
              
              {/* Contenido */}
              <div className="w-full md:w-1/2 bg-zinc-900 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  ¿Listo para dar vida a tu proyecto?
                </h2>
                <p className="text-lg text-zinc-300 mb-8">
                  Contáctame hoy mismo para discutir cómo puedo ayudarte a alcanzar
                  tus objetivos digitales. Estoy disponible para proyectos de
                  desarrollo web, consultoría y clases de programación.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-lime-500 hover:bg-lime-600 text-zinc-900 rounded-[32px] border-t-2 border-l-2 border-b-4 border-r-4 border-lime-600/90 text-[17px] font-semibold"
                    onClick={() => (window.location.href = "#footer")}
                  >
                    Contactar ahora
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-t-2 border-l-2 border-b-4 border-r-4 border-white/90 text-white bg-transparent rounded-[32px] hover:bg-white/10 text-[17px] font-semibold"
                    onClick={() => (window.location.href = "/proyectos")}
                  >
                    Ver portfolio
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}



