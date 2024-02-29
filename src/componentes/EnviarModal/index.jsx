import React from "react";
import { IoIosSend, IoMdClose } from "react-icons/io";
import * as Dialog from "@radix-ui/react-dialog";

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
          <Dialog.Content className=" w-full max-w-[350px] sm:max-w-[540px] bg-white rounded-lg">
            <div className="flex justify-between items-center px-3 py-6">
              <h3 className="text-xl font-semibold text-gray-600">
                Enviar publicação de {nome}
              </h3>
              <Dialog.Close>
                <IoMdClose className="text-gray-600 text-2xl" />
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
