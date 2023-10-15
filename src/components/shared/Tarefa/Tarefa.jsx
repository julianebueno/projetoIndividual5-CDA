import { Pen, Trash } from '@phosphor-icons/react'
import React from 'react'
import {StyledTarefa} from './StyledTarefa'
import Button from '../../common/Button/Button'

const Tarefa = ({ tarefa, completaTarefa, removeTarefa }) => {
  
  const handleClick = () => {
    alert('botao tarefa clicado')
  }
  
  return (
    <StyledTarefa>
      <p style={{textDecoration: tarefa.concluido ? 'line-through' : ''}}>{tarefa.descricao}</p>
      <div>
        <input type="checkbox" onChange={() => completaTarefa(tarefa.id)}/>
        <Button texto={<Pen weight="bold" size={20} />} onClick={handleClick} />
        <Button texto={<Trash weight="bold" size={20} />} onClick={() => removeTarefa(tarefa.id)} />
      </div>
    </StyledTarefa>
  )
}

export default Tarefa
