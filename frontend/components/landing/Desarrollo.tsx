"use client";
import React, { useRef } from "react";
import { AnimatedSpan, Terminal, TypingAnimation } from "../magicui/terminal";
import { useInView } from "framer-motion";

const Desarrollo = () => {
  const ref = useRef<any>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <div className="w-full mx-auto" ref={ref}>
      <div className="flex flex-col md:flex-row items-center justify-around gap-10">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Desarrollo <span className="text-slate-800">Software</span>
          </h2>
          <p className="text-lg text-slate-700 max-w-lg">
            Construyo soluciones digitales eficientes y escalables utilizando
            las últimas tecnologías. Mi enfoque está en crear código limpio,
            mantenible y de alto rendimiento.
          </p>
        </div>
        {/* este div */}
        <div className="sm:w-[345px] min-h-[400px] w-full">
          {isInView && (
            <Terminal>
              <TypingAnimation>
                &gt; pnpm dlx shadcn@latest init
              </TypingAnimation>

              <AnimatedSpan delay={1500} className="text-green-500">
                <span>✔ Preflight checks.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={2000} className="text-green-500">
                <span>✔ Verifying framework. Found Next.js.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={2500} className="text-green-500">
                <span>✔ Validating Tailwind CSS.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={3000} className="text-green-500">
                <span>✔ Validating import alias.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={3500} className="text-green-500">
                <span>✔ Writing components.json.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={4000} className="text-green-500">
                <span>✔ Checking registry.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={4500} className="text-green-500">
                <span>✔ Updating tailwind.config.ts</span>
              </AnimatedSpan>

              <AnimatedSpan delay={5000} className="text-green-500">
                <span>✔ Updating app/globals.css</span>
              </AnimatedSpan>

              <AnimatedSpan delay={5500} className="text-green-500">
                <span>✔ Installing dependencies.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={6000} className="text-blue-500">
                <span>ℹ Updated 1 file:</span>
                <span className="pl-2">- lib/utils.ts</span>
              </AnimatedSpan>

              <TypingAnimation delay={6500} className="text-muted-foreground">
                Success! Project initialization completed.
              </TypingAnimation>

              <TypingAnimation delay={7000} className="text-muted-foreground">
                You may now add components.
              </TypingAnimation>
            </Terminal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Desarrollo;
