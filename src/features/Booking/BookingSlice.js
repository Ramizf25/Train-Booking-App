import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const client = axios.create({
   baseURL: "http://127.0.0.1:8000/api/booking/" 
});


export const fetchbookings = createAsyncThunk('/trains/list', async () => {
  const response = await client.get('http://127.0.0.1:8000/api/booking/');
  console.log("b response.data = ",response.data)
  return response.data
})


const BookingSlice = createSlice({
  name: "Booking",
  initialState: {
    booking: [],
    status: 'idle',
    error: null
  },
  
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchbookings.fulfilled, (state, action) => {console.log(state,"xxx");
      state.status = 'succeeded'
      console.log(state,'xx');
      action.payload.forEach(booking => {
        state.booking.push(booking)
        
      });
      //state.trains.push(action.payload)
      })
    builder.addCase(fetchbookings.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.payload
      })
    builder.addCase(fetchbookings.pending, (state, action) => {
      state.status = 'idle'
      })
  }
})


export default BookingSlice.reducer