/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { reviewActions } from "./reviewSlice";

// Thunk to handle summary edit and update review slice export
export const handleSummaryEditThunk = createAsyncThunk(
  "aboutSlice/handleSummaryEditThunk",
  async (_, { dispatch, getState }) => {
    // Toggle isblur in reviewSlice
    dispatch(reviewActions.handleBlurToggle());
    // Toggle isSummaryEdit in aboutSlice
    dispatch(aboutActions.handleSummaryEdit());
  }
);

// Thunk to handle org add and update review slice

export const handleOrgAddThunk = createAsyncThunk(
  "aboutSlice/handleOrgAddThunk",
  async (_, { dispatch, getState }) => {
    dispatch(reviewActions.handleBlurToggle());
    dispatch(aboutActions.handleOrgAdd());
  }
);

const aboutSlice = createSlice({
  name: "aboutSlice",
  initialState: {
    summary:
      "I amahighly motivated front-end Developer with 2 years of hands-on experience, coupled with a strong expertise in React.js. My deep knowledge of JavaScript, complemented by proficiency in Express.js, redux and Flask frameworks(python), allows me to build robust and scalable web applications. I am adept at delivering seamless and high-performance solutions. I am passionate about leveraging my skills to create innovative applications that enhance user experience and drive business growth.",
    organizations: [
      {
        name: "test",
        from: "2023-09-09",
        to: new Date().toISOString(),
        highlights: ["test", "rest", "test2", "test4", "test5"],
      },
    ],
    isSummaryEdit: false,
    isAddOrg: false,
  },

  reducers: {
    handleSummarySubmit(state, actions) {
      state.summary = actions.payload.summary;
    },
    handleSummaryEdit(state) {
      state.isSummaryEdit = !state.isSummaryEdit;
    },
    handleOrgAdd(state) {
      state.isAddOrg = !state.isAddOrg;
    },
  },
});

export default aboutSlice;
export const aboutActions = aboutSlice.actions;
