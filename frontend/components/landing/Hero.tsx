"use client";
import { Tilt } from "@/components/ui/tilt";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";
import { Download, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/images/landing/yo.webp", "/images/landing/yoGibli.webp"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center pt-10 md:pt-0 lg:mb-20 py-8"
      id="hero"
    >
      <div className="w-full max-w-7xl  flex flex-col md:flex-row items-center justify-center md:justify-around gap-8 ">
        <div className="flex flex-col max-w-xl space-y-4 sm:space-y-6 order-2 md:order-1 items-center w-full md:w-auto md:items-center">
          <h1 className="title">Hola, soy Facu👋</h1>

          <div className="text-md sm:text-3xl lg:text-4xl font-semibold text-slate-900">
            <LayoutGroup>
              <motion.div className="flex flex-wrap items-center" layout>
                <motion.span
                  layout
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  className="hidden sm:flex font-bold"
                >
                  Soy{" "}
                </motion.span>
                <motion.div layout layoutId="text-rotate-container">
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
                    rotationInterval={4000}
                  />
                </motion.div>
              </motion.div>
            </LayoutGroup>
          </div>

          <p className="shortDescription">
            Construyo experiencias digitales eficientes y escalables,
            transformando ideas en soluciones innovadoras.
          </p>

          <div className="pt-4 sm:pt-6 w-full flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 items-center justify-center">
            <a
              href="#footer"
              className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-slate-800/90 text-white text-sm sm:text-base rounded-[32px] hover:bg-slate-800/70 border-b-4 border-r-4  border-slate-800/90 hover:border-slate-900/70 transition-colors whitespace-nowrap"
            >
              <Mail size={16} className="sm:size-18" />
              <span>Contacto</span>
            </a>
            <button
              className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 border-t-2 border-l-2 border-b-4 border-r-4 border-slate-800/90 text-slate-800 text-sm sm:text-base rounded-[32px] hover:bg-slate-800/10 transition-colors whitespace-nowrap"
              onClick={() => window.open("/cv.pdf", "_blank")}
            >
              <Download size={16} className="sm:size-18" />
              <span>Descargar CV</span>
            </button>
          </div>
        </div>

        <div className="order-1 md:order-2 mb-4 md:mb-0">
          <Tilt rotationFactor={8} isRevese>
            <div className="relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[340px] 2xl:w-[380px] aspect-square">
              {images.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt="Facundo"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentImage === index ? 1 : 0 }}
                  transition={{ duration: 1 }}
                />
              ))}
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Hero;
