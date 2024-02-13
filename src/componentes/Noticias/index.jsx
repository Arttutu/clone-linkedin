import React, { useState } from "react";
import { BsInfoSquareFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import noticias from "./noticias.json";

export default function Noticias() {
  const [exibirMais, setExibirMais] = useState(true);

  function handleButtonNoticias() {
    setExibirMais(!exibirMais);
  }

  return (
    <section className="w-[300px] h-full rounded-lg bg-white mt-6 hidden lg:block">
      <div className="flex justify-between items-center p-2">
        <span className="font-semibold text-base text-gray-600">
          LinkedIn Notícias
        </span>
        <BsInfoSquareFill />
      </div>
      <div className="p-2 flex items-center justify-center flex-col">
        <ul className="flex flex-col justify-center gap-2 list-disc">
          {noticias
            .filter((item) => exibirMais || item.id)
            .map((item, index) => (
              <React.Fragment key={index}>
                <li className="text-sm text-gray-600 font-bold cursor-pointer">
                  {item.titulo}
                </li>
                <span className="text-xs text-gray-400 font-semibold text-nowrap">
                  {item.tempo_decorrido}
                </span>
              </React.Fragment>
            ))}
        </ul>
        <button
          type="button"
          className="flex items-center justify-center gap-4 text-gray-600 text-sm p-2 hover:bg-gray-200"
          onClick={handleButtonNoticias}
        >
          Exibir {exibirMais ? "menos" : "mais"}
          <IoIosArrowDown className="text-xl text-gray-600 hover:bg-gray-200 hover:rounded-full" />
        </button>
      </div>
    </section>
  );
}
