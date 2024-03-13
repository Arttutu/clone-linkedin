import React from "react";
import logo from "../Usuario/logo_avatar.svg";
import { IoMdClose, IoIosArrowDown } from "react-icons/io";
import { FaCalendarDays } from "react-icons/fa6";
import { GoFileMedia } from "react-icons/go";
import { FaNewspaper } from "react-icons/fa6";
import EventosModal from "../EventosModal";
import foto from "../IconeNav/logo_avatar.svg";
import * as Dialog from "@radix-ui/react-dialog";

export default function PublicacaoPrincipal() {
  return (
    <section className="  bg-white sm:rounded-lg sm:mt-6 p-2 shadow-sm">
      <Dialog.Root>
        <div className="flex items-center gap-2">
          <img
            src={logo}
            className="w-[48px] h-[48px] rounded-full"
            alt="foto de perfil"
          ></img>
          <Dialog.Trigger className="w-full">
            <button className="text-sm text-left text-gray-400 font-semibold rounded-3xl p-[12px] border border-gray-400 w-full hover:bg-gray-200 transition-all">
              Começar Publicação
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 flex justify-center items-center">
              <Dialog.Content className="  h-[500px] w-[350px] sm:w-[744px] p-4 bg-white rounded-lg">
                <div className="flex justify-between items-center mt-2 ">
                  <div className=" flex gap-2 items-center">
                    <img src={foto} className="w-[56px] h-[56px]" />
                    <div className="flex flex-col">
                      <div className="flex gap-2 items-center">
                        <h2 className="font-bold text-lg ">Ana Clara</h2>
                        <IoIosArrowDown className="text-lg" />
                      </div>
                      <span className="text-sm text-gray-600">
                        Publicar em todos
                      </span>
                    </div>
                  </div>
                  <Dialog.Close>
                    <IoMdClose className="w-[24px] h-[24px]" />
                  </Dialog.Close>
                </div>
                <input
                  placeholder="Sobre o que você quer falar ?"
                  className="placeholder:text-xl placeholder:text-gray-600 w-full mt-6 focus:outline-none text-lg text-gray-600 flex-wrap"
                ></input>
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </div>
      </Dialog.Root>

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
