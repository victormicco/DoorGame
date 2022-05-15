import styles from "../styles/jogo.module.css";
import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas";

export default function jogo() {
  const [portas, setPortas] = useState(criarPortas(5, 2));

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }
  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>{renderizarPortas()}</div>
      <div className={styles.botoes}></div>
    </div>
  );
}
