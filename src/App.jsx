import React from "react";
import Cabecalho from "./componentes/Cabecalho";
import Usuario from "./componentes/Usuario";

export default function App() {
  return (
    <>
      <header className="bg-white  h-18 shadow-sm">
        <Cabecalho />
      </header>
      <main className="flex justify-around">
        <Usuario />
        <div>Principal</div>
        <div>Notícias</div>
      </main>
    </>
  );
}
