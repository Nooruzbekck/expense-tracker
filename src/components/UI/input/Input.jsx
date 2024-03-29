import React from "react";
import "./Input.css";

export const Input = ({ type, value, onChange, ...rest }) => {
  return (
    <input
      className="input"
      value={value}
      onChange={onChange}
      {...rest}
      type={type}
    />
  );
};
