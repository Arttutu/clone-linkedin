import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { CgLayoutGridSmall } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import IconeNav from "../IconeNav";

export default function Cabecalho() {
  return (
    <nav className="container mx-auto flex items-center justify-around p-2">
      <div className="flex items-center gap-2">
        <FaLinkedin className="text-4xl text-blue-600" />
        <label className="w-full m-0 p-0">
          <FaMagnifyingGlass className=" relative text-base  left-3 top-6 text-gray-400" />
          <input
            id="search"
            className="w-64 h-8 pl-10 bg-slate-200 rounded-sm"
            placeholder="Pesquisar"
          />
        </label>
      </div>
      <IconeNav />
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center">
          <CgLayoutGridSmall className="text-4xl text-gray-600 cursor-pointer hover:text-black transition-all" />
          <span className="text-gray-600 text-xs  hidden md:block">
            Para negócios
          </span>
        </div>
        <h2 className="text-yellow-700 underline text-sm  w-36">
          Reative Premium: 50% de desconto
        </h2>
      </div>
    </nav>
  );
}
