import React from "react";
import { FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import * as Dialog from "@radix-ui/react-dialog";
import Formulario from "../Formulario";

export default function EventosModal({ publicacao }) {
  console.log(publicacao);
  return (
    <Dialog.Root className="outline-none">
      {publicacao ? (
        <Dialog.Trigger className="text-xs sm:text-sm text-gray-500 font-semibold">
          Evento
        </Dialog.Trigger>
      ) : (
        <Dialog.Trigger>
          <FiPlus className="text-gray-600 text-xl hover:bg-gray-200 cursor-pointer hover:rounded-full" />
        </Dialog.Trigger>
      )}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <div className="mt-10 sm:mt-0 fixed inset-0 flex items-center justify-center z-50">
          <Dialog.Content className=" w-full max-w-[350px] sm:max-w-[540px] bg-white rounded-lg">
            <div className="flex justify-between items-center px-3 py-6">
              <h3 className="text-xl font-semibold text-gray-600">
                Criar evento
              </h3>
              <Dialog.Close>
                <IoMdClose className="text-gray-600 text-2xl" />
              </Dialog.Close>
            </div>
            <Formulario />
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
