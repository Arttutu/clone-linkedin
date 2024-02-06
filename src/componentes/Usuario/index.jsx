import React from "react";
import { FaFlag } from "react-icons/fa";
export default function Usuario() {
  return (
    <>
      <section className="flex flex-col gap-1">
        <div className="bg-white rounded-lg w-56  h-96 mt-6 flex flex-col ">
          <div>teste</div>
          <div className=" border-t p-2 flex gap-2  flex-col  hover:bg-gray-200 transition-all">
            <div className="flex gap-4">
              <p className="text-sm text-gray-600 hover:underline cursor-pointer">
                Vizualização de perfil
              </p>
              <p className="text-sm text-blue-600 hover:underline cursor-pointer">
                12
              </p>
            </div>
            <div className="flex gap-4">
              <p className="text-sm text-gray-600 hover:underline cursor-pointer">
                Impressões das publicações
              </p>
              <p className="text-sm text-blue-600 hover:underline cursor-pointer">
                12
              </p>
            </div>
          </div>
          <div className=" border-t flex flex-col gap-2 p-2 hover:bg-gray-200 transition-all">
            <a href="">
              <p className="text-base text-left  text-gray-600">
                Acesse suas ferramentas e estatísticas exclusivas
              </p>
            </a>
            <a href="">
              <p className="text-sm text-left font-semibold underline  text-gray-600">
                Reative seu Premium: 50% de desconto
              </p>
            </a>
          </div>
          <div className=" border-t flex gap-2 p-3 hover:bg-gray-200 transition-all">
            <FaFlag />
            <span className="text-sm">Meus itens</span>
          </div>
        </div>
        <div className="bg-white rounded-md w-56  h-72 mt-6">teste</div>
      </section>
    </>
  );
}
