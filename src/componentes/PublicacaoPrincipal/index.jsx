import React from "react";
import logo from "../Usuario/logo_avatar.svg";
import { FaCalendarDays } from "react-icons/fa6";
import { GoFileMedia } from "react-icons/go";
import { FaNewspaper } from "react-icons/fa6";
export default function PublicacaoPrincipal() {
  return (
    <section className="  bg-white sm:rounded-lg sm:mt-6 p-2 shadow-sm">
      <div className="flex items-center gap-2">
        <img
          src={logo}
          className="w-[48px] h-[48px] rounded-full"
          alt="foto de perfil"
        ></img>
        <button className="text-sm text-left text-gray-400 font-semibold rounded-3xl p-[12px] border border-gray-400 w-full hover:bg-gray-200 transition-all">
          Começar Publicação
        </button>
      </div>
      <div className="flex justify-around w-full mt-4 ">
        <a href="">
          <button className="flex gap-2 items-center transition-all hover:bg-gray-200 p-4 rounded-md">
            <GoFileMedia className="text-xl text-blue-600" />
            <span className="text-xs  sm:text-sm  text-gray-500 font-semibold">
              Mídia
            </span>
          </button>
        </a>
        <a href="">
          <button className="flex gap-2 items-center transition-all hover:bg-gray-200 p-4 rounded-md">
            <FaCalendarDays className="text-xl text-orange-600" />
            <span className="text-xs sm:text-sm text-gray-500 font-semibold">
              Evento
            </span>
          </button>
        </a>
        <a href="https://www.linkedin.com/article/new/">
          <button className="flex gap-2 items-center transition-all hover:bg-gray-200 p-4 rounded-md ">
            <FaNewspaper className="text-xl  text-red-400" />
            <span className="text-xs sm:text-sm text-gray-500 font-semibold">
              Escrever artigo
            </span>
          </button>
        </a>
      </div>
    </section>
  );
}
