"use client"

import * as React from "react"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

type Project = {
  id: number
  title: string
  description: string
  categories: string[]
  image: string
  color: string
  link?: string
}

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
    color: "#f5f5f5",
    link: "#",
  },
  {
    id: 5,
    title: "Aluam",
    description: "Landing page para la fabrica de aberturas Aluam.",
    categories: ["UI/UX", "Landing page"],
    image: "/images/landing/aluam.webp",
    color: "#d8cbf6",
    link: "#",
  },
  {
    id: 6,
    title: "Conocete",
    description: "Pagina de tests de personalidad para un curso de Liderazgo privado.",
    categories: ["Web app", "Full stack"],
    image: "/images/landing/conocete.webp",
    color: "#c9f0ff",
    link: "#",
  },
]

export default function ProjectsCarousel() {
  return (
    <section className="w-full flex items-center justify-center flex-col mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Proyectos Destacados</h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Una selección de los proyectos en los que he trabajado, mostrando mi experiencia en diseño y desarrollo.
          </p>
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
              <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative static" />
            <CarouselNext className="relative static" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div className="h-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Card className="overflow-hidden border-0 h-[500px] rounded-xl" style={{ backgroundColor: project.color }}>
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

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-none">{project.title}</h3>
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
                className="px-0 w-fit text-slate-900 font-medium hover:bg-transparent hover:text-slate-700"
              >
                Explorar <ExternalLink size={16} className="ml-1" />
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

