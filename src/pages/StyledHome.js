import styled from "styled-components"

export const StyledHome = styled.section`
  
  /* border: solid yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  
  .listaTarefas{
    /* border: solid fuchsia; */
    width: 80vw;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 1rem;
    padding: 1rem 0;

    /* padding-top: 5.5rem; */
  }



  button{
    box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
    background: transparent;
    color: ${(props)=> props.theme.primaria};
    border: solid 1px;
    border-radius: 50%;
    padding: .5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background .2s;
    &:hover{
      background-color: ${(props) => props.theme.fundoPrincipal};
      color: ${(props)=> props.theme.primariaVariante};
    }
  }

  /* input[type='checkbox']{
    
  } */


`