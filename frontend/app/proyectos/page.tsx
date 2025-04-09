"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Project = {
  id: number;
  title: string;
  description: string;
  categories: string[];
  image: string;
  color: string;
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Circular",
    description: "Plataforma de gestion de envios y ordenes .",
    categories: ["Web app", "Full stack"],
    image: "/images/landing/circular.webp",
    color: "#f5f5f5",
    link: "#",
  },
  {
    id: 2,
    title: "TalentTrack",
    description: "Plataforma de gestión de talentos.",
    categories: ["Web app", "Full stack"],
    image: "/images/landing/talenttrack.webp",
    color: "#d8cbf6",
    link: "#",
  },
  {
    id: 3,
    title: "Fidooo",
    description: "Landing page para la consultora de software Fidooo.",
    categories: ["UI/UX", "Landing page"],
    image: "/images/landing/fido.webp",
    color: "#c9f0ff",
    link: "#",
  },
  {
    id: 4,
    title: "Vienna Global",
    description: "Landing page para la inmobiliaria Vienna Global.",
    categories: ["UI/UX", "Landing page"],
    image: "/images/landing/vienna.webp",
    color: "#fef3c7",
    link: "#",
  },
  {
    id: 5,
    title: "Aluam",
    description: "Landing page para la fabrica de aberturas Aluam.",
    categories: ["UI/UX", "Landing page"],
    image: "/images/landing/aluam.webp",
    color: "#dcfce7",
    link: "#",
  },
  {
    id: 6,
    title: "Conocete",
    description:
      "Pagina de tests de personalidad para un curso de Liderazgo privado.",
    categories: ["Web app", "Full stack"],
    image: "/images/landing/conocete.webp",
    color: "#ede9fe",
    link: "#",
  },
];

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen w-full">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 z-10" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(154,224,29,0.4),transparent_40%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(154,224,29,0.4),transparent_40%)]"></div>
          </div>
          <img
            src="/images/proyectos/hero.webp"
            alt="Córdoba, Argentina"
            className="object-cover w-full h-full"
            style={{ objectPosition: "center -50px" }}
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
              Mis{" "}
              <span className="text-lime-400">Proyectos</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-12">
              Aquí encontrarás algunos de los proyectos en los que he trabajado.
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
                <span className="mb-2">Ver más</span>
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
      <section ref={projectsRef} className="container mx-auto px-4 mt-20 pt-20 max-w-8xl pb-20 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Proyectos destacados
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Estos son algunos de los proyectos en los que he trabajado
            recientemente, desde apps full stack hasta landings personalizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 px-6 lg:px-20">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                exit={{ opacity: 0, y: 50 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default Page;

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(true);

  return (
    <div className="h-full">
      <Card
        className="overflow-hidden border-0 h-[500px] rounded-xl"
        style={{ backgroundColor: project.color }}
      >
        <CardContent className="p-0 h-full flex flex-col">
          <div className="relative overflow-hidden h-[60%]">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-contain object-center max-h-[250px] pt-10 px-4"
            />
          </div>
          <div className="p-6 flex flex-col justify-end h-[40%] relative">
            <motion.div
              className="flex flex-col"
              initial={{ y: 0 }}
              animate={{ y: isHovered ? -20 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-2 flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <span key={category} className="text-xs text-slate-600">
                    {category}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-none">
                {project.title}
              </h3>
            </motion.div>

            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                height: isHovered ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-slate-700 mb-4">{project.description}</p>

              <Button
                variant="ghost"
                className="px-6 py-[2px] w-fit text-slate-900 font-medium hover:bg-transparent hover:text-slate-700 border-[1px] border-slate-400 rounded-full"
              >
                Explorar <ExternalLink size={16} className="ml-1" />
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
