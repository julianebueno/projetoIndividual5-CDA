import styled from "styled-components"

export const StyledHeader = styled.header`

background-color: ${(props)=> props.theme.fundoSegundario};
padding: 1rem 2rem;
min-width: 100vw;

display: flex;
justify-content: space-between;
align-items: center;

.tituloHeader{
  font-family: 'Poppins';
}

`