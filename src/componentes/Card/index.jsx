import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { SlLike } from "react-icons/sl";
import { MdOutlineComment } from "react-icons/md";
import { IoGitCompareSharp, IoHeartCircleSharp } from "react-icons/io5";
import logo from "../Usuario/logo_avatar.svg";
import { IoIosSend } from "react-icons/io";
import { RiEarthFill } from "react-icons/ri";
import { FaRegSmile } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import Comentario from "../Comentario";

export default function Card({
  nome,
  cargo,
  descricao,
  foto,
  banner,
  numero,
  tempo_postagem,
  comentario,
  deletar,
  id,
}) {
  const [comentarios, setComentarios] = useState(false);
  const [comentar, setComentar] = useState();
  const [like, setLike] = useState(false);
  const [quantindadeLike, setQuantindadeLike] = useState(10);

  function HandleLike() {
    setLike(!like);
    if (like) {
      setQuantindadeLike(10);
    } else {
      setQuantindadeLike(quantindadeLike + 1);
    }
  }
  function HandleComentarios() {
    setComentarios(!comentarios);
  }
  const HandleComentar = (event) => {
    setComentar(event.target.value);
  };
  return (
    <section className="bg-white sm:rounded-lg mb-6 relative ">
      <div className="">
        <div className=" flex items-center gap-2 justify-end p-2 absolute right-0">
          <div className="flex items-center gap-[1px] hover:bg-gray-200  hover:rounded-full  hover:p-[4px] transition-all">
            <TbPointFilled className="text-[8px] text-gray-600 " />
            <TbPointFilled className="text-[8px] text-gray-600" />
            <TbPointFilled className="text-[8px] text-gray-600" />
          </div>
          <button onClick={() => deletar(id)}>
            <IoMdClose className="text-[16px] text-gray-600 font-semibold hover:bg-gray-200  hover:rounded-full  hover:p-[4px] transition-all" />
          </button>
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
            <div className="flex items-center gap-1">
              <span className="text-gray-600 text-xs">{tempo_postagem}</span>
              <TbPointFilled className="text-[8px] text-gray-600" />
              <a href="">
                <RiEarthFill className=" text-gray-600" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-black/80 text-sm px-4">{descricao}</p>
          <img
            className="w-full max-h-[500px] cursor-pointer"
            src={banner}
            alt="banner da publicação"
          />
        </div>
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center">
            <IoHeartCircleSharp className="text-red-400 text-sm" />
            <span className="text-xs text-gray-600 hidden sm:block">
              Carrie Chapman Alicia Daisy e mais
            </span>
            <span className="text-xs text-gray-600 px-[2px]">
              {quantindadeLike}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-600 hover:text-blue-600  hover:underline transition-all cursor-pointer">
              85 Comentários
            </span>
            <span className="text-xs text-gray-600 hover:text-blue-600  hover:underline transition-all cursor-pointer">
              26 Compartilhamentos
            </span>
          </div>
        </div>
        <div className="flex justify-around  p-4 border-t-[1px] border-gray-200/50">
          <button
            href="#"
            onClick={HandleLike}
            className="text-gray-600 text-base flex items-center gap-2 hover:bg-gray-200 hover:p-[4px] hover:rounded-md transition-all"
          >
            {like ? (
              <>
                <SlLike className="text-base font-bold text-blue-600 " />
                <span className="hidden sm:block text-blue-600">Gostei</span>
              </>
            ) : (
              <>
                <SlLike className=" text-base font-bold" />
                <span className="hidden sm:block">Gostei</span>
              </>
            )}
          </button>
          <button
            className="text-gray-600 text-base flex items-center  gap-2  hover:bg-gray-200 hover:p-[4px] hover:rounded-md transition-all"
            onClick={HandleComentarios}
          >
            <MdOutlineComment className="text-base font-bold" />
            <span className="hidden sm:block">Comentar</span>
          </button>

          <a
            href="#"
            className="text-gray-600 text-base flex items-center  gap-2 hover:bg-gray-200 hover:p-[4px] hover:rounded-md transition-all"
          >
            <IoGitCompareSharp className="text-base font-bold" />
            <span className="hidden sm:block"> Compartilhar</span>
          </a>
          <a
            href="#"
            className="text-gray-600 text-base flex items-center  gap-2 hover:bg-gray-200 hover:p-[4px] hover:rounded-md transition-all"
          >
            <IoIosSend className="text-base font-bold" />
            <span className="hidden sm:block">Enviar</span>
          </a>
        </div>
        {comentarios ? (
          <>
            <div className="flex items-satart gap-2 p-4">
              <img
                src={logo}
                className="w-[48px] h-[48px] rounded-full"
                alt="foto de perfil"
              ></img>
              <form
                className="flex w-full flex-col justify-start gap-2"
                onSubmit=""
              >
                <div className="rounded-3xl w-full flex justify-between pl-2 pr-4 items-center gap-2 border-gray-400  border">
                  <input
                    type="text"
                    className="text-sm text-left text-gray-400 w-full rounded-3xl font-semibold border-none focus:outline-none  p-[12px]"
                    placeholder="Adicionar Comentários"
                    onChange={HandleComentar}
                  />

                  <div className="flex  gap-2 items-center">
                    <FaRegSmile className="text-gray-600 w-6 h-6 cursor-pointer  hover:rounded-full hover:bg-gray-200 hover:transition-all hover:box-content hover:p-2 " />
                    <GrGallery className="text-gray-600 w-6 h-6 cursor-pointer hover:rounded-full hover:bg-gray-200 hover:transition-all  hover:box-content hover:p-2  " />
                  </div>
                </div>
                <button className="rounded-2xl max-w-[80px] p-1 text-sm bg-blue-600 text-white font-semibold">
                  Publicar
                </button>
              </form>
            </div>
            {comentario.map((item) => {
              return (
                <Comentario
                  foto={item.foto}
                  nome={item.nome}
                  descricao={item.comentario}
                  numero={item.numero}
                  cargo={item.cargo}
                  key={item.foto}
                />
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
