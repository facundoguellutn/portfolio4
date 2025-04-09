"use client";

import * as React from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

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
    link: "/circular",
  },
  {
    id: 2,
    title: "TalentTrack",
    description: "Plataforma de gestión de talentos.",
    categories: ["Web app", "Full stack"],
    image: "/images/landing/talenttrack.webp",
    color: "#d8cbf6",
    link: "/talenttrack",
  },
  {
    id: 3,
    title: "Fidooo",
    description: "Landing page para la consultora de software Fidooo.",
    categories: ["UI/UX", "Landing page"],
    image: "/images/landing/fido.webp",
    color: "#c9f0ff",
    link: "/fido",
  },
  {
    id: 4,
    title: "Vienna Global",
    description: "Landing page para la inmobiliaria Vienna Global.",
    categories: ["UI/UX", "Landing page"],
    image: "/images/landing/vienna.webp",
    color: "#f5f5f5",
    link: "/viena",
  },
  {
    id: 5,
    title: "Aluam",
    description: "Landing page para la fabrica de aberturas Aluam.",
    categories: ["UI/UX", "Landing page"],
    image: "/images/landing/aluam.webp",
    color: "#d8cbf6",
    link: "/aluam",
  },
  {
    id: 6,
    title: "Conocete",
    description:
      "Pagina de tests de personalidad para un curso de Liderazgo privado.",
    categories: ["Web app", "Full stack"],
    image: "/images/landing/conocete.webp",
    color: "#c9f0ff",
    link: "/conocete",
  },
  {
    id: 7,
    title: "People&Franq",
    description: "Plataforma de gestión de talentos.",
    categories: ["Web app", "Full stack"],
    image: "/images/landing/people.webp",
    color: "#d8cbf6",
    link: "/peopleandfranq",
  },
  {
    id: 8,
    title: "Portfolio personal",
    description: "Portfolio personal.",
    categories: ["Web app", "Full stack"],
    image: "/images/landing/portfolio.webp",
    color: "#f5f5f5",
    link: "/portfolio",
  },
];

export default function ProjectsCarousel() {
  return (
    <section className="w-full flex items-center justify-center flex-col mt-20 lg:pt-20 max-w-7xl mx-auto" id="proyectos">
      <div className="mb-10 lg:mb-12 text-start lg:text-center w-full">
        <h2 className="title text-start lg:text-center">
          Proyectos Destacados
        </h2>
        {/* <p className="shortDescription">
            Una selección de los proyectos en los que he trabajado, mostrando mi experiencia en diseño y desarrollo.
          </p> */}
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-8">
          <CarouselPrevious className="relative static" />
          <CarouselNext className="relative static" />
        </div>
      </Carousel>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
              <Link href={project.link || ""}>
                <Button
                  variant="ghost"
                  className="px-6 py-[2px] w-fit text-slate-900 font-medium hover:bg-transparent hover:text-slate-700 border-[1px] border-slate-400 rounded-full"
                >
                  Explorar <ExternalLink size={16} className="ml-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
