import React from "react";
import { FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import * as Dialog from "@radix-ui/react-dialog";
import Formulario from "../Formulario";

export default function EventosModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <FiPlus className="text-gray-600 text-xl hover:bg-gray-200 cursor-pointer hover:rounded-full " />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed  bg-black/50 " />
        <Dialog.Content className="  left-1/2 top-1/2 -translate-x-1/2 -translate-y-80 z-10 absolute  max-w-[540px] w-full  bg-white rounded-lg">
          <div className="flex justify-between items-center  px-3 py-6">
            <h3 className="text-xl font-semibold  text-gray-600 ">
              Criar evento
            </h3>
            <Dialog.Close>
              <IoMdClose className="size-6  text-gray-600" />
            </Dialog.Close>
          </div>
          <Formulario />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
