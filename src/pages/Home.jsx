import React, { useState } from "react";
import { StyledHome } from "./StyledHome";
import { dataTarefas } from "../core/data";
import Tarefa from "../components/shared/Tarefa/Tarefa";

import Header from "../components/view/Header";
import Menu from "../components/shared/Menu/Menu";
// import Layout from '../components/shared/Layout/index.jsx'
// import Tarefas from '../Tarefas/index.jsx'

function Home() {
  const [tarefas, setTarefas] = useState(dataTarefas);
  
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
      tarefa.id === id ? tarefa.concluido = !tarefa.concluido : tarefa
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
      <Header />
      <Menu addTarefa={addTarefa} />
      
      <div className="listaTarefas">
        {/* <Tarefas/> */}
        {tarefas.map((tarefa) => {
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
