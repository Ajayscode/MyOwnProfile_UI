import classes from "./PopupLayout.module.css";

export default function Loader() {
  return (
    <div className={classes.holder}>
      <div>
        <div className={classes.box}></div>
        <div className={classes.line}></div>
      </div>
      <h4>Loading...</h4>
    </div>
  );
}
