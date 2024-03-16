import React from "react";
import logo from "../Usuario/logo_avatar.svg";
import { IoMdClose, IoIosArrowDown } from "react-icons/io";
import { MdStickyNote2 } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
import { GoFileMedia } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";

import { FaCalendarDays } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import foto from "../IconeNav/logo_avatar.svg";
import * as Dialog from "@radix-ui/react-dialog";
export default function PublicacaoModal() {
  return (
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
            <Dialog.Content className="  h-[500px] w-[350px] sm:w-[744px]  bg-white rounded-lg">
              <div className="flex flex-col h-full justify-between">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center mt-2 p-4 ">
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
                    className="p-4 placeholder:text-xl placeholder:text-gray-600/60 w-full mt-6 focus:outline-none text-lg text-gray-600 flex-wrap"
                  ></input>
                </div>
                <div className="flex flex-col items-start gap-2 ">
                  <div className="pl-6">
                    <MdOutlineEmojiEmotions className="w-[32px] h-[32px] text-gray-600/80" />
                  </div>

                  <div className=" flex items-center gap-2 p-4 ">
                    <div className="p-2 bg-gray-100  rounded-full w-[48px] h-[48px] flex items-center justify-center">
                      <GoFileMedia className="" />
                    </div>
                    <div className="p-2 bg-gray-100  rounded-full w-[48px] h-[48px] flex items-center justify-center">
                      <FaCalendarDays className="" />
                    </div>
                    <div className=" p-2 bg-gray-100  rounded-full w-[48px] h-[48px] flex items-center justify-center">
                      <MdStickyNote2 className="" />
                    </div>
                    <div className="p-2 bg-gray-100  rounded-full w-[48px] h-[48px] flex items-center justify-center">
                      <TbPointFilled className="w-[12px] h-[12px]" />
                      <TbPointFilled className="w-[12px] h-[12px]" />
                      <TbPointFilled className="w-[12px] h-[12px]" />
                    </div>
                  </div>
                  <div className="w-full  border-t-2 border-gray-200" />
                  <div className=" flex gap-4  justify-end items-center w-full p-4">
                    <IoTimeOutline className="text-2xl text-gray-600" />
                    <button className="rounded-2xl max-w-[80px] p-2 text-sm bg-gray-200 text-gray-400 font-semibold">
                      Publicar
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </div>
    </Dialog.Root>
  );
}
