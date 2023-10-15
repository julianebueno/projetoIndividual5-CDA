import styled from "styled-components";

export const StyledTarefa = styled.div`
  /* border: solid red; */

  border: solid 1px ${(props) => props.theme.fundoSegundario};
  background-color: ${(props) => props.theme.fundoSegundario};
  color: ${(props) => props.theme.primaria};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  &:hover {
    border: solid 1px ${(props) => props.theme.primaria};
  }
  
  .containerViewTarefa{
    /* border: solid red; */

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    
  }

  .containerBotoes {
    display: flex;
    gap: 10px;
  }
`;
