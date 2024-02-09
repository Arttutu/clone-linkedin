import React from "react";
import Cabecalho from "./componentes/Cabecalho";
import Usuario from "./componentes/Usuario";

export default function App() {
  return (
    <>
      <header className="bg-white  h-14 shadow-sm">
        <Cabecalho />
      </header>
      <main className="flex flex-col justify-between  px-o max-w-6xl mx-auto sm:px-4  sm:flex-row">
        <Usuario />
        <div>Principal</div>
        <div>Notícias</div>
      </main>
    </>
  );
}
