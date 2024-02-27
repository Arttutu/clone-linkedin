import React from "react";
import foto from "../Usuario/logo_avatar.svg";
import banner from "../Usuario/banner.jpg";
export default function UsuarioPrincipal() {
  return (
    <div className="bg-white  sm:rounded-t-lg sm:mt-6 shadow-sm">
      <div className="relative">
        <div className="">
          <img
            src={banner}
            className="w-full h-14 top-0 sm:rounded-t-md"
            alt="banner da foto de perfil"
          />
        </div>
        <img
          className="w-[72px] h-[72px] rounded-full z-5 mx-auto absolute  -translate-x-1/2 left-1/2 top-8 "
          src={foto}
          alt="foto de perfil"
        />
        <h2 className="text-base  text-center  font-semibold  mt-14 sm:mt-10  p-2 hover:underline">
          Ana Clara
        </h2>
        <p className="text-xs text-center pb-4 text-gray-600">
          Desenvolvedor | React | | JavaScript | Tailwind | Styled-Componetes |
          Figma | Github
        </p>
      </div>
    </div>
  );
}
