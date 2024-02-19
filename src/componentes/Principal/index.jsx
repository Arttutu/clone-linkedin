import React from "react";
import logo from "../Usuario/logo_avatar.jpeg";
import { FaCalendarDays } from "react-icons/fa6";
import { GoFileMedia } from "react-icons/go";
import { FaNewspaper } from "react-icons/fa6";
import EventosModal from "../EventosModal";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Principal() {
  return (
    <div className="flex flex-col w-full max-w-[544px] ">
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
      <div className="flex items-center gap-2 m-2">
        <div className="w-full max-w-[300px] sm:max-w-[350px] h-[2px] bg-gray-200"></div>
        <div className="flex items-center gap-2 ">
          <span className="text-xs text-gray-600"> Classificar por:</span>
          <span className="text-xs text-gray-600 flex gap-1 items-center font-bold ">
            Populares
            <Dialog.Root>
              <Dialog.Trigger>
                <IoMdArrowDropdown className="font-bold text-lg" />
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="inset-0 fixed" />
                <Dialog.Content className=" w-[150px] h-[80px] bg-white rounded-lg rounded-tr-none shadow-lg absolute left-[1050px] top-60">
                  <div className="flex flex-col  h-full justify-around">
                    <div className="hover:bg-gray-100 w-full h-[40px] border-l-green-600 border-l-2 flex items-center">
                      <span className="text-gray-600 text-sm font-semibold w-full px-4  ">
                        Populares
                      </span>
                    </div>
                    <div className="hover:bg-gray-100 w-full h-[40px] flex items-center">
                      <span className="text-gray-600 text-sm font-semibold w-full px-4 ">
                        Recentes
                      </span>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </span>
        </div>
      </div>
      <section className="bg-white sm:rounded-lg  p-2"></section>
    </div>
  );
}
