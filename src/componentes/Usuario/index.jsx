import React, { useEffect, useState } from "react";
import { FaFlag } from "react-icons/fa";
import { IoIosPeople, IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import foto from "./logo_avatar.jpeg";
import banner from "./banner.jpg";
export default function Usuario() {
  const [recentes, SetRecentes] = useState(false);
  const [grupos, SetGrupos] = useState(false);
  const [exibir_mais, Setexibir_mais] = useState(true);
  function HandleRecentes() {
    SetRecentes(!recentes);
  }
  function HandleGrupos() {
    SetGrupos(!grupos);
  }
  function HandleExibirMais() {
    if (window.innerWidth < 640) {
      Setexibir_mais(!exibir_mais);
    } else {
      Setexibir_mais(true);
    }
  }
  //escuta o tamano da tela com o evento resize removo depois
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 640) {
        Setexibir_mais(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <aside className="flex  flex-col w-full gap-2 sm:w-56">
        <div className="bg-white  sm:rounded-lg sm:mt-6">
          <div className="relative">
            <div className="">
              <img
                src={banner}
                className="w-full h-14 top-0 sm:rounded-t-md"
                alt="banner da foto de perfil"
              />
            </div>
            <img
              className="w-[72px] h-[72px] rounded-full z-10 mx-auto absolute  -translate-x-1/2 left-1/2 top-8 "
              src={foto}
              alt="foto de perfil"
            />
            <h2 className="text-base  text-center  font-semibold  mt-14 sm:mt-10  p-2 hover:underline">
              Arthur Gomes
            </h2>
            <p className="text-xs text-center pb-4 text-gray-600">
              Desenvolvedor | React | | JavaScript | Tailwind |
              Styled-Componetes | Figma | Github
            </p>
          </div>
          {exibir_mais ? (
            <>
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
                    399
                  </p>
                </div>
              </div>
              <div className=" border-t flex flex-col gap-2 px-2 py-4 hover:bg-gray-200 transition-all">
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
              <div className=" border-t flex items-center gap-2 p-3 hover:bg-gray-200 transition-all">
                <FaFlag className="text-xs text-gray-600" />
                <span className="text-xs text-gray-600 font-semibold ">
                  Meus itens
                </span>
              </div>
              <div className="bg-white rounded-md flex flex-col gap-4 ">
                <div className="flex flex-col gap-2   px-3 pt-3 group">
                  <div className="flex items-center justify-between group">
                    <h3 className="text-xs text-gray-600 font-semibold ">
                      Recentes
                    </h3>
                    <IoIosArrowDown
                      className="hidden text-xl text-gray-600  group-hover:block hover:bg-gray-200 hover:rounded-full "
                      onClick={HandleRecentes}
                    />
                  </div>
                  {recentes ? (
                    <div className="flex items-center gap-2 hover:bg-gray-200 ">
                      <IoIosPeople className="text-gray-600 " />
                      <p className=" text-xs text-gray-600">JavaScript</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col px-3  gap-2 group">
                  <div className="flex items-center justify-between group">
                    <h3 className="text-xs text-blue-600 font-semibold group-hover:underline ">
                      Grupos
                    </h3>
                    <IoIosArrowDown
                      className="hidden text-xl text-gray-600  group-hover:block hover:bg-gray-200 hover:rounded-full "
                      onClick={HandleGrupos}
                    />
                  </div>
                  {grupos ? (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 hover:bg-gray-200 ">
                        <IoIosPeople className="text-gray-600 " />
                        <p className=" text-xs text-gray-600">JavaScript</p>
                      </div>
                      <div className="flex items-center gap-2 hover:bg-gray-200 ">
                        <p className=" text-xs text-gray-600 pl-6">
                          Vizualizar todos
                        </p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex justify-between px-3 items-center group">
                  <h3 className="text-xs text-blue-600 font-semibold  group-hover:underline ">
                    Eventos
                  </h3>
                  <FiPlus className="text-gray-600 text-xl hover:bg-gray-200 hover:rounded-full " />
                </div>
                <div>
                  <div className="border-b-2 pb-4 px-3">
                    <h3 className="text-xs text-blue-600 font-semibold  hover:underline ">
                      Hashtags Seguidas
                    </h3>
                  </div>
                  <div className=" flex items-center hover:bg-gray-200  w-full h-12 ">
                    <h3 className="text-gray-600 text-sm mx-auto font-semibold">
                      Descubra mais
                    </h3>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
        <button
          type="button"
          className=" sm:hidden flex items-center justify-center gap-4 text-gray-600 text-sm"
          onClick={HandleExibirMais}
        >
          Exibir {exibir_mais ? "menos" : "mais"}
          <IoIosArrowDown className="text-xl text-gray-600 hover:bg-gray-200 hover:rounded-full" />
        </button>
      </aside>
    </>
  );
}
