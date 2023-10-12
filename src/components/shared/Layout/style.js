import styled from "styled-components"

export const StyledLayout = styled.section`
  
  /* border: solid blue; */
  display: flex;
  flex-grow: 1;
  
  aside{
    /* border: solid fuchsia; */
    display: flex;
    flex-direction: column;
    width: 150px;
    padding: 1rem;
    gap: 1rem;
    background-color: ${(props)=> props.theme.fundoSegundario};
    color: ${(props)=> props.theme.primaria};
    box-shadow: inset 0px 16px 8px -8px rgba(0,0,0,0.25);
  }
  
  .listaTarefas{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 1rem;
    padding: 1rem;
  }

  .tarefa{
    border: solid ${(props)=> props.theme.primaria};
    color: ${(props)=> props.theme.primaria};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  
`