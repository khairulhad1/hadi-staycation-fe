import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../configs/axios/index";

export const getDetailPage = createAsyncThunk(
  "detailPage/getDetailPage",
  async (id) => {
    const response = await axios.get(`/detail-page/${id}`);
    return response.data;
  }
);

const initialState = {
  data: null,
  error: null,
  loading: false,
};

const fetchDetailPageSlice = createSlice({
  name: "detailPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetailPage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDetailPage.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getDetailPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const detailPageSelector = (state) => state.detailPage;

export default fetchDetailPageSlice.reducer;
