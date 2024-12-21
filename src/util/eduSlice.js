import { createSlice } from "@reduxjs/toolkit";

const EduSlice = createSlice({
  name: "EduSlice",
  initialState: {
    currentSelection: null,
    isAdd: false,
    isEdit: false,
    details: [
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
    ],
  },

  reducers: {
    handleEdit(state, actions) {
      state.currentSelection = actions.payload.id;
    },

    handleToogle(state) {
      state.isEdit = !state.isEdit;
    },

    handlesubmit(state, actions) {
      !state.currentSelection && state.details.push(actions.payload);
      if (state.currentSelection !== null) {
        state.details[state.currentSelection] = actions.payload;
      }
    },

    handleAdd(state) {
      state.currentSelection = null;
    },
  },
});

export default EduSlice;
export const EduActions = EduSlice.actions;
