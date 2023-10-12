import React from 'react'
import {StyledLayout} from './style'
import { Pen, Trash } from "@phosphor-icons/react";
import { Clock, Check } from "@phosphor-icons/react";

const Layout = () => {

  return (
    <StyledLayout>

      <aside>
        <Clock weight="bold" size={32} />
        <Clock weight="bold" size={32} />
        <Check weight="bold" size={32} />
        <Check weight="bold" size={32} />
        <Clock weight="bold" size={32} />
        <Clock weight="bold" size={32} />
      </aside>

      <section className='listaTarefas'>
        <div className='tarefa'>
          <input type="checkbox" name="" id="" />
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <div>
            <Pen size={32} weight="bold" />
            <Trash size={32} weight="bold" />
          </div>
        </div>

        <div className='tarefa'>
          <input type="checkbox" name="" id="" />
          <p>Lorem ipsum dolor sit</p>
          <div>
            <Pen size={32} weight="bold" />
            <Trash size={32} weight="bold" />
          </div>
        </div>

        <div className='tarefa'>
          <input type="checkbox" name="" id="" />
          <p>Lorem ipsum dolor sit consectetur</p>
          <div>
            <Pen size={32} weight="bold" />
            <Trash size={32} weight="bold" />
          </div>
        </div>
      </section>

    </StyledLayout>
  )
}

export default Layout