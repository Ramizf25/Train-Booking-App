import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const passengerSlice = createSlice({
    

    name: "passenger",
    initialState: {
        passenger: [{ name: "", age: "", gender: "", nationality: "", preference: "" }]
    },
    reducers: {
        addRow: (state) => {
            console.log("slice data", state)
            state.passenger.push({ name: "", age: "", gender: "", nationality: "", preference: "" });
            return state;
        },
        editRow: (state,action) => {
            const {value, property, index} = action.payload
            state.passenger[index][property] = value;
            console.log("valuesss", state.passenger, action.payload)
            return state;
            
        }  
    }
});

export const {addRow, editRow} = passengerSlice.actions
export default passengerSlice.reducer