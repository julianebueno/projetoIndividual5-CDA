import styled from "styled-components";

export const StyledTarefa = styled.div`
  border: solid 1px ${(props) => props.theme.fundoSegundario};
  background-color: ${(props) => props.theme.fundoSegundario};
  color: ${(props) => props.theme.primaria};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  &:hover {
    border: solid 1px ${(props) => props.theme.primaria};
  }

  > div {
    /* border: solid red; */
    display: flex;
    gap: 10px;
  }
`;
