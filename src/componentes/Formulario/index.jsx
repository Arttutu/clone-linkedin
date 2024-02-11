import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import * as Checkbox from "@radix-ui/react-checkbox";

export default function Formulario() {
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
            <div className="flex items-center gap-2">
              <Checkbox.Root
                id="c1"
                className="border-black border rounded-full size-6"
              >
                <Checkbox.Indicator className="text-green-800 ">
                  <FaCircleDot className="size-6" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor="c1" className="text-sm text-gray-600">
                On-line
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox.Root
                id="c2"
                className="border-black border rounded-full size-6"
              >
                <Checkbox.Indicator className="text-green-800 size-6">
                  <FaCircleDot className="w-full size-6   " />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor="c2" className="text-sm text-gray-600">
                Presencial
              </label>
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-600">Nome do Evento*</label>
            <input className="rounded-md w-full border border-black p-1 hover:border-2"></input>
          </div>
          <div>
            <label className="text-sm text-gray-600">Fuso horário*</label>
            <input className="rounded-md w-full border border-black p-1 hover:border-2"></input>
          </div>
          <div className="flex flex-1 gap-4">
            <div>
              <label className="text-sm text-gray-600">Data de início*</label>
              <input className="rounded-md w-full border border-black p-1 hover:border-2"></input>
            </div>
            <div>
              <label className="text-sm text-gray-600">Hora de início </label>
              <input className="rounded-md w-full border border-black p-1 hover:border-2"></input>
            </div>
          </div>
          <div>
            <input type="checkbox" id="termino" name="termino" />
            <label for="termino" className="text-sm text-gray-600">
              Adicionar data e hora de término
            </label>
          </div>
          <div>
            <label className="text-sm text-gray-600">Endereço*</label>
            <input className="rounded-md w-full border border-black p-1 hover:border-2"></input>
          </div>
          <div>
            <label className="text-sm text-gray-600">Local</label>
            <input className="rounded-md w-full border border-black p-1 hover:border-2"></input>
          </div>
          <div>
            <label className="text-sm text-gray-600">
              Link de evento externo
            </label>
            <input className="rounded-md w-full border border-black p-1 hover:border-2"></input>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Descrição</label>
            <textarea
              placeholder="Ex.:tópicos, agenda, etc."
              className="rounded-md w-full border border-black p-1 hover:border-2 transition-all h-24"
            ></textarea>
          </div>
          <div>
            <label className="text-sm text-gray-600">Palestrantes</label>
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
            <span className="text-blue-500 px-1 font-semibold">
              Política de Eventos do LinkedIn.
            </span>
          </span>
          <span className="text-xs text-gray-600">
            Aproveite o LinkedIn Events ao máximo.
            <span className="text-blue-500 font-semibold">Saiba mais</span>
          </span>
        </form>
      </div>
      <button form="event-form">Avançar</button>
    </>
  );
}
