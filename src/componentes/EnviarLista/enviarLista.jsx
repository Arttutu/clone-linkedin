import React from "react";
import img from "./amelia.svg";
export default function EnviarLista() {
  return (
    <div className="flex items-center justify-between mt-2">
      <div className="flex items-start gap-2">
        <img src={img} className="w-[48px] h-[48px] rounded-full"></img>
        <div>
          <h3>João Silva</h3>
          <p>Analista de Talent Acquisition</p>
        </div>
      </div>
      <input type="checkbox"></input>
    </div>
  );
}
