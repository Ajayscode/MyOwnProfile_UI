import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from "./reviewSlice";
import aboutSlice from "./aboutSlice";

const AppStore = configureStore({
  reducer: {
    reviewSlice: reviewSlice.reducer,
    aboutSlice: aboutSlice.reducer,
  },
});

export default AppStore;
