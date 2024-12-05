import EduContent from "../content/Educontent";
import Button from "../content/button";

import classes from "./Education.module.css";
const Edu = [
  {
    name: "N.K.V.(E.M).High School",
    grade: "93",
    duration: { from: "2015-05", to: "2016-04" },
    degree: "Schooling (X)",
  },
  {
    name: "Sri Chaitanya Junior College",
    grade: "97.4",
    duration: { from: "2016-05", to: "2018-04" },
    degree: "10 + 2",
  },
  {
    name: "S.R.K.R Engineering College",
    grade: "79",
    duration: { from: "2018-05", to: "2022-04" },
    degree: "B.Tech",
  },
];
export default function Education() {
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
          />
        </i>
      </header>
      <div id={classes.line}></div>
      <div className={classes.edubox}>
        <ol>
          {Edu.map((ele, index) => {
            return (
              <li key={index}>
                <EduContent
                  name={ele.name}
                  duration={ele.duration}
                  grade={ele.grade}
                  degree={ele.degree}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
