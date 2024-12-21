/* eslint-disable react/prop-types */
import classes from "./input.module.css";
import { Rating } from "@mui/material";
import { forwardRef } from "react";

const Input = forwardRef(function Input(
  {
    label,
    placeholder,
    type = "text",
    value = 0,
    func,
    rating = false,
    lines = 20,
  },
  ref
) {
  const inputele =
    type !== "textarea" ? (
      <input
        placeholder={placeholder}
        type={type}
        defaultValue={value !== 0 ? value : ""}
        onChange={func}
        ref={ref}
      />
    ) : (
      <textarea
        placeholder={placeholder}
        defaultValue={value !== 0 ? value : ""}
        onChange={func}
        rows={lines}
        cols={50}
        style={{ fontFamily: "cursive" }}
        ref={ref}
      />
    );
  return (
    <div className={classes.inp}>
      {label && <label>{label}</label>}
      {rating ? (
        <Rating value={value} precision={0.2} onChange={func} />
      ) : (
        inputele
      )}
    </div>
  );
});

export default Input;
