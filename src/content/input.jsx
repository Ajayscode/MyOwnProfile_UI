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
}) {
  return (
    <div className={classes.inp}>
      {label && <label>{label}</label>}
      {rating ? (
        <Rating value={value} precision={0.2} onChange={func} />
      ) : (
        <input
          placeholder={placeholder}
          type={type}
          defaultValue={value !== 0 ? value : ""}
          onChange={func}
        />
      )}
    </div>
  );
}
