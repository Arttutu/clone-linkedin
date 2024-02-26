import React, { useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import * as Checkbox from "@radix-ui/react-checkbox";
import { FaCheck } from "react-icons/fa6";
import Fuso from "./fusohorario.json";
import CheckBox from "../CheckBoxEvento";
export default function Formulario() {
  const [tamanhoEvento, setTamanhoEvento] = useState("");
  const [tamanhoLink, setTamanhoLink] = useState("");
  const [tamanhoDescricao, setTamanhoDescricao] = useState("");
  function handleTamanhoEvento(event) {
    setTamanhoEvento(event.target.value);
  }
  function handleTamanhoLink(event) {
    setTamanhoLink(event.target.value);
  }
  function handleTamanhoDescricao(event) {
    setTamanhoDescricao(event.target.value);
  }
  return (
    <>
      <div className="overflow-y-scroll h-[600px] rounded-b-lg">
        <div className="bg-fundo w-full h-[300px] flex flex-col items-center justify-center  cursor-pointer ">
          <FaCameraRetro className="size-12" />
          <p className="font-semibold text-lg">Carregar imagem de capa</p>
          <p className="text-xs text-gray-600">
            Largura mínima de 480 pixels; recomendamos 16:9
          </p>
        </div>
        <form id="event-form" className="flex flex-col gap-4 px-4 py-6">
          <label className="text-sm text-gray-600">Tipo de evento</label>
          <div className="flex justify-start gap-8">
            <CheckBox tipo="On-line" />
            <CheckBox tipo="Presencial" />
          </div>
          <div>
            <label
              aria-label="nome do evento"
              className="text-sm text-gray-600"
            >
              Nome do Evento*
            </label>
            <input
              className="rounded-md w-full border border-black p-1 hover:border-2 text-xs text-gray-600"
              maxLength="75"
              type="text"
              onChange={handleTamanhoEvento}
            ></input>
            <span className="text-gray-600 text-sm flex justify-end">
              {tamanhoEvento.length}/75
            </span>
          </div>
          <div className="flex flex-col">
            <label
              aria-label="selecionar o fuso horário local"
              className="text-sm text-gray-600"
            >
              Fuso horário*
            </label>
            <select
              name="horas"
              id="hrs"
              className=" text-gray-600 text-sm rounded-md w-full border border-black p-1 hover:border-2  "
            >
              {Fuso.map((item) => {
                return (
                  <option
                    className="text-gray-600 text-sm cursor-default"
                    value="volvo"
                    key={item.nome_lugar}
                  >
                    ({item.nome}){item.nome_lugar}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-1 gap-4">
            <div>
              <label
                aria-label="data de inicio do evento"
                className="text-sm text-gray-600"
              >
                Data de início*
              </label>
              <input
                className="rounded-md w-full border border-black p-1 hover:border-2"
                type="date"
              ></input>
            </div>
            <div>
              <label
                aria-label="hora de inicio do evento"
                className="text-sm text-gray-600"
              >
                Hora de início{" "}
              </label>
              <input
                className="rounded-md w-full border border-black p-1 hover:border-2"
                type="time"
              ></input>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox.Root
              className="flex items-center justify-center border-black border rounded-md w-6 h-6 hover:border-2 appearance-none "
              defaultChecked
              id="c1"
            >
              <Checkbox.Indicator className="text-white">
                <FaCheck className=" size-6 rounded-md   w-full bg-green-700" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label
              aria-label="adicionando data de termino do evento"
              htmlFor="c1"
              className="text-sm text-gray-600"
            >
              Adicionar data e hora de término
            </label>
          </div>
          <div>
            <label
              className="text-sm text-gray-600"
              aria-label="adicionar o endereço do evento"
            >
              Endereço*
            </label>
            <input
              className="rounded-md w-full border border-black p-1 hover:border-2 text-gray-600 text-sm"
              placeholder="Ex.: rua, cidade, código postal, etc."
            ></input>
          </div>
          <div>
            <label
              aria-label="local do evento"
              className="text-sm text-gray-600"
            >
              Local
            </label>
            <input
              className="rounded-md w-full border border-black p-1 hover:border-2 text-gray-600 text-sm"
              placeholder="Por ex.: andar, número da sala, etc."
            ></input>
          </div>
          <div>
            <label
              aria-label="link do evento externo"
              className="text-sm text-gray-600"
            >
              Link de evento externo
            </label>
            <input
              className="rounded-md w-full border border-black p-1 hover:border-2 text-gray-600 text-sm"
              type="url"
              maxLength="1.024"
              onChange={handleTamanhoLink}
            ></input>
            <span className="text-gray-600 text-sm flex justify-end">
              {tamanhoLink.length}/1.024
            </span>
          </div>
          <div className="flex flex-col">
            <label
              aria-label="aqui vai a descrição do evento"
              className="text-sm text-gray-600"
            >
              Descrição
            </label>
            <textarea
              placeholder="Ex.:tópicos, agenda, etc."
              maxLength="5000"
              className="rounded-md w-full border border-black p-1 hover:border-2 transition-all h-24 text-gray-600 text-sm"
              onChange={handleTamanhoDescricao}
            ></textarea>
            <span className="text-gray-600 text-sm flex justify-end">
              {tamanhoDescricao.length}/5000
            </span>
          </div>
          <div>
            <label arial-label="palestrantes" className="text-sm text-gray-600">
              Palestrantes
            </label>
            <input className="rounded-md w-full border border-black p-1 hover:border-2"></input>
          </div>
          <span className="text-xs text-gray-600 leading-6">
            Adicione conexões como palestrantes no evento. Os palestrantes podem
            entrar no evento mais cedo e serão exibidos na seção de Detalhes do
            evento e na área de apresentadores. Eles não podem permitir que os
            participantes falem ou encerrar o evento.
          </span>
          <span className="text-xs text-gray-600  ">
            Ao continuar, você confirma estar cumprindo a
            <a
              href="https://br.linkedin.com/legal/l/events-terms?"
              className=""
            >
              <span className="text-purple-500 px-1 font-semibold hover:underline">
                Política de Eventos do LinkedIn.
              </span>
            </a>
          </span>
          <span className="text-xs text-gray-600">
            Aproveite o LinkedIn Events ao máximo.
            <a href="https://www.linkedin.com/help/linkedin/answer/a564536/?lang=pt_BR">
              <span className="text-blue-500 font-semibold px-1 hover:underline">
                Saiba mais
              </span>
            </a>
          </span>
        </form>
      </div>
      <div className="w-full py-2 border-t text-gray-600" />
      <div className="rounded-xl mb-4 ml-96  bg-gray-200 w-24 h-8 flex items-center justify-center">
        <button form="event-form" className="text-base text-gray-600">
          Avançar
        </button>
      </div>
    </>
  );
}
