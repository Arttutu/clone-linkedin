import React from "react";
import { IoMdClose } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { SlLike } from "react-icons/sl";
import { MdOutlineComment } from "react-icons/md";
import { IoGitCompareSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
export default function Card({
  nome,
  cargo,
  descricao,
  foto,
  banner,
  numero,
  tempo_postagem,
}) {
  return (
    <section className="bg-white sm:rounded-lg mb-6 relative ">
      <div className="">
        <div className=" flex items-center gap-2 justify-end p-2 absolute right-0">
          <div className="flex items-center gap-[1px]">
            <TbPointFilled className="text-xs text-gray-600" />
            <TbPointFilled className="text-xs text-gray-600" />
            <TbPointFilled className="text-xs text-gray-600" />
          </div>
          <IoMdClose className="text-lg text-gray-600 font-semibold" />
        </div>
        <div className=" flex items-start gap-2 p-4">
          <img src={foto} alt="Imagem do Autor" className="w-[48px] h-[48px]" />
          <div>
            <div className="flex gap-1 items-center">
              <h4 className="text-black/80 text-sm font-bold">{nome}</h4>
              <TbPointFilled className="text-xs text-gray-600" />
              <span>{numero}</span>
            </div>
            <p className="text-black/80 text-sm">{cargo}</p>
            <div>
              <span className="text-black/80 text-sm">data da publicação</span>
              <span className="text-gray-600 text-sm">link perfil</span>
            </div>
          </div>
        </div>
        <div className=" ">
          <p className="text-black/80 text-sm px-4">{descricao}</p>
          <img className="w-full max-h-[500px] cursor-pointer" src={banner} />
        </div>
        <div>
          <div></div>
          <span>
            Carrie Chapman Alicia Daisy e mais
            <span>500</span>
          </span>
          <div>
            <span>85 Comentários</span>
            <span>26 Compartilhamentos</span>
          </div>
        </div>
        <div className="flex justify-evenly mt-2 p-4 border-t-[1px] border-gray-200">
          <a
            href="#"
            className="text-gray-600 text-base flex items-center gap-2 "
          >
            <SlLike className=" text-base font-bold" />
            Gostei
          </a>
          <a
            href="#"
            className="text-gray-600 text-base flex items-center  gap-2 "
          >
            <MdOutlineComment className="text-base font-bold" />
            Comentar
          </a>
          <a
            href="#"
            className="text-gray-600 text-base flex items-center  gap-2 "
          >
            <IoGitCompareSharp className="text-base font-bold" />
            Compartilhar
          </a>
          <a
            href="#"
            className="text-gray-600 text-base flex items-center  gap-2 "
          >
            <IoIosSend className="text-base font-bold" />
            Enviar
          </a>
        </div>
      </div>
    </section>
  );
}
