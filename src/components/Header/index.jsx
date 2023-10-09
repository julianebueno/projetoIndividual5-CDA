import React from 'react'
import { StyledHeader } from './style'
import { Plus } from "@phosphor-icons/react";

const Header = () => {
  return (
    <StyledHeader>
      <h2 className={`tituloHeader`}>ToDoList</h2>
      <button><Plus weight="bold" size={20} /></button>
    </StyledHeader>
  )
}

export default Header