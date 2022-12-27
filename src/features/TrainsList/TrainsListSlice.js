import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const client = axios.create({
   baseURL: "http://127.0.0.1:8000/"
});

const TrainName = (from, to) => {
  if (from === '' || to === '') {
    return '';
  } else if (from === 'CHENNAI') {
    return 'MAS-'+to.slice(0,3);
  } else if (to === 'CHENNAI') {
    return from.slice(0,3)+'-MAS';
  } else {
    return from.slice(0,3)+'-'+to.slice(0,3);
  }
}

export const fetchTrains = createAsyncThunk('/trains/list', async (searchParams) => {
  const train_name = TrainName(searchParams.from, searchParams.to);
  const search_api = '/api/trains/?train_name='+train_name+'&date='+searchParams.date;
  const response = await client.get(search_api);
  return response.data
})


const TrainsSlice = createSlice({
  name: "Trains",
  initialState: {
    searchParams: {
      from:'',
      to: '',
      date: '',
      general: '',
      quota: ''
    },
    trains: [],
    status: 'idle',
    error: null
  },
  reducers: {
    from: (state, action) => {
      state.searchParams.from = action.payload
    },
    to: (state, action) => {
      state.searchParams.to = action.payload
    },
    date: (state, action) => {
      state.searchParams.date = action.payload
    },
    general: (state, action) => {
      state.searchParams.general = action.payload
    },
    quota: (state, action) => {
      state.searchParams.quota = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrains.fulfilled, (state, action) => {
      state.status = 'succeeded'
      action.payload.forEach(train => {
        state.trains.push(train)
      });
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
export const {from, to, date, general, quota} = TrainsSlice.actions
export default TrainsSlice.reducer