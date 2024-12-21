/* eslint-disable react/jsx-key */
import { Rating } from "@mui/material";
import Button from "../content/button";
import classes from "./Education.module.css";
export default function Skills() {
  const skillset = [
    "python",
    "javascript",
    "react",
    "flask",
    "mysql",
    "snowflake",
    "nextjs",
    "redux",
    "redux-2",
  ];

  return (
    <>
      <div className={classes.container}>
        <header>
          Skills Page
          <i>
            <Button
              label={"Add New"}
              type={"text"}
              level={0}
              className={classes.addbutton}
            />
          </i>
        </header>
        <div id={classes.line}></div>
        <div className={classes.skillBox}>
          {skillset.map((ele, index) => {
            return (
              <h3 key={index}>
                {ele}
                <i>
                  <Rating />
                </i>
              </h3>
            );
          })}
        </div>
      </div>
    </>
  );
}
