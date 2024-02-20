import React from "react";

export default function Card({
  nome,
  cargo,
  descricao,
  foto,
  banner,
  tempo_postagem,
}) {
  return (
    <section className="bg-white sm:rounded-lg mt-6  p-2">
      <div class="">
        <div className="">
          <img src="" alt="Imagem do Autor" />
          <div>
            <h4>{nome}</h4>
            <p>{cargo}</p>
            <div>
              <span>data da publicação</span>
              <span>link perfil</span>
            </div>
          </div>
        </div>
        <div className="">
          <p>{descricao}</p>
          <img />
        </div>
        <div className="">
          <a href="#">Gostei</a>
          <a href="#">Comentar</a>
          <a href="#">Compartilhar</a>
          <a href="#">Enviar</a>
        </div>
      </div>
    </section>
  );
}
