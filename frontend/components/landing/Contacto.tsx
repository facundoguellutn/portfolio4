"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import {
  VerticalCutReveal,
  VerticalCutRevealRef,
} from "@/components/ui/vertical-cut-reveal";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";
import { Magnetic } from "@/components/ui/magnetic";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pointer } from "../magicui/pointer";
import { motion } from "motion/react";
import { LetterSwapForward } from "../ui/letter-swap";
import Link from "next/link";
import { Briefcase, Layers } from "lucide-react";
import { useRouter } from "next/navigation";

type SocialLink = {
  label: string;
  link: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Github",
    link: "https://github.com",
  },
  {
    label: "Twitter",
    link: "https://twitter.com",
  },
  {
    label: "LinkedIn",
    link: "https://linkedin.com",
  },
  {
    label: "Instagram",
    link: "https://instagram.com",
  },
];

const Contacto = () => {
  const ref = useRef<any>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const router = useRouter();

  const handleNavigate = (url: string) => {
    router.push(url);
  };

  return (
    <div
      className="w-full mt-20 relative lg:pt-20 flex flex-col items-center justify-center"
      ref={ref}
    >
      <LetterSwapForward
        label="Secciones de interés para explorar"
        reverse={true}
        className="italic mt-20 title pr-4 md:flex hidden mb-10"
      />
      <h1 className="title  mb-6 flex md:hidden">
        Secciones de interés para explorar
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-2 w-full maxScreen pb-20">
        <Card
          onClick={() => {
            console.log("hola");
          }}
          className="col-span-1 row-span-1 overflow-hidden border-none bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg transition-all hover:shadow-xl dark:from-slate-900 dark:to-slate-800"
        >
          <CardHeader className="relative pb-2">
            <CardTitle className="text-xl font-bold">Acerca de mí</CardTitle>
            <CardDescription className="text-sm text-slate-600 dark:text-slate-400">
              Descubre más sobre mi historia, mis pasiones, habilidades y lo que
              me motiva en la vida y el trabajo.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative flex h-40 items-center justify-center p-6">
            <Link
              href="/about"
              className="pointer-events-none text-center text-xl font-medium text-slate-800 dark:text-slate-200"
            >
              Descubre quién soy
            </Link>
          </CardContent>
          <Pointer>
            <motion.div
              animate={{
                scale: [0.8, 1, 0.8],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-slate-600"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
          </Pointer>
        </Card>

        <Card
          onClick={() => {
            handleNavigate("/experiencia");
          }}
          className="col-span-1 row-span-1 overflow-hidden border-none bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg transition-all hover:shadow-xl dark:from-blue-900 dark:to-blue-800"
        >
          <CardHeader className="relative pb-2">
            <CardTitle className="text-xl font-bold text-blue-700">
              Experiencia Laboral
            </CardTitle>
            <CardDescription className="text-sm text-blue-700 dark:text-blue-300">
              Un recorrido detallado por mi formación académica, experiencia
              profesional y proyectos destacados en los que he trabajado.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative flex h-40 items-center justify-center p-6">
            <Link
              href="/experience"
              className="pointer-events-none text-center text-xl font-medium text-blue-800 dark:text-blue-200"
            >
              Ver mi recorrido
            </Link>
          </CardContent>
          <Pointer className="fill-blue-500">
            <motion.div
              animate={{
                scale: [0.8, 1, 0.8],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Briefcase className="text-blue-500" />
            </motion.div>
          </Pointer>
        </Card>

        <Card className="col-span-1 row-span-1 overflow-hidden border-none bg-gradient-to-br from-purple-50 to-purple-100 shadow-lg transition-all hover:shadow-xl dark:from-purple-900 dark:to-purple-800">
          <CardHeader className="relative pb-2">
            <CardTitle className="text-xl font-bold text-purple-700">
              Servicios
            </CardTitle>
            <CardDescription className="text-sm text-purple-700 dark:text-purple-300">
              Ofrezco soluciones en desarrollo web, diseño UI/UX, consultoría
              tecnológica y capacitación profesional personalizada.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative flex h-40 items-center justify-center p-6">
            <Link
              href="/services"
              className="pointer-events-none text-center text-xl font-medium text-purple-800 dark:text-purple-200"
            >
              Conoce mis servicios
            </Link>
          </CardContent>
          <Pointer>
            <motion.div
              animate={{
                scale: [0.8, 1, 0.8],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Layers className="text-purple-800" />
            </motion.div>
          </Pointer>
        </Card>

        <Card className="col-span-1 row-span-1 overflow-hidden border-none bg-gradient-to-br from-green-50 to-green-100 shadow-lg transition-all hover:shadow-xl dark:from-green-900 dark:to-green-800">
          <CardHeader className="relative pb-2">
            <CardTitle className="text-xl font-bold text-green-800">
              Proyectos
            </CardTitle>
            <CardDescription className="text-sm text-green-700 dark:text-green-300">
              Explora mi portafolio de trabajos, donde combino creatividad e
              innovación para lograr soluciones impactantes.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative flex h-40 items-center justify-center p-6">
            <Link
              href="/projects"
              className="pointer-events-none text-center text-xl font-medium text-green-800 dark:text-green-200"
            >
              Ver mis proyectos
            </Link>
          </CardContent>
          <Pointer>
            <motion.div
              animate={{
                scale: [0.8, 1, 0.8],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="text-2xl">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3h7v7H3V3zm11 0h7v7h-7V3zm0 11h7v7h-7v-7zm-11 0h7v7H3v-7z"
                    fill="#22c55e"
                  />
                </svg>
              </div>
            </motion.div>
          </Pointer>
        </Card>
      </div>
      {isInView ? (
        <div className="justify-center flex flex-col  w-full items-center space-y-4 text-[24px] text-slate-800 text-center">
          <div className="w-full hidden sm:flex flex-col  items-center space-y-4">
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.05}
              staggerFrom="first"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
              }}
            >
              {`Gracias por llegar hasta aquí`}
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.05}
              staggerFrom="last"
              reverse={true}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
                delay: 1.5,
              }}
            >
              {`Espero que hallas disfrutado`}
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.05}
              staggerFrom="center"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
                delay: 3,
              }}
            >
              {`Si te gusto lo que viste`}
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.05}
              staggerFrom={5}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
                delay: 4,
              }}
            >
              {`No dudes en contactarme`}
            </VerticalCutReveal>
          </div>
        </div>
      ) : (
        <div className="w-full hidden sm:flex  sm:h-[276px]"></div>
      )}
      <span className="text-sm text-slate-500 mt-10">Mis Redes sociales</span>
      <div className="flex flex-wrap items-center justify-center space-x-3 pt-8 w-full gap-4">
        {SOCIAL_LINKS.map((link) => (
          <MagneticSocialLink key={link.label} link={link.link}>
            {link.label}
          </MagneticSocialLink>
        ))}
      </div>
    </div>
  );
};

export default Contacto;

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  );
}
