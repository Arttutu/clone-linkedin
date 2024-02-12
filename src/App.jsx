import React from "react";
import Cabecalho from "./componentes/Cabecalho";
import Usuario from "./componentes/Usuario";
import Principal from "./componentes/Principal";

export default function App() {
  return (
    <>
      <header className="bg-white  h-14 shadow-sm">
        <Cabecalho />
      </header>
      <main className="flex flex-col justify-around  px-o max-w-6xl mx-auto sm:px-4  sm:flex-row">
        <Usuario />
        <Principal />
        <div>Notícias</div>
      </main>
    </>
  );
}
