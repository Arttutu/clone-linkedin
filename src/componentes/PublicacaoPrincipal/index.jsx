import React from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { GoFileMedia } from "react-icons/go";
import { FaNewspaper } from "react-icons/fa6";
import EventosModal from "../EventosModal";
import PublicacaoModal from "../PublicacaoModal";

export default function PublicacaoPrincipal() {
  return (
    <section className="  bg-white sm:rounded-lg sm:mt-6 p-2 shadow-sm">
      <PublicacaoModal />
      <div className="flex justify-around w-full mt-4 ">
        <a href="">
          <button className="flex gap-2 items-center transition-all hover:bg-gray-200 p-4 rounded-md">
            <GoFileMedia className="text-xl text-blue-600" />
            <span className="text-xs  sm:text-sm  text-gray-500 font-semibold">
              Mídia
            </span>
          </button>
        </a>
        <div className="flex gap-2 items-center transition-all hover:bg-gray-200 p-4 rounded-md">
          <FaCalendarDays className="text-xl text-orange-600" />
          <EventosModal publicacao />
        </div>
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
