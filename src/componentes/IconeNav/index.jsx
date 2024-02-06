import React from "react";
import { IoHomeSharp, IoPeople, IoBagRemoveSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaBell } from "react-icons/fa6";
import eu from "./logo-avatar2.jpeg";
export default function IconeNav() {
  return (
    <div className="flex items-center  gap-4 sm:gap-6">
      <div className="flex flex-col items-center">
        <IoHomeSharp className="text-2xl text-gray-600 cursor-pointer hover:text-black transition-all" />
        <span className="text-gray-600 text-xs hidden md:block">Inicio</span>
      </div>
      <div className="flex flex-col items-center">
        <IoPeople className="text-2xl text-gray-600 cursor-pointer hover:text-black transition-all" />
        <span className="text-gray-600 text-xs hidden md:block">
          Minha Rede
        </span>
      </div>
      <div className="flex flex-col items-center">
        <IoBagRemoveSharp className="text-2xl text-gray-600 cursor-pointer hover:text-black transition-all" />
        <span className="text-gray-600 text-xs hidden md:block">Vagas</span>
      </div>
      <div className="flex flex-col items-center">
        <AiFillMessage className="text-2xl text-gray-600 cursor-pointer hover:text-black transition-all" />
        <span className="text-gray-600 text-xs hidden md:block">Mensagens</span>
      </div>
      <div className="flex flex-col items-center">
        <FaBell className="text-2xl text-gray-600 cursor-pointer hover:text-black transition-all" />
        <span className="text-gray-600 text-xs hidden md:block">
          Notificações
        </span>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={eu}
          className=" rounded-full w-8 h-8 cursor-pointer hover:text-black transition-all"
        />
        <span className="text-gray-600 text-xs  hidden md:block">Eu</span>
      </div>
    </div>
  );
}
