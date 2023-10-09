import styled from "styled-components"

export const StyledMain = styled.main`

display: flex;
flex-wrap: wrap;
height: 80vh;
padding: 1rem;
gap: 1rem;

div{
  border: solid ${(props)=> props.theme.primaria};
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  padding: 1rem;
}
`