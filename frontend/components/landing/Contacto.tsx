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
  return (
    <div className="w-full mt-20 relative lg:pt-20 flex flex-col items-center" ref={ref}>
      {isInView && (
        <div className="flex flex-col justify-center w-full items-center space-y-4 text-[24px] text-slate-800">
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
            {`Espero que hallas disfrutado de mi trabajo`}
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
          <div className="flex items-center justify-start space-x-3 pt-8">
            {SOCIAL_LINKS.map((link) => (
              <MagneticSocialLink key={link.label} link={link.link}>
                {link.label}
              </MagneticSocialLink>
            ))}
          </div>
        </div>
      )}
       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-2 w-full maxScreen mt-20">
      <Card className="col-span-1 row-span-1 overflow-hidden border-none bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg transition-all hover:shadow-xl dark:from-slate-900 dark:to-slate-800">
        <CardHeader className="relative pb-2">
          <CardTitle className="text-xl font-bold">Animated Pointer</CardTitle>
          <CardDescription className="text-sm text-slate-600 dark:text-slate-400">
            Animated pointer
          </CardDescription>
        </CardHeader>
        <CardContent className="relative flex h-40 items-center justify-center p-6">
          <span className="pointer-events-none text-center text-xl font-medium text-slate-800 dark:text-slate-200">
            Move your cursor here
          </span>
        </CardContent>
        <Pointer>
          <motion.div
            animate={{
              scale: [0.8, 1, 0.8],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-pink-600"
            >
              <motion.path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="currentColor"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>
        </Pointer>
      </Card>
 
      <Card className="col-span-1 row-span-1 overflow-hidden border-none bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg transition-all hover:shadow-xl dark:from-blue-900 dark:to-blue-800">
        <CardHeader className="relative pb-2">
          <CardTitle className="text-xl font-bold">Colored Pointer</CardTitle>
          <CardDescription className="text-sm text-blue-700 dark:text-blue-300">
            A custom pointer with different color
          </CardDescription>
        </CardHeader>
        <CardContent className="relative flex h-40 items-center justify-center p-6">
          <span className="pointer-events-none text-center text-xl font-medium text-blue-800 dark:text-blue-200">
            Try me out
          </span>
        </CardContent>
        <Pointer className="fill-blue-500" />
      </Card>
 
      <Card className="col-span-1 row-span-1 overflow-hidden border-none bg-gradient-to-br from-purple-50 to-purple-100 shadow-lg transition-all hover:shadow-xl dark:from-purple-900 dark:to-purple-800">
        <CardHeader className="relative pb-2">
          <CardTitle className="text-xl font-bold">Custom Shape</CardTitle>
          <CardDescription className="text-sm text-purple-700 dark:text-purple-300">
            A pointer with a custom SVG shape
          </CardDescription>
        </CardHeader>
        <CardContent className="relative flex h-40 items-center justify-center p-6">
          <span className="pointer-events-none text-center text-xl font-medium text-purple-800 dark:text-purple-200">
            Hover here
          </span>
        </CardContent>
        <Pointer>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" className="fill-purple-500" />
            <circle cx="12" cy="12" r="5" className="fill-white" />
          </svg>
        </Pointer>
      </Card>
 
      <Card className="col-span-1 row-span-1 overflow-hidden border-none bg-gradient-to-br from-green-50 to-green-100 shadow-lg transition-all hover:shadow-xl dark:from-green-900 dark:to-green-800">
        <CardHeader className="relative pb-2">
          <CardTitle className="text-xl font-bold">Emoji Pointer</CardTitle>
          <CardDescription className="text-sm text-green-700 dark:text-green-300">
            Using an emoji as a custom pointer
          </CardDescription>
        </CardHeader>
        <CardContent className="relative flex h-40 items-center justify-center p-6">
          <span className="pointer-events-none text-center text-xl font-medium text-green-800 dark:text-green-200">
            Check this out
          </span>
        </CardContent>
        <Pointer>
          <div className="text-2xl">👆</div>
        </Pointer>
      </Card>
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
