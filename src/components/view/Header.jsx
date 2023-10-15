import React from "react";
import { StyledHeader } from "./StyledHeader";
import { List } from "@phosphor-icons/react";
import Button from "../common/Button/Button";

const Header = () => {
  const handleClick = () => {
    alert("Button header clicado \nMudança futura de cor");
  };
  return (
    <StyledHeader>
      <h2 className={`tituloHeader`}>ToDoList</h2>
      <Button texto={<List weight="bold" size={20} />} onClick={handleClick} />
    </StyledHeader>
  );
};

export default Header;
