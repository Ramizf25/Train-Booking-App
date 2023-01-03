import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const passengerSlice = createSlice({


    name: "passenger",
    initialState: {
        passenger: [{ name: "", age: "", gender: "", nationality: "", preference: "" }],
        allData: [],

    },
    reducers: {

        addRow: (state) => {
            console.log("slice data", state)
            state.passenger.push({ name: "", age: "", gender: "", nationality: "", preference: "" });
            return state;
        },
        editRow: (state, action) => {
            const { value, property, index } = action.payload
            state.passenger[index][property] = value;
            console.log("valuesss", state.passenger, action.payload)
            return state;

        },
        saveAll: (state, action) => {
            const data = action.payload
            console.log("slice saveAll", data);
            state.allData.push({x:"bbb"})
            // for (const ele of data) { console.log("boo",ele) }
            // for (const ele of data) { state.allData.push({"bbb"})}

        },

    }
});

export const { addRow, editRow, saveAll } = passengerSlice.actions
export default passengerSlice.reducer