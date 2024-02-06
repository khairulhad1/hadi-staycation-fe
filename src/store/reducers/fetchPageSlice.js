import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../configs/axios/index";

export const getPage = createAsyncThunk("page/getPage", async () => {
  const response = await axios.get(`/landing-page`);
  return response.data;
});

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const fetchPageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPage.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const pageSelector = (state) => state.page;

export default fetchPageSlice.reducer;
