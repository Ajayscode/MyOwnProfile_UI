/* eslint-disable react/prop-types */
import classes from "./button.module.css";

export default function Button({ label, type, level, func }) {
  return (
    <>
      <button
        type={type}
        className={`${
          level === 1 ? classes.btn__primary : classes.btn__secondary
        } ${classes.btn}`}
        onClick={func}
      >
        <label>{label}</label>
      </button>
    </>
  );
}
