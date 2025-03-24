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
    <div className="w-full mt-20 relative lg:pt-20" ref={ref}>
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
