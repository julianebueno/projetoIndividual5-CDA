import { Check, Pen, Trash } from "@phosphor-icons/react";
import { StyledTarefa } from "./StyledTarefa";
import Button from "../../common/Button/Button";

const Tarefa = ({ tarefa, completaTarefa, removeTarefa }) => {
  const handleClick = () => {
    console.log("botao editar clicado");
  };

  return (
    <StyledTarefa>
      <p style={{ textDecoration: tarefa.concluido ? "line-through" : "" }}>
        {tarefa.descricao}
      </p>
      <div>
        <Button texto={<Check weight="bold" size={20} />} onClick={() => completaTarefa(tarefa.id)} />
        <Button texto={<Pen weight="bold" size={20} />} onClick={handleClick} />
        <Button
          texto={<Trash weight="bold" size={20} />}
          onClick={() => removeTarefa(tarefa.id)}
        />
      </div>
    </StyledTarefa>
  );
};

export default Tarefa;
