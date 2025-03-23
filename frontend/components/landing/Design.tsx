import React from "react";
import Iphone15Pro from "../magicui/iphone-15-pro";

const Design = () => {
  return (
    <div className="w-full mx-auto mt-20 pt-20">
      <div className="flex flex-col md:flex-row items-center justify-around gap-10">
        <div>
          <Iphone15Pro
            className="max-h-[500px]"
            src="/images/landing/phone.webp"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around gap-10">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Diseño <span className="text-slate-800">UI/UX</span>
            </h2>
            <p className="text-lg text-slate-700 max-w-lg">
            Creo interfaces intuitivas y atractivas para todo tipo de plataformas. Desde landing pages que convierten,
            dashboards funcionales, hasta aplicaciones móviles centradas en la experiencia del usuario.
            </p>
          </div>
          {/* este div */}
        </div>
      </div>
    </div>
  );
};

export default Design;
