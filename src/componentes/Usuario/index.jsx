import React from "react";
import { FaFlag } from "react-icons/fa";
import foto from "./logo_avatar.jpeg";
import banner from "./banner.jpg";
export default function Usuario() {
  return (
    <>
      <section className="flex flex-col gap-1">
        <div className="bg-white rounded-lg w-56  h-auto mt-6 flex flex-col ">
          <div className=" relative">
            <div className="">
              <img
                src={banner}
                className="w-full   top-0 rounded-t-md"
                alt="banner da foto de perfil"
              />
            </div>
            <img
              className=" w-1/3 h-1/3 rounded-full z-10 mx-auto absolute  -translate-x-1/2 left-1/2 top-8"
              src={foto}
              alt="foto de perfil"
            />
            <h2 className="text-base  text-center  font-semibold  mt-10 mb-2 p-2 hover:underline">
              Arthur Gomes
            </h2>
            <p className="text-xs text-center p-2 text-gray-600">
              Desenvolvedor | React | | JavaScript | Tailwind |
              Styled-Componetes | Figma | Github
            </p>
          </div>
          <div className=" border-t flex gap-2  p-2 flex-col  ">
            <div className="flex gap-4  hover:bg-gray-200 transition-all">
              <p className="text-xs text-gray-600 hover:underline cursor-pointer ">
                Vizualização de perfil
              </p>
              <p className="text-sm text-blue-600 hover:underline cursor-pointer">
                12
              </p>
            </div>
            <div className="flex gap-4  hover:bg-gray-200 transition-all">
              <p className="text-xs text-gray-600 hover:underline cursor-pointer ">
                Impressões das publicações
              </p>
              <p className="text-sm text-blue-600 hover:underline cursor-pointer">
                12
              </p>
            </div>
          </div>
          <div className=" border-t flex flex-col gap-2 p-2 hover:bg-gray-200 transition-all">
            <a href="">
              <p className="text-xs text-left  text-gray-600">
                Acesse suas ferramentas e estatísticas exclusivas
              </p>
            </a>
            <a href="">
              <p className="text-xs text-left font-semibold underline  text-gray-600">
                Reative seu Premium: 50% de desconto
              </p>
            </a>
          </div>
          <div className=" border-t flex gap-2 p-3 hover:bg-gray-200 transition-all">
            <FaFlag />
            <span className="text-xs font-semibold ">Meus itens</span>
          </div>
        </div>
        <div className="bg-white rounded-md w-56  h-72 mt-6">teste</div>
      </section>
    </>
  );
}
