import React from 'react'
import styled from "styled-components";

const Button = ({ texto, onClick }) => {
  return (
    <StyledButton onClick={onClick}>{texto}</StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
  
  background-color: ${(props)=> props.theme.primaria};
  color: ${(props)=> props.theme.fundoSegundario};
  
  border: none;
  border-radius: 50%;
  padding: .5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background .2s;

  &:hover{
    background-color: ${(props) => props.theme.primariaVariante};
  }
`;
