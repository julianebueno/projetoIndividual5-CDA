import styled from "styled-components";

export const StyledMenu = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  max-width: 1400px;
  gap: 1rem;
  padding-top: 1rem;

  .containerBusca, .containerAdicionar {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    height: 4rem;
    gap: 1rem;
    padding: 1rem 0.5rem;
    background-color: ${(props) => props.theme.fundoSegundario};
    color: ${(props) => props.theme.primaria};

    > input {
      width: 100%;
    }

    > button {
      width: 2rem;
    }
  }
`;
