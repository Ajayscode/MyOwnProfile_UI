import classes from "./PopupLayout.module.css";
import { createPortal } from "react-dom";

export default function Popup({ children }) {
  return createPortal(
    <div className={classes.container}>
      <div className={classes.content}>{children}</div>
    </div>,
    document.getElementById("modal")
  );
}
