/* eslint-disable react/prop-types */
import classes from "./window.module.css";
import Button from "./button";
import CancelIcon from "@mui/icons-material/Cancel";

export default function FormContainer({ children, actions = null }) {
  return (
    <form method="POST" className={classes.container}>
      {children}
      <div className={classes.btn__grp}>
        <Button
          type="submit"
          label={"Submit"}
          level={1}
          func={actions && actions.submit}
        />
        <Button
          type="reset"
          level={0}
          label="Cancel"
          func={actions && actions.close}
        />
        <button
          className={classes.close}
          type="reset"
          onClick={actions && actions.close}
        >
          <label>
            <CancelIcon />
          </label>
        </button>
      </div>
    </form>
  );
}
