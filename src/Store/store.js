import { configureStore } from '@reduxjs/toolkit';
import trainsReducer from '../Slices/TrainsListSlice'
import registrationReducer from "../Slices/RegistrationSlice";
import passengerReducer from '../Slices/passengerSlice'
const myStore = configureStore({
    reducer: {
      TrainsList: trainsReducer,
      registration: registrationReducer,
      PassengerDetails: passengerReducer,
      //dev: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    },
    
  })

export default myStore;