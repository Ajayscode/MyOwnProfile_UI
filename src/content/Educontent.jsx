/* eslint-disable react/prop-types */
import SchoolIcon from "@mui/icons-material/School";
import DateRangeIcon from "@mui/icons-material/DateRange";
import GradeIcon from "@mui/icons-material/Grade";
import DomainIcon from "@mui/icons-material/Domain";
import classes from "../components/Education.module.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Tooltip } from "@mui/material";
export default function EduContent({ name, duration, grade, degree }) {
  return (
    <div id={classes.edbox}>
      <ol>
        <li>
          <p>
            <DomainIcon /> <i>{name}</i>
          </p>
        </li>
        <li>
          <p>
            <SchoolIcon /> <i>{degree}</i>
          </p>
        </li>
        <li>
          <p>
            <GradeIcon /> <i>{grade}</i>
          </p>
        </li>
      </ol>
      <div>
        <p>
          <DateRangeIcon />
          <i>From: {duration.from}</i>
        </p>
        <p>
          <DateRangeIcon />
          <i>To: {duration.to}</i>
        </p>
      </div>
      <Tooltip title="Edit">
        <button>
          <ModeEditIcon />
        </button>
      </Tooltip>
    </div>
  );
}
