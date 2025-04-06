"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Music,
  Code,
  Briefcase,
  Dumbbell,
  MapPin,
  Users,
  GraduationCap,
} from "lucide-react";
import dynamic from "next/dynamic";

const GridMotion = dynamic(() => import("@/components/ui/grid-motion").then(mod => mod.GridMotion), {
  ssr: false,
});

const Page = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [imageToggle, setImageToggle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageToggle((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  const items = [
    "Ajedrez",
    <div key="jsx-item-1">Mi pasión por el ajedrez</div>,
    "/images/sobremi/ajedrez.webp",
    "Deporte",
    <div key="jsx-item-2">Entrenamiento y actividad física</div>,
    "Fórmula 1",
    <div key="jsx-item-3">Fanático de la F1</div>,
    "/images/sobremi/deporte.webp",
    "Next.js",
    "/images/sobremi/personal2.webp",
    <div key="jsx-item-4">Desarrollo web moderno</div>,
    "Música",
    <div key="jsx-item-5">Tocando la guitarra</div>,
    "/images/sobremi/guitarra.webp",
    "Código",
    "/images/sobremi/codigo.webp",
    "Ingeniería",
    "/images/sobremi/personal3.webp",

    <div key="jsx-item-7">Ingeniero en Sistemas</div>,
    "Córdoba",
    <div key="jsx-item-8">Mi ciudad natal</div>,
  ];

  return (
    <main className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 z-10" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(154,224,29,0.4),transparent_40%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(154,224,29,0.4),transparent_40%)]"></div>
          </div>
          <img
            src="/images/servicios/hero.webp"
            alt="Córdoba, Argentina"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-lime-400">Facundo</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-12">
              Ingeniero en Sistemas • Deportista • Músico • Viajero
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
                className="text-white flex flex-col items-center"
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

      {/* About Section */}
      <section className="py-20 xl:py-[120px] bg-white mt-20 mb-10 px-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-8">Sobre Mí</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-balance">
              Soy Facundo y vivo en Córdoba, Argentina. Actualmente, trabajo en
              Ventia mientras continúo explorando y desarrollando mis
              habilidades en tecnología. Me gradué como Ingeniero en Sistemas de
              Información en la Facultad Regional Córdoba, un camino que me
              permitió conectar mi curiosidad con mi pasión por resolver
              problemas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-violet-100 px-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-violet-200 p-12 rounded-2xl flex flex-col justify-center"
            >
              <h3 className="text-sm uppercase tracking-wider text-violet-700 mb-4">
                Atributos Personales
              </h3>
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-slate-800">Curioso</h2>
                <h2 className="text-5xl font-bold text-slate-800">Activo</h2>
                <h2 className="text-5xl font-bold text-slate-800">
                  Apasionado
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-yellow-100 rounded-2xl p-6 flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <AnimatePresence mode="wait">
                    {imageToggle ? (
                      <motion.div
                        key="shadow1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <img
                          src="/images/sobremi/codigo.webp"
                          alt="Deporte"
                          className="max-w-[100px] object-cover"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="shadow2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Code size={48} className="text-blue-500" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="bg-red-100 rounded-2xl p-6 flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <AnimatePresence mode="wait">
                    {imageToggle ? (
                      <motion.div
                        key="shadow3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <img
                          src="/images/sobremi/guitarra.webp"
                          alt="Deporte"
                          className="max-w-[100px] object-cover"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="shadow4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Music size={48} className="text-amber-500" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="bg-cyan-100 rounded-2xl p-6 flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <AnimatePresence mode="wait">
                    {imageToggle ? (
                      <motion.div
                        key="shadow5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <img
                          src="/images/sobremi/deporte.webp"
                          alt="Deporte"
                          className="max-w-[100px] object-cover"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="shadow6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Dumbbell size={48} className="text-cyan-500" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="bg-green-100 rounded-2xl p-6 flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <AnimatePresence mode="wait">
                    {imageToggle ? (
                      <motion.div
                        key="shadow7"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <img
                          src="/images/sobremi/ajedrez.webp"
                          alt="Deporte"
                          className="max-w-[100px] object-cover"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="shadow8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <MapPin size={48} className="text-orange-500" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seccion aqui */}
      <section className="py-20 bg-white w-full mx-auto px-6">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <div className="space-y-24">
            {/* Trabajo y Educación */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-12 items-center justify-around w-full "
            >
              <div className="space-y-4 order-1">
                <h3 className="text-2xl font-bold text-slate-800">Trabajo y Educación</h3>
                <p className="text-slate-600 leading-relaxed max-w-lg">
                  Actualmente, trabajo en Ventia mientras continúo explorando y desarrollando mis habilidades en tecnología. Me gradué como Ingeniero en Sistemas de Información en la Facultad Regional Córdoba, un camino que me permitió conectar mi curiosidad con mi pasión por resolver problemas.
                </p>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative md:h-[400px] mx-auto rounded-2xl overflow-hidden order-2 flex justify-center"
              >
                <img
                  src="/images/sobremi/titulo.webp"
                  alt="Trabajo y Educación"
                  className="object-cover w-full md:max-w-[300px]"
                />
              </motion.div>
            </motion.div>

            {/* Deportes */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-20 items-center justify-around w-full "
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative md:h-[400px] mx-auto rounded-2xl overflow-hidden order-2 md:order-1 flex justify-center"
              >
                <img
                  src="/images/sobremi/personal3.webp"
                  alt="Deportes"
                  className="object-cover w-full md:max-w-[300px]"
                />
              </motion.div>
              <div className="space-y-4 order-1 md:order-2 ">
                <h3 className="text-2xl font-bold text-slate-800">Deportes y Actividad Física</h3>
                <p className="text-slate-600 leading-relaxed max-w-lg">
                  Me encanta estar activo, y los deportes ocupan un lugar importante en mi vida. Juego regularmente al fútbol y básquet, entreno en el gimnasio y disfruto mucho del ajedrez. La Fórmula 1 es otra de mis pasiones, siempre sigo las carreras y me fascina su combinación de tecnología y estrategia.
                </p>
              </div>
            </motion.div>

            {/* Música */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-12 items-center justify-around w-full "
            >
              <div className="space-y-4 order-1 ">
                <h3 className="text-2xl font-bold text-slate-800">Música y Arte</h3>
                <p className="text-slate-600 leading-relaxed max-w-lg">
                  La música también es fundamental para mí, especialmente el flamenco y el jazz. Toco la guitarra todos los días, buscando acercarme al estilo del gran Paco de Lucía.
                </p>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative md:h-[400px] mx-auto rounded-2xl overflow-hidden order-2 flex justify-center"
              >
                <img
                  src="/images/sobremi/personal4.webp"
                  alt="Música"
                  className="object-cover w-full md:max-w-[300px] "
                />
              </motion.div>
            </motion.div>

            {/* Viajes y Vida Social */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-12 items-center justify-around w-full "
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative md:h-[400px] mx-auto rounded-2xl overflow-hidden order-2 md:order-1 flex justify-center "
              >
                <img
                  src="/images/sobremi/personal2.webp"
                  alt="Viajes"
                  className="object-cover w-full md:max-w-[400px]"
                />
              </motion.div>
              <div className="space-y-4 order-1 md:order-2 md:w-1/2">
                <h3 className="text-2xl font-bold text-slate-800">Viajes y Vida Social</h3>
                <p className="text-slate-600 leading-relaxed max-w-lg">
                  Además, disfruto mucho viajar, conocer nuevos lugares y culturas, y siempre que puedo organizo alguna escapada. Valoro mucho los momentos con amigos, ya sea en una charla relajada o compartiendo alguna actividad. Me gusta mantener un equilibrio entre lo profesional y lo personal, siempre buscando nuevos desafíos y maneras de seguir creciendo en cada área de mi vida.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pt-20 bg-white lg:flex hidden w-full">
        <div className="space-y-8">

          {/* Custom grid with rich content */}
          <div className="h-screen w-full bg-gradient-to-br from-background to-muted">
            <GridMotion
              items={items}
              gradientColor="hsl(var(--brand))"
              className="relative z-10 backdrop-blur-sm"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
