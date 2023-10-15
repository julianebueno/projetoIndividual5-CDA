import React from "react";

const Input = ({ valor, onChange }) => {
  return <input type="text" value={valor} onChange={onChange} />;
};

export default Input;
