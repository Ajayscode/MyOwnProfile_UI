/* eslint-disable react/prop-types */
import classes from "./input.module.css";
import { Rating } from "@mui/material";

export default function Input({
  label,
  placeholder,
  type = "text",
  value = 0,
  func,
  rating = false,
  lines = 20,
}) {
  const inputele =
    type !== "textarea" ? (
      <input
        placeholder={placeholder}
        type={type}
        defaultValue={value !== 0 ? value : ""}
        onChange={func}
      />
    ) : (
      <textarea
        placeholder={placeholder}
        defaultValue={value !== 0 ? value : ""}
        onChange={func}
        rows={lines}
        cols={50}
        style={{ fontFamily: "cursive" }}
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
}
