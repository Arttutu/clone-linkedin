import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { CgLayoutGridSmall } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TbPointFilled } from "react-icons/tb";
import IconeNav from "../IconeNav";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Cabecalho() {
  return (
    <nav className="w-full h-full justify-evenly  max-w-6xl mx-auto flex items-center sm:items-center sm:justify-between p-2">
      <div className="flex  justify-center items-center gap-8 sm:gap-2">
        <FaLinkedin className="w-[41px] h-[41px] text-blue-600" />
        <div className="md:bg-slate-100 pl-2 flex gap-2 items-center rounded-md">
          <FaMagnifyingGlass className="text-lg text-black lg:text-sm " />
          <input
            id="search"
            className=" hidden md:block sm:w-60 sm:h-[34px] focus:outline-none  bg-slate-100 rounded-md placeholder:text-gray-600 placeholder:text-sm "
            placeholder="Pesquisar"
          />
        </div>
      </div>
      <IconeNav />
      <div className="flex items-center  gap-1 sm:gap-8">
        <div className="bg-gray-600 w-1 h-full"></div>
        <div className="flex flex-col items-center  ">
          <CgLayoutGridSmall className="text-4xl text-gray-600 cursor-pointer hover:text-black transition-all hidden md:block" />
          <div className="flex items-center gap-1">
            <span className="text-gray-600 text-xs hidden md:block">
              Para negócios
            </span>
            <IoMdArrowDropdown className="text-gray-600 text-lg hidden md:block" />
            <div className="block md:hidden">
              <div className="flex gap">
                <TbPointFilled className="text-xs text-gray-600" />
                <TbPointFilled className="text-xs text-gray-600" />
                <TbPointFilled className="text-xs text-gray-600" />
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-yellow-700 text-center underline text-xs hidden sm:block w-36">
          Reative Premium: 50% de desconto
        </h2>
      </div>
    </nav>
  );
}
