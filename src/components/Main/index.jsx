import React from 'react'
import {StyledMain} from './style'
import { Clock, Pen, Check } from "@phosphor-icons/react";

const Main = () => {

  return (
    <StyledMain>
      <div>
        <Clock weight="bold" size={32} />
        <h3>A Fazer</h3>
      </div>
      <div>
        <Pen size={32} weight="bold" />
        <h3>Fazendo</h3>
      </div>
      <div>
        <Check size={32} weight="bold" />
        <h3>Feito</h3>
      </div>
    </StyledMain>
  )
}

export default Main