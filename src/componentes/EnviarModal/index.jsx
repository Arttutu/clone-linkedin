import React from "react";
import { IoIosSend, IoMdClose } from "react-icons/io";
import * as Dialog from "@radix-ui/react-dialog";
import EnviarLista from "../EnviarLista/enviarLista";
import Lista from "./lista.json";
export default function EnviarModal({ nome }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <a
          href="#"
          className="text-gray-600 text-base flex items-center  gap-2 hover:bg-gray-200 hover:p-[4px] hover:rounded-md transition-all"
        >
          <IoIosSend className="text-base font-bold" />
          <span className="hidden sm:block">Enviar</span>
        </a>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <div className="mt-10 sm:mt-0 fixed inset-0 flex items-center justify-center z-50">
          <Dialog.Content className=" w-full max-w-[350px] sm:max-w-[640px] p-2 bg-white rounded-lg">
            <div className="flex justify-between items-center px-4 py-1 ">
              <h3 className="text-xl font-semibold text-gray-600">
                Enviar publicação de {nome}
              </h3>
              <Dialog.Close>
                <IoMdClose className="text-gray-600 text-2xl" />
              </Dialog.Close>
            </div>
            <div className="p-2 px-4">
              <input
                placeholder="Digitar nome"
                className="w-full border-[1px] mt-2 border-gray-600 rounded-md focus:outline-none placeholder:px-4"
              />
              {Lista.map((item) => {
                return (
                  <EnviarLista
                    nome={item.nome}
                    cargo={item.cargo}
                    foto={item.foto_autor}
                  />
                );
              })}
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
