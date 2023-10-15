import { useState } from "react";
import { StyledHome } from "./StyledHome";
import { dataTarefas } from "../core/data";

import Header from "../components/view/Header";
import Menu from "../components/shared/Menu/Menu";
import Tarefa from "../components/shared/Tarefa/Tarefa";

function Home() {
  const [tarefas, setTarefas] = useState(dataTarefas);
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("Todos");

  const addTarefa = (descricao) => {
    const novaTarefas = [
      ...tarefas,
      {
        id: Math.floor(Math.random() * 100),
        descricao,
        concluido: false,
      },
    ];
    setTarefas(novaTarefas);
  };

  const completaTarefa = (id) => {
    const novaTarefas = [...tarefas];
    novaTarefas.map((tarefa) =>
      tarefa.id === id ? (tarefa.concluido = !tarefa.concluido) : tarefa
    );
    setTarefas(novaTarefas);
  };

  const removeTarefa = (id) => {
    const novaTarefas = [...tarefas];
    const TarefasFiltradas = novaTarefas.filter((tarefa) =>
      tarefa.id !== id ? tarefa : null
    );
    setTarefas(TarefasFiltradas);
  };

  return (
    <StyledHome>
      <Header filtro={filtro} setFiltro={setFiltro} />
      <Menu addTarefa={addTarefa} busca={busca} setBusca={setBusca} />
      <div className="listaTarefas">
        {tarefas
          .filter((tarefa) =>
            filtro === "Todos"
              ? true
              : filtro === "Completas"
              ? tarefa.concluido
              : !tarefa.concluido
          )
          .filter((tarefa) =>
            tarefa.descricao.toLowerCase().includes(busca.toLowerCase())
          )
          .map((tarefa) => {
            return (
              <Tarefa
                key={tarefa.id}
                tarefa={tarefa}
                completaTarefa={completaTarefa}
                removeTarefa={removeTarefa}
              />
            );
          })}
      </div>
    </StyledHome>
  );
}

export default Home;
