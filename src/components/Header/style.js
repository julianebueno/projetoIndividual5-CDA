import styled from "styled-components"

export const StyledHeader = styled.header`

background-color: ${(props)=> props.theme.fundoHeader};
padding: 1rem 2rem;
min-width: 100vw;

display: flex;
justify-content: space-between;
align-items: center;

.tituloHeader{
  font-family: 'Poppins';
  
}

button{
  background-color: ${(props)=> props.theme.primaria};
  color: ${(props)=> props.theme.fonteNormal};
  
  border: none;
  border-radius: 50%;
  padding: .5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}


`