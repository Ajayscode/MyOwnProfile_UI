/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { reviewActions } from "./reviewSlice";

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export const handleSummaryEditThunk = createAsyncThunk(
  "aboutSlice/handleSummaryEditThunk",
  async (_, { dispatch, getState }) => {
    dispatch(reviewActions.handleBlurToggle());
    dispatch(aboutActions.handleSummaryEdit());
  }
);

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
        name: "Aptroid Consulting Private Ltd.",
        from: "2023-09-09",
        to: formatDate(new Date()),
        highlights: [
          "Demonstrated proficiency in crafting clean and dynamic code which reduced bugs in code by 50%, leveraging expertise across",
          "multiple programming languages including react and redux libraries to address diverse project requirements.",
          "Actively contributed to code reviews, testing, and debugging activities to uphold software quality and functionality standards",
          "contributing to at least 40% of code efficiency.",
          "Ensured timely deployments by performing comprehensive code reviews and overseeing pull request processes, leading to a",
          "25% increase in code quality and a 30% reduction in deployment delays",
          "Developed standard and configurable reactive forms in React, cutting form creating time by 50% and enhancing user experience",
          "Built secure authentication with JWT (JSON web Tokens) to ensure data privacy and access control",
          "Implemented user-specific subscriptions and access permissions, ensuring tailored experience for individual users",
          "Resolved incoming tickets, providing timely updates and reducing backlog by 50%, while also improving overall team efficiency by 20%",
        ],
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
    handleOrgSubmit(state, actions) {
      state.organizations.push(actions.payload);
    },
  },
});

export default aboutSlice;
export const aboutActions = aboutSlice.actions;
