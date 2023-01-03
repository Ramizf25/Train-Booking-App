import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export const fetchTrains = createAsyncThunk(
  "/trains/list",
  async (searchParams) => {
    const search_api =
      "/api/trains/?&date=" +
      searchParams.date +
      "&departure=" +
      searchParams.from +
      "&arrival=" +
      searchParams.to;
    const response = await client.get(search_api);
    return response.data;
  }
);

const TrainsSlice = createSlice({
  name: "Trains",
  initialState: {
    searchParams: {
      from: "",
      to: "",
      date: "",
      general: "",
      quota: "",
    },
    bookingDetails: {
      trainID: 0,
      seatOpted: "",
      bookingDate: "",
    },
    trains: [],
    status: "idle",
    error: null,
  },
  reducers: {
    from: (state, action) => {
      state.searchParams.from = action.payload;
    },
    to: (state, action) => {
      state.searchParams.to = action.payload;
    },
    date: (state, action) => {
      state.searchParams.date = action.payload;
    },
    general: (state, action) => {
      state.searchParams.general = action.payload;
    },
    quota: (state, action) => {
      state.searchParams.quota = action.payload;
    },
    trainID: (state, action) => {
      state.bookingDetails.trainID = action.payload;
    },
    seatOpted: (state, action) => {
      state.bookingDetails.seatOpted = action.payload;
    },
    bookingDate: (state, action) => {
      state.bookingDetails.bookingDate = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrains.fulfilled, (state, action) => {
      state.status = "succeeded";
      action.payload.forEach((train) => {
        state.trains.push(train);
      });
    });
    builder.addCase(fetchTrains.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
    builder.addCase(fetchTrains.pending, (state, action) => {
      state.status = "idle";
    });
  },
});
export const { from, to, date, general, quota, trainID, seatOpted, bookingDate } = TrainsSlice.actions;
export default TrainsSlice.reducer;