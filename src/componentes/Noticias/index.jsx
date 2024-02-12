import React from "react";
import { BsInfoSquareFill } from "react-icons/bs";
import noticias from "./noticias.json";

export default function Noticias() {
  return (
    <section className="w-[300px] h-full rounded-lg bg-white mt-6 hidden lg:block ">
      <div className="flex justify-between items-center p-2">
        <span className="font-semibold text-base text-gray-600">
          LinkedIn Notícias
        </span>
        <BsInfoSquareFill />
      </div>
      <div className="p-2 flex items-center justify-center ">
        <ul className="  flex flex-col justify-center gap-2 list-disc">
          {noticias.map((item) => {
            return (
              <>
                <li
                  key={item.titulo}
                  className="text-sm text-gray-600 font-bold  cursor-pointer "
                >
                  {item.titulo}
                </li>
                <span className="text-xs text-gray-400 font-semibold text-nowrap">
                  {item.tempo_decorrido}
                </span>
              </>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
