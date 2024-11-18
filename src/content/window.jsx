/* eslint-disable react/prop-types */
import classes from "./window.module.css";
import Input from "./input";
import Button from "./button";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
import { reviewActions } from "../util/reviewSlice";
import { useState } from "react";

export default function Window({ func }) {
  const dispatch = useDispatch();
  const currentReview = useSelector(
    (state) => state.reviewSlice.current_review
  );
  const isEdit = useSelector((state) => state.reviewSlice.isEdit);
  const [eleState, seteleState] = useState({
    name_: currentReview?.name_ || "",
    review_: currentReview?.review_ || "",
    suggessions_: currentReview?.suggessions_ || "",
    rating_: currentReview?.rating_ || 0,
  });

  function handlesubmit(e) {
    e.preventDefault();
    dispatch(reviewActions.handleformsubmit(eleState));
  }
  return (
    <>
      <form className={classes.container}>
        <Input
          placeholder={"Enter text"}
          label={"Name"}
          value={eleState.name_}
          func={(e) => {
            seteleState({ ...eleState, name_: e.target.value });
          }}
        />
        <Input
          placeholder={"Enter text"}
          label="Review"
          value={eleState.review_}
          func={(e) => {
            seteleState((prev) => {
              return { ...prev, review_: e.target.value };
            });
          }}
        />
        <Input
          func={(e) => {
            seteleState((prev) => {
              console.log(e.target.value);
              return { ...prev, rating_: e.target.value };
            });
          }}
          rating
          label="Rating"
          value={eleState.rating_}
        />
        <Input
          placeholder={"enter text"}
          label={"Suggessions"}
          value={eleState.suggessions_}
          func={(e) => {
            seteleState((prev) => {
              return { ...prev, suggessions_: e.target.value };
            });
          }}
        />
        <div className={classes.btn__grp}>
          <Button
            type="submit"
            label={!isEdit ? "Add Review" : "Update Review"}
            level={1}
            func={handlesubmit}
          />
          <Button type="reset" label={"Cancel"} level={0} func={func} />
          <button className={classes.close} onClick={func}>
            <label>
              <CancelIcon />
            </label>
          </button>
        </div>
      </form>
    </>
  );
}
