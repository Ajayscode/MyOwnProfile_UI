/* eslint-disable react/prop-types */
import classes from "./window.module.css";
import Button from "./button";
import CancelIcon from "@mui/icons-material/Cancel";
export default function FormContainer({ children }) {
  return (
    <form className={classes.container}>
      {children}
      <div className={classes.btn__grp}>
        <Button type="submit" label={"Update"} level={1} />
        <Button type="reset" level={0} label="Cancel" />
        <button className={classes.close}>
          <label>
            <CancelIcon />
          </label>
        </button>
      </div>
    </form>
  );
}
