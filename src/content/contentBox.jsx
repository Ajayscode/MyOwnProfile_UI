/* eslint-disable react/prop-types */
import classes from "./../components/Dashboard.module.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Popup from "./PopupLayout";
import Window from "./window";
import { useSelector, useDispatch } from "react-redux";
import { reviewActions } from "../util/reviewSlice";
import Rating from "@mui/material/Rating";
import { Tooltip } from "@mui/material";

export default function ContentBox({ name, review, suggessions, rating }) {
  const showModal = useSelector((state) => state.reviewSlice.isEdit);
  const dispatch = useDispatch();

  function handleopenmodal() {
    dispatch(
      reviewActions.handleEdit({
        name_: name,
        review_: review,
        suggessions_: suggessions,
        rating_: rating,
      })
    );
  }
  return (
    <div className={classes.review_box}>
      <h4>{name}</h4>
      <p>{review}</p>
      <p>{suggessions}</p>
      <p>
        <Rating
          name="half-rating"
          value={rating}
          precision={0.2}
          sx={{ filter: "drop-shadow(0px 0px 6px rgba(255,255,255,0.5))" }}
          readOnly
        />
      </p>
      <Tooltip title="Edit Review">
        <button className={classes.edit} onClick={handleopenmodal}>
          <label>
            <ModeEditIcon />
          </label>
        </button>
      </Tooltip>
      {showModal && (
        <Popup>
          <Window func={handleopenmodal} />
        </Popup>
      )}
    </div>
  );
}
