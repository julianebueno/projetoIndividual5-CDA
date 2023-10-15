import React from 'react'

const Button = ({ texto, onClick }) => {
  return (
    <button onClick={onClick}>{texto}</button>
  );
};

export default Button;
