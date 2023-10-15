import styled from "styled-components"

export const StyledMenu = styled.section`
  
  /* border: solid blue; */
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  gap: 1rem;
  padding-top: 1rem;
  
  .containerMenu{
    /* border: solid fuchsia; */
    display: flex;
    justify-content: center;
    flex-grow: 1;
    height: 4rem;
    gap: 1rem;
    padding: 1rem .5rem;
    background-color: ${(props)=> props.theme.fundoSegundario};
    color: ${(props)=> props.theme.primaria};
    
    > input{
      width: 100%;
    }
    
    > button{
      width: 2rem;
    }
    
  }
  
`