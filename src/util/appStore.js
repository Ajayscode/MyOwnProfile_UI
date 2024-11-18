import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from "./reviewSlice";

const AppStore = configureStore({
  reducer: {
    reviewSlice: reviewSlice.reducer,
  },
});

export default AppStore;
