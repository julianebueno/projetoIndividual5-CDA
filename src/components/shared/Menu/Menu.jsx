import { useState } from "react";
import { StyledMenu } from "./StyledMenu";
import { Plus, MagnifyingGlass } from "@phosphor-icons/react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

const Menu = ({ addTarefa, busca, setBusca }) => {
  const [value, setValue] = useState("");

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    if (!value) return;
    addTarefa(value);
    setValue("");
  };

  return (
    <StyledMenu>
      <div className="containerBusca">
        <Input value={busca} onChange={(e) => setBusca(e.target.value)} />
        <MagnifyingGlass weight="bold" size={32} />
      </div>
      <form className="containerAdicionar" onSubmit={handleSubmitAdd}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <Button type="submit" texto={<Plus weight="bold" size={32} />} />
      </form>
    </StyledMenu>
  );
};

export default Menu;
