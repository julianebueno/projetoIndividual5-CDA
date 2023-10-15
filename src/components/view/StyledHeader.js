import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.fundoSegundario};
  padding: 1rem 2rem;
  min-width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 16px 8px -8px rgba(0, 0, 0, 0.25);

  .tituloHeader {
    font-family: "Poppins";
  }
`;
