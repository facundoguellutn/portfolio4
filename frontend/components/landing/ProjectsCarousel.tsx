"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

type Project = {
  id: number
  title: string
  description: string
  categories: string[]
  image: string
  color: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Barclays",
    description:
      "Rediseño de la plataforma digital para mejorar la experiencia de usuario y optimizar los flujos de navegación.",
    categories: ["Product Design", "Web Design"],
    image: "/placeholder.svg?height=400&width=600",
    color: "#f5f5f5",
  },
  {
    id: 2,
    title: "Argyle",
    description: "Desbloqueando el acceso a nóminas para el mundo moderno con una interfaz intuitiva y segura.",
    categories: ["Branding", "Product Design", "Web Design"],
    image: "/placeholder.svg?height=400&width=600",
    color: "#d8cbf6",
  },
  {
    id: 3,
    title: "Fintech App",
    description:
      "Aplicación móvil para gestión financiera personal con análisis de gastos y recomendaciones personalizadas.",
    categories: ["UI/UX", "Mobile App"],
    image: "/placeholder.svg?height=400&width=600",
    color: "#c9f0ff",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico con integración de pagos y sistema de gestión de inventario.",
    categories: ["Web Development", "Backend"],
    image: "/placeholder.svg?height=400&width=600",
    color: "#ffecd9",
  },
]

export default function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Proyectos Destacados</h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Una selección de los proyectos en los que he trabajado, mostrando mi experiencia en diseño y desarrollo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="rounded-xl overflow-hidden cursor-pointer relative"
              style={{ backgroundColor: project.color }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setActiveIndex(project.id)}
              onHoverEnd={() => setActiveIndex(null)}
            >
              <div className="p-6 md:p-8 h-full flex flex-col">
                <div className="mb-4">
                  {project.categories.map((category) => (
                    <span key={category} className="text-sm text-slate-600 mr-3">
                      {category}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{project.title}</h3>

                <motion.p
                  className="text-slate-700 mb-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: activeIndex === project.id ? 1 : 0,
                    height: activeIndex === project.id ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.p>

                <div className="mt-auto">
                  <motion.button className="flex items-center text-slate-900 font-medium" whileHover={{ x: 5 }}>
                    Explorar <ArrowRight size={16} className="ml-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

