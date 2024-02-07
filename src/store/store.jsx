// store.js
import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./reducers/bookingSlice";
import fetchPageReducer from "./reducers/fetchPageSlice";
import fetchDetailPageSlice from "./reducers/fetchDetailPageSlice";
import checkoutSlice from "./reducers/checkoutSlice";

const store = configureStore({
  reducer: {
    booking: bookingReducer,
    page: fetchPageReducer,
    detailPage: fetchDetailPageSlice,
    checkout: checkoutSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
