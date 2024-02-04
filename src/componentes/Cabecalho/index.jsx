import React from "react";
import { FaLinkedin } from "react-icons/fa";
export default function Cabecalho() {
  return (
    <nav className="container mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FaLinkedin className="text-4xl text-blue-600" />
        <input className="w-64 h-8 bg-slate-200 rounded-sm" />
      </div>
      <div className="flex gap-8">
        <div>
          <img></img>
          <span>Inicio</span>
        </div>
        <div>
          <img></img>
          <span>Minha Rede</span>
        </div>
        <div>
          <img></img>
          <span>Vagas</span>
        </div>
        <div>
          <img></img>
          <span>Mensagens</span>
        </div>
        <div>
          <img></img>
          <span>Notificações</span>
        </div>
        <div>
          <img></img>
          <span>Eu</span>
        </div>
      </div>
      <div>
        <div>
          <img></img>
          <span>Inicio</span>
        </div>
        <h2>Reative o seu negocio</h2>
      </div>
    </nav>
  );
}
