import React from "react";
import { FaRegSmile } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";

export default function Comentario({ foto }) {
  return (
    <div className="flex items-start gap-2 w-full p-4">
      <img
        src={foto}
        className="w-[48px] h-[48px] rounded-full"
        alt=" foto da pessoa que comentou "
      ></img>
      <div className=" flex  flex-col w-full gap-2">
        <div className="bg-gray-100 rounded-md w-full h-auto">
          <div className=" flex  flex-col gap-1 p-2">
            <div className="flex gap-1 items-center">
              <h4 className="text-black/80 text-sm font-bold">
                {" "}
                aqui vai o nome
              </h4>
              <TbPointFilled className="text-xs text-gray-600" />
              <span>numero</span>
            </div>
            <p className="text-black/80 text-sm">cargo</p>
            <div className="flex items-center gap-1"></div>
            <p className="text-black/80 text-sm">nao sei</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-gray-600 text-xs">Gostei</span>
          <TbPointFilled />
          <FaRegSmile />
          <span className="text-gray-600 text-xs">1 </span>
          <span className="text-gray-600 text-xs">Responder</span>
        </div>
      </div>
    </div>
  );
}
