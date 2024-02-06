// reducers/checkoutSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "../../configs/axios/instanceAxios";

export const postCheckout = createAsyncThunk(
  "checkout/postCheckout",
  async (postData) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.post("/booking-page", postData, config);
    return response.data;
  }
);

const initialState = {
  loading: false,
  error: null,
  checkoutData: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postCheckout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postCheckout.fulfilled, (state, action) => {
        state.loading = false;
        state.checkoutData = action.payload;
      })
      .addCase(postCheckout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const checkoutSelector = (state) => state.checkout;

export default checkoutSlice.reducer;
