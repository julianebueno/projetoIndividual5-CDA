import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  min-width: 100%;
  background-color: ${(props) => props.theme.fundoSegundario};
  box-shadow: 0px 16px 8px -8px rgba(0, 0, 0, 0.25);

  .containerHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    max-width: 1400px;
  }

  .tituloHeader {
    font-family: "Poppins";
  }

  .containerFiltro {
    display: flex;
    align-items: center;
    height: 4rem;
    gap: 1rem;
    padding: 1rem 0.5rem;
    background-color: ${(props) => props.theme.fundoSegundario};
    color: ${(props) => props.theme.primaria};
  }
`;
