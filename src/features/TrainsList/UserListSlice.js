import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/api/user/",
});

export const fetchUsers = createAsyncThunk("Users/list", async () => {
  const response = await client.get("http://127.0.0.1:8000/api/user/");
  //console.log(response);
  return await response.data;
});

const UsersSlice = createSlice({
  name: "Users",
  initialState: {
    users: [],
    status: "idle",
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      //state.status = "succeeded";

      action.payload.forEach((User) => {
        state.users.push(User);
      });
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.status = "idle";
    });
  },
});

export default UsersSlice.reducer;
