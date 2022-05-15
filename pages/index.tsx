import { useState } from "react";
import Porta from "../components/Porta";
import PortaModel from "../model/porta";
import { atualizarPortas, criarPortas } from "./../functions/portas";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <h1>Formulário do Jogo</h1>
    </div>
  );
}
