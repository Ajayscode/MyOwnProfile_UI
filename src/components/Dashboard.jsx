import Input from "../content/input";
import classes from "./Dashboard.module.css";
import AddIcon from "@mui/icons-material/Add";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import image from "./../assets/tomato.svg";
import Popup from "../content/PopupLayout";
import Window from "../content/window";
import ContentBox from "../content/contentBox";
import { useDispatch, useSelector } from "react-redux";
import { reviewActions } from "../util/reviewSlice";
import { Tooltip } from "@mui/material";

export default function Dashboard() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.reviewSlice.isOpen);
  const reviews = useSelector((state) => state.reviewSlice.reviews);

  function handleopen() {
    dispatch(reviewActions.handleOpen());
  }
  function handlesearch(e) {
    dispatch(reviewActions.handlesearch({ searchTerm: e.target.value }));
  }

  return (
    <>
      <div className={classes.main__Container}>
        <div className={classes.profile__Container}>
          <div className={classes.pict_holder}>
            <img src={image} />
          </div>
          <div className={classes.links}>
            <p>
              <NavLink to="./about">About</NavLink>
            </p>
            <p>
              <NavLink to="./skills">Technical Skills</NavLink>
            </p>
            <p>
              <NavLink to="./education">education</NavLink>
            </p>
            <p>
              <NavLink to="./bio">bio</NavLink>
            </p>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.review_Container}>
          <div id={classes.content_head}>
            <Input
              placeholder="Search Reviews"
              type="text"
              func={handlesearch}
            />
            <button className={classes.btn__convolute}>
              <SearchIcon />
            </button>
            <Tooltip title="Add New Review">
              <button className={classes.btn} onClick={handleopen}>
                <label>
                  <AddIcon />
                </label>
              </button>
            </Tooltip>
          </div>
          <ul id={classes.content}>
            {reviews.map((ele) => {
              return (
                <li key={ele.name_}>
                  <ContentBox
                    name={ele.name_}
                    review={ele.review_}
                    suggessions={ele.suggessions_}
                    rating={ele.rating_}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {showModal && (
        <Popup>
          <Window func={handleopen} />
        </Popup>
      )}
    </>
  );
}
