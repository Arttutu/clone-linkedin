import React, { useState } from "react";
import { BsInfoSquareFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import noticias from "./noticias.json";
import logo from "../Usuario/logo_avatar.jpeg";
import { FaLinkedin } from "react-icons/fa";
export default function Noticias() {
  const [exibirMais, setExibirMais] = useState(true);

  function handleButtonNoticias() {
    setExibirMais(!exibirMais);
  }

  return (
    <div className="flex flex-col">
      <section className="w-[300px] rounded-lg bg-white mt-6 hidden lg:block">
        <div className="flex justify-between items-center p-2">
          <span className="font-semibold text-base text-gray-600">
            LinkedIn Notícias
          </span>
          <BsInfoSquareFill />
        </div>
        <div className="flex items-center justify-center flex-col">
          <ul className="flex flex-col justify-center gap-2 list-disc  ">
            {noticias
              .filter((item) => exibirMais || item.id)
              .map((item, index) => (
                <div key={index} className="hover:bg-gray-200  w-full">
                  <li className="text-sm text-gray-600 font-bold cursor-pointer   ">
                    {item.titulo}
                  </li>
                  <span className="text-xs text-gray-400 font-semibold text-nowrap ">
                    {item.tempo_decorrido}
                  </span>
                </div>
              ))}
          </ul>
        </div>
        <div className="p-4">
          <button
            type="button"
            className="flex items-start p-1  gap-2 text-gray-600 rounded-md text-sm  font-semibold hover:bg-gray-200"
            onClick={handleButtonNoticias}
          >
            Exibir {exibirMais ? "menos" : "mais"}
            <IoIosArrowDown className="text-xl text-gray-600 hover:bg-gray-200 hover:rounded-full" />
          </button>
        </div>
      </section>
      <section className="w-[300px]  rounded-lg bg-white mt-6 hidden lg:block p-2">
        <a className="flex flex-col gap-2 items-center justify-center p-4">
          <span className="text-gray-600 text-xs">
            Arthur, enjoy 50% off 2 months of LinkedIn
          </span>
          <span className="text-gray-600 text-xs">Premium!</span>
          <div className="flex gap-2 py-4">
            <img
              src={logo}
              className="w-[72px] h-[72px] rounded-full"
              alt="foto do perfil"
            ></img>
            <FaLinkedin className="w-[76px] h-[76px]  text-yellow-700/50" />
          </div>
          <span className="text-gray-600 text-sm text-center">
            Ivest in your future with this exclusive offer
          </span>
          <button className="text-base text-blue-600 border-2 border-blue-600 p-2 rounded-2xl">
            Get 50% off today
          </button>
        </a>
      </section>
    </div>
  );
}
