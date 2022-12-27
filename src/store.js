import { configureStore } from '@reduxjs/toolkit';
import trainsReducer from './features/TrainsList/TrainsListSlice'
import bookingReducer from './features/Booking/BookingSlice'
const myStore = configureStore({
    reducer: {
      TrainsList: trainsReducer,
      Booking: bookingReducer,
      
      //dev: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    },
    
  })

export default myStore;