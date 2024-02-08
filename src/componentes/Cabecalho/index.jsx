import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { CgLayoutGridSmall } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import IconeNav from "../IconeNav";

export default function Cabecalho() {
  return (
    <nav className="w-full h-full justify-between  max-w-6xl mx-auto flex items-center sm:items-center sm:justify-between p-2">
      <div className="flex  justify-center items-center gap-8 sm:gap-2">
        <FaLinkedin className="text-4xl text-blue-600" />
        <input
          id="search"
          className=" hidden md:block sm:w-60 sm:h-8  focus:outline-none pl-10 bg-slate-100 rounded-md placeholder:text-black "
          placeholder="Pesquisar"
        />
        <FaMagnifyingGlass className=" text-2xl text-gray-600  sm:hidden" />
      </div>
      <IconeNav />
      <div className="flex items-center  gap-1 sm:gap-8">
        <div className="bg-gray-600 w-1 h-18"></div>
        <div className="flex flex-col items-center">
          <CgLayoutGridSmall className="text-4xl text-gray-600 cursor-pointer hover:text-black transition-all" />
          <span className="text-gray-600 text-xs  hidden md:block">
            Para negócios
          </span>
        </div>
        <h2 className="text-yellow-700 text-center underline text-sm  hidden sm:block w-36">
          Reative Premium: 50% de desconto
        </h2>
      </div>
    </nav>
  );
}
