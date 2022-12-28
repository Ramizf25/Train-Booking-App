import { configureStore } from "@reduxjs/toolkit";
import trainsReducer from "./features/TrainsList/TrainsListSlice";
import usersReducer from "./features/TrainsList/UserListSlice";
import registrationReducer from "./registrationSlice";
const myStore = configureStore({
  reducer: {
    TrainsList: trainsReducer,
    UsersList: usersReducer,
    registration: registrationReducer,

    //dev:
    //  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // window.__REDUX_DEVTOOLS_EXTENSION__(),
  },
});

export default myStore;
