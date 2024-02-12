import React from "react";
import logo from "../Usuario/logo_avatar.jpeg";
import { FaCalendarDays } from "react-icons/fa6";
import { GoFileMedia } from "react-icons/go";
import { FaNewspaper } from "react-icons/fa6";
import EventosModal from "../EventosModal";
export default function Principal() {
  return (
    <>
      <section className="w-full max-w-[544px] h-full bg-white sm:rounded-lg sm:mt-6 p-2">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            className="w-[48px] h-[48px] rounded-full"
            alt="foto de perfil"
          ></img>
          <button className="text-sm text-left text-gray-700 rounded-3xl p-[16px] border border-gray-400 w-full hover:bg-gray-200 transition-all">
            Começar Publicação
          </button>
        </div>
        <div className="flex justify-around w-full mt-4 ">
          <a href="">
            <button className="flex gap-2 items-center transition-all hover:bg-gray-200 p-4 rounded-md">
              <GoFileMedia className="text-xl text-blue-600" />
              <span className="text-sm text-gray-500 font-semibold">Mídia</span>
            </button>
          </a>
          <a href="">
            <button className="flex gap-2 items-center transition-all hover:bg-gray-200 p-4 rounded-md">
              <FaCalendarDays className="text-xl text-orange-600" />
              <span className="text-sm text-gray-500 font-semibold">
                Evento
              </span>
            </button>
          </a>
          <a href="https://www.linkedin.com/article/new/">
            <button className="flex gap-2 items-center transition-all hover:bg-gray-200 p-4 rounded-md ">
              <FaNewspaper className="text-xl  text-red-400" />
              <span className="text-sm text-gray-500 font-semibold">
                Escrever Artigo
              </span>
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
