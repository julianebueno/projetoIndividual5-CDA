import React from "react";
import { StyledHeader } from "./StyledHeader";
import { Funnel } from "@phosphor-icons/react";

const Header = ({ filtro, setFiltro }) => {
  return (
    <StyledHeader>
      <div className="containerHeader">
        <h2 className={`tituloHeader`}>ToDoList</h2>
        <div className="containerFiltro">
          <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
            <option value="Todos">Todos</option>
            <option value="Incompletos">A Fazer</option>
            <option value="Completas">Completas</option>
          </select>
          <Funnel weight="bold" size={32} />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
