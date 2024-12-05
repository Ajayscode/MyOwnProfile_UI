/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const RW = [
  {
    name_: "ajay",
    rating_: 3,
    review_: "nothing bad! seems good.",
    suggessions_: "need improvements",
  },
  {
    name_: "strobe",
    rating_: 3.5,
    review_: "blah!blah!",
    suggessions_: "slick",
  },
];
const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState: {
    REVIEWS: RW,
    isOpen: false,
    isEdit: false,
    isblur: false,
    reviews: RW,
    current_review: null,
    isEmpty: {
      isNameEmpty: false,
      isReviewEmpty: false,
    },
  },
  reducers: {
    handleOpen(state) {
      state.isOpen = !state.isOpen;
      state.current_review = null;
      state.isblur = !state.isblur;
    },
    handleEdit(state, actions) {
      state.isEdit = !state.isEdit;
      state.current_review = actions.payload;
      state.isblur = !state.isblur;
    },
    handleformsubmit(state, actions) {
      const existing = state.reviews.find(
        (ele) => ele.name_ === actions.payload.name_
      );

      if (!existing) {
        const newReview = actions.payload;
        if (newReview.name_ === "" || newReview.name_ === null) {
          state.isEmpty.isNameEmpty = true;
        }
        state.reviews.push(newReview);
        state.REVIEWS.push(newReview);
        state.isOpen = false;
      } else {
        existing.review_ = actions.payload.review_;
        existing.suggessions_ = actions.payload.suggessions_;
        existing.rating_ = actions.payload.rating_;
        state.isEdit = false;
      }
      state.isblur = false;
    },
    handlesearch(state, actions) {
      console.log(actions.payload);
      const filtered_items = state.reviews.filter((ele) =>
        ele.name_.includes(actions.payload.searchTerm.toLowerCase())
      );
      if (actions.payload.searchTerm === "") {
        state.reviews = state.REVIEWS;
      } else {
        state.reviews = filtered_items;
      }
    },
    handleBlurToggle(state) {
      state.isblur = !state.isblur;
    },
  },
});

export default reviewSlice;
export const reviewActions = reviewSlice.actions;
