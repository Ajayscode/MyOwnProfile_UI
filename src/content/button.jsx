/* eslint-disable react/prop-types */
import classes from "./button.module.css";
import { Tooltip } from "@mui/material";
export default function Button({ label, type = "", level, func }) {
  return (
    <>
      <Tooltip title={label}>
        <button
          type={type}
          className={`${
            level === 1 ? classes.btn__primary : classes.btn__secondary
          } ${classes.btn}`}
          onClick={func}
        >
          <label>{label}</label>
        </button>
      </Tooltip>
    </>
  );
}
