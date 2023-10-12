import React from 'react'
import { StyledHeader } from './style'
import { Plus } from "@phosphor-icons/react"
import Button from '../../../common/Button/index';

const Header = () => {
  const handleClick = () => {
    alert('button header clicado')
  }
  return (
    <StyledHeader>
      <h2 className={`tituloHeader`}>ToDoList</h2>
      <Button texto={<Plus weight="bold" size={20} />} onClick={handleClick} />
    </StyledHeader>
  )
}

export default Header