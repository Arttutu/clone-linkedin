import React, { useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { IoMdArrowDropdown } from "react-icons/io";
import Card from "../Card";
import publi from "./publicacao.json";
import { v4 as uuidv4 } from "uuid";
import PublicacaoPrincipal from "../PublicacaoPrincipal";
export default function Principal() {
  const publiId = publi.map((item) => ({
    id: uuidv4(),
    ...item,
  }));
  const [cards, setCards] = useState(publiId);

  function HandleRemove(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  return (
    <div className="flex flex-col w-full max-w-[544px] ">
      <PublicacaoPrincipal />
      <div className="flex items-center gap-2 m-2">
        <div className="w-full max-w-[280px] sm:max-w-[350px] h-[2px] bg-gray-200"></div>
        <div className="flex items-center gap-2 ">
          <span className=" text-gray-600 text-[12px] ">Classificar por:</span>
          <span className=" text-gray-600 flex gap-1 text-[12px]  items-center font-bold ">
            Populares
            <Dialog.Root>
              <Dialog.Trigger>
                <IoMdArrowDropdown className="font-bold text-lg" />
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="inset-0 fixed" />
                <Dialog.Content className=" w-[150px] h-[80px] bg-white rounded-lg rounded-tr-none shadow-lg absolute left-[1050px] top-60">
                  <div className="flex flex-col  h-full justify-around">
                    <div className="hover:bg-gray-100 w-full h-[40px] border-l-green-600 border-l-2 flex items-center">
                      <span className="text-gray-600 text-xs sm:text-sm font-semibold w-full px-4  ">
                        Populares
                      </span>
                    </div>
                    <div className="hover:bg-gray-100 w-full h-[40px] flex items-center">
                      <span className="text-gray-600 text-xs sm:text-sm font-semibold w-full px-4 ">
                        Recentes
                      </span>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </span>
        </div>
      </div>
      {cards.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            deletar={HandleRemove}
            json={publi}
            nome={item.nome}
            cargo={item.cargo}
            descricao={item.descricao}
            banner={item.Banner}
            foto={item.foto_autor}
            numero={item.numero}
            tempo_postagem={item.tempo_postagem}
            comentario={item.comentario}
          />
        );
      })}
    </div>
  );
}
