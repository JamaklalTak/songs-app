import React from 'react';

const Input = (props) => {
  const { type, value, onClick, onChange, placeHolder, className } = props;
  return(
    <input
      type={type || 'text'}
      value={value}
      onClick={onClick}
      onChange={onChange}
      placeholder={placeHolder || 'Enter Text Here!'}
      className={className}
    />
  );
}

export default Input;