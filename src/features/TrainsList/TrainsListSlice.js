import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const client = axios.create({
   baseURL: "http://127.0.0.1:8000/api/trains/" 
});


export const fetchTrains = createAsyncThunk('/trains/list', async () => {
  const response = await client.get('http://127.0.0.1:8000/api/trains/');
  //console.log("response.data = ",response.data)
  return response.data
})


const TrainsSlice = createSlice({
  name: "Trains",
  initialState: {
    trains: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrains.fulfilled, (state, action) => {
      state.status = 'succeeded'
      action.payload.forEach(train => {
        state.trains.push(train)
      });
      //state.trains.push(action.payload)
      })
    builder.addCase(fetchTrains.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.payload
      })
    builder.addCase(fetchTrains.pending, (state, action) => {
      state.status = 'idle'
      })
  }
})

export default TrainsSlice.reducer