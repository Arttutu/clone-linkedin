import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
export default function Footer() {
  return (
    <div className="w-[300px] rounded-lg mt-2  flex flex-col gap-2 items-center justify-center">
      <div className="flex gap-2">
        <span className="text-gray-600 text-xs">Sobre</span>
        <span className="text-gray-600 text-xs">Acessibilidade</span>
        <span className="text-gray-600 text-xs">Central de Ajuda</span>
      </div>
      <div className="flex gap-2">
        <span className="text-gray-600 text-xs">Termos e Privacidade</span>
        <IoMdArrowDropdown />
      </div>
      <div className="flex gap-2">
        <span className="text-gray-600 text-xs">Preferências de anúcios</span>
        <span className="text-gray-600 text-xs">Publicidade</span>
      </div>
      <div className="flex gap-2">
        <span className="text-gray-600 text-xs">Serviços empresariais</span>
        <IoMdArrowDropdown />
      </div>
      <div className="flex gap-2">
        <span className="text-gray-600 text-xs">
          Baixe o aplicativo do LinkedIn
        </span>
        <span className="text-gray-600 text-xs">Mais</span>
      </div>
      <div className="flex gap-2">
        <span className="text-blue-600 text-xs">Linked</span>
        <img></img>
        <span className="text-gray-600 text-xs">
          LinkedIn Corporation © 2024
        </span>
      </div>
    </div>
  );
}
