import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="w-[300px] rounded-lg mt-2  hidden lg:block ">
      <div className=" flex flex-col gap-2 items-center justify-center">
        <div className="flex gap-2">
          <span className="text-gray-600 text-xs hover:text-blue-600 hover:underline transition-all">
            Sobre
          </span>
          <span className="text-gray-600 text-xs hover:text-blue-600 hover:underline transition-all">
            Acessibilidade
          </span>
          <span className="text-gray-600 text-xs hover:text-blue-600 hover:underline transition-all">
            Central de Ajuda
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-600 text-xs hover:text-blue-600 hover:underline transition-all">
            Termos e Privacidade
          </span>
          <IoMdArrowDropdown />
        </div>
        <div className="flex gap-2">
          <span className="text-gray-600 text-xs hover:text-blue-600 hover:underline transition-all">
            Preferências de anúcios
          </span>
          <span className="text-gray-600 text-xs hover:text-blue-600 hover:underline transition-all">
            Publicidade
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-600 text-xs hover:text-blue-600 hover:underline transition-all">
            Serviços empresariais
          </span>
          <IoMdArrowDropdown />
        </div>
        <div className="flex gap-2">
          <span className="text-gray-600 text-xs hover:text-blue-600 hover:underline transition-all">
            Baixe o aplicativo do LinkedIn
          </span>
          <span className="text-gray-600 text-xs hover:text-blue-600 hover:underline transition-all">
            Mais
          </span>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center">
            <span className="text-blue-600 text-xs hover:text-blue-600 hover:underline transition-all">
              Linked
            </span>
            <FaLinkedin className="text-blue-600 text-sm" />
          </div>
          <span className="text-gray-600 font-semibold text-xs hover:text-blue-600 hover:underline transition-all">
            LinkedIn Corporation © 2024
          </span>
        </div>
      </div>
    </div>
  );
}
