import React, { useState } from "react";
import { StyledMenu } from "./StyledMenu";
import { Plus, MagnifyingGlass, Funnel } from "@phosphor-icons/react";
import Button from "../../common/Button/Button";

const Menu = ({ addTarefa }) => {
  const [value, setValue] = useState("");

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    if (!value) return;
    addTarefa(value);
    setValue("");
  };

  const handleClick = () => {
    console.log("Botão Adicionar clicado");
  };

  return (
    <StyledMenu>
      <form className="containerMenu" onSubmit={handleSubmitAdd}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          type="submit"
          texto={<Plus weight="bold" size={32} />}
          onClick={handleClick}
        />
      </form>
      <form className="containerMenu">
        <input type="text" />
        <Button
          type="submit"
          texto={<MagnifyingGlass weight="bold" size={32} />}
          onClick={handleClick}
        />
      </form>
      {/* <form className="containerMenu">
        <input type="text" />
        <Button
          type="submit"
          texto={<Funnel weight="bold" size={32} />}
          onClick={handleClick}
        />
      </form> */}
    </StyledMenu>
  );
};

export default Menu;
