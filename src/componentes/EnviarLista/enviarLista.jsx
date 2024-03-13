import React, { useState } from "react";
export default function EnviarLista({
  index,
  nome,
  cargo,
  foto,
  HandleMarcado,
}) {
  return (
    <div className="flex flex-col mt-2 gap-2">
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2 ">
          <img src={foto} className="w-[48px] h-[48px] rounded-full"></img>
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-start">
              <h3 className="text-lg text-gray-600 font-semibold ">{nome}</h3>
              <p className="text-xs text-gray-600 ">{cargo}</p>
            </div>
          </div>
        </div>
        <input type="checkbox" onClick={() => HandleMarcado(index)}></input>
      </div>
      <div className="border-[0.5px] w-full text-gray-600"></div>
    </div>
  );
}
