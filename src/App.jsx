import React from "react";
import Cabecalho from "./componentes/Cabecalho";
import Usuario from "./componentes/Usuario";
import Principal from "./componentes/Principal";
import Noticias from "./componentes/Noticias";

export default function App() {
  return (
    <>
      <header className="bg-white  h-14 shadow-sm">
        <Cabecalho />
      </header>
      <main className="flex flex-col justify-around  px-o max-w-6xl mx-auto sm:px-4  md:flex-row">
        <Usuario />
        <Principal />
        <Noticias />
      </main>
    </>
  );
}
