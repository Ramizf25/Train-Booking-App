import { configureStore } from '@reduxjs/toolkit';
import trainsReducer from '../Slices/TrainsListSlice'
const myStore = configureStore({
    reducer: {
      TrainsList: trainsReducer,
      //dev: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    },
    
  })

export default myStore;