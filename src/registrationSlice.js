import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Registration from "./Registration";

const initialStateValue = {
  firstName: "",
  lastName: "",
  userName: "",
  password: "",
  gender: "",
  DOB: "",
  nationality: "",
  email: "",
  user_id: "",
};

export const inputUserData = createAsyncThunk(
  "registration/data",
  async (data) => {
    const response = await axios.post("http://127.0.0.1:8000/api/user/", data);
    console.log(response);
    return await response.data;
  }
);

const registrationSlice = createSlice({
  name: "registration",
  initialState: initialStateValue,
  reducers: {
    updateuserid: (state, action) => {
      state.user_id = action.payload;
    },
    updateFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    updateLastName: (state, action) => {
      state.lastName = action.payload;
    },
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateGender: (state, action) => {
      if (action.payload == "Male") {
        state.gender = 1;
      } else {
        state.gender = 2;
      }
    },
    updateBirthday: (state, action) => {
      state.DOB = action.payload;
    },
    updateNationality: (state, action) => {
      console.log(action);
      if (action.payload === "Indian") {
        state.nationality = 1;
      } else {
        state.nationality = 2;
      }
      // state.nationality = 1;
    },
    updatePhoneno: (state, action) => {
      state.phoneno = action.payload;
    },
    resetForm: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.userName = "";
      state.password = "";
      state.nationality = "";
      state.gender = "";
      state.user_id = "";
      state.DOB = "";
      state.email = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(inputUserData.fulfilled, (state, action) => {
      //state.status = "succeeded";
    });
    builder.addCase(inputUserData.rejected, (state, action) => {});
    builder.addCase(inputUserData.pending, (state, action) => {});
  },
});

export const actions = registrationSlice.actions;

export default registrationSlice.reducer;
