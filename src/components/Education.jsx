import Button from "../content/button";
import { Outlet } from "react-router";
import classes from "./Education.module.css";
import { EduActions } from "../util/eduSlice";
import { useDispatch } from "react-redux";

export default function Education() {
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(EduActions.handleAdd());
    dispatch(EduActions.handleToogle());
  }

  return (
    <div className={classes.container}>
      <header>
        Education Details
        <i>
          <Button
            label={"Add New"}
            type={"text"}
            level={0}
            className={classes.addbutton}
            func={handleAdd}
          />
        </i>
      </header>
      <div id={classes.line}></div>
      <Outlet />
    </div>
  );
}
