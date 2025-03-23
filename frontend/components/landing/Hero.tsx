"use client"
import { Tilt } from "@/components/ui/tilt"
import { LayoutGroup, motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import { Download, Mail } from "lucide-react"

const Hero = () => {
  return (
    <div className="min-h-screen w-full px-4 sm:px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-center md:justify-around gap-8">
      <div className="flex flex-col max-w-xl space-y-4 sm:space-y-6 order-2 md:order-1 items-center w-full md:w-auto md:items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900">Hola, soy Facundo👋</h1>

        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900">
          <LayoutGroup>
            <motion.p className="flex flex-wrap items-center" layout>
              <motion.span layout transition={{ type: "spring", damping: 30, stiffness: 400 }}>
                Soy{" "}
              </motion.span>
              <TextRotate
                texts={[
                  "desarrollador web",
                  "diseñador UI/UX ✽",
                  "ingeniero de software",
                  "creativo digital",
                  "full-stack developer",
                ]}
                mainClassName="text-white px-2 sm:px-3 bg-slate-800 overflow-hidden py-1 justify-center rounded-lg ml-2"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={5000}
              />
            </motion.p>
          </LayoutGroup>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg text-center">
          Construyo experiencias digitales eficientes y escalables, transformando ideas en
          soluciones innovadoras.
        </p>

        <div className="pt-4 sm:pt-6 w-full flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 items-center justify-center">
          <button className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-slate-800 text-white text-sm sm:text-base rounded-[32px] hover:bg-slate-800/90 transition-colors whitespace-nowrap">
            <Mail size={16} className="sm:size-18" />
            <span>Contacto</span>
          </button>
          <button className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 border-2 border-slate-800 text-slate-800 text-sm sm:text-base rounded-[32px] hover:bg-slate-800/10 transition-colors whitespace-nowrap">
            <Download size={16} className="sm:size-18" />
            <span>Descargar CV</span>
          </button>
        </div>
      </div>

      <div className="order-1 md:order-2 mb-4 md:mb-0">
        <Tilt rotationFactor={8} isRevese>
          <img
            src="/images/landing/yo.webp"
            alt="Facundo"
            className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[340px] 2xl:w-[380px] rounded-full"
          />
        </Tilt>
      </div>
    </div>
  )
}

export default Hero

