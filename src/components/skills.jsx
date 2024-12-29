/* eslint-disable react/jsx-key */
import { Rating } from "@mui/material";
import Button from "../content/button";
import classes from "./Education.module.css";
export default function Skills() {
  const skillset = [
    ["python", 4],
    ["javascript", 4.5],
    ["react", 4.7],
    ["flask", 3.9],
    ["mysql", 5],
    ["snowflake", 3.5],
    ["nextjs", 4],
    ["redux", 4.5],
    ["redux-2", 3],
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
                {ele[0]}
                <i>
                  <Rating value={ele[1]} precision={0.1} />
                </i>
              </h3>
            );
          })}
        </div>
      </div>
    </>
  );
}
