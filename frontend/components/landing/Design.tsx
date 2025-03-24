import React from "react";
import Iphone15Pro from "../magicui/iphone-15-pro";

const Design = () => {
  return (
    <div className="w-full mx-auto maxScreen mt-20 md:mt-20 md:pt-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-around gap-10">
        <div>
          <Iphone15Pro
            className="h-[300px] md:h-auto max-h-[500px]"
            src="/images/landing/phone.webp"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around gap-10">
          <div className="space-y-6">
            <h2 className="title">
            Diseño <span className="text-slate-800">UI/UX</span>
            </h2>
            <p className="paragraph">
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
