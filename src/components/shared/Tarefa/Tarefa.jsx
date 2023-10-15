import { useState } from "react";
import { Check, Pen, Trash } from "@phosphor-icons/react";
import { StyledTarefa } from "./StyledTarefa";
import Button from "../../common/Button/Button";

const Tarefa = ({ tarefa, completaTarefa, removeTarefa , setAtualizacao}) => {
  const [edicao, setEdicao] = useState(false);
  const handleEdicao= () => {
    setEdicao(true);
  };
  const handleEdicaoConcluida= (event) => {
    if (event.key === 'Enter') {
      setEdicao(false);
    }
  };
  let viewMode = {}
  let editMode = {}
  if (edicao) {
    viewMode.display = 'none'
  } else {
    editMode.display = 'none';
  }
  return (
    <StyledTarefa>
      <div className="containerViewTarefa" style={viewMode}>
        <p style={{ textDecoration: tarefa.concluido ? "line-through" : "" }}> {tarefa.descricao} </p>
        <div className="containerBotoes">
          <Button texto={<Check weight="bold" size={20} />} onClick={() => completaTarefa(tarefa.id)} />
          <Button texto={<Pen weight="bold" size={20} />} onClick={handleEdicao} />
          <Button texto={<Trash weight="bold" size={20} />} onClick={() => removeTarefa(tarefa.id)} />
        </div>
      </div>
      <input type="text" value={tarefa.descricao} style={editMode} onChange={(e) => setAtualizacao(e.target.value, tarefa.id)} onKeyDown={handleEdicaoConcluida}/>
    </StyledTarefa>
  );
};

export default Tarefa;
