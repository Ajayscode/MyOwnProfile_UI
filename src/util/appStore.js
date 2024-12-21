import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from "./reviewSlice";
import aboutSlice from "./aboutSlice";
import EduSlice from "./eduSlice";

const AppStore = configureStore({
  reducer: {
    reviewSlice: reviewSlice.reducer,
    aboutSlice: aboutSlice.reducer,
    EduSlice: EduSlice.reducer,
  },
});

export default AppStore;
