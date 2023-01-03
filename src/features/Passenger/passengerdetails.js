import axios from "axios";
//import {useNavigate} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRow, editRow } from "../../Slices/passengerSlice";
import './style.css'


function Passengerdetails() {
  const data = useSelector((state) => {
    return state.PassengerDetails.passenger;
  });
  const dispatch = useDispatch();
 
  
  function submit(event) {
    console.log("DATA xx MUTATED", data);
    for (const ele of data) {
      axios
        .post("http://127.0.0.1:8000/api/passenger-details/", ele)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function addaRow(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(
      "THIS IS THE EVENT PAYLOAD",
    data
    );
    dispatch(addRow());
    
  }

  function reactToChange(event, property, index) {
    dispatch(editRow({value:event.target.value, property, index}))
  }

  return (
    <div className="container">
      <h3>Passenger Details :</h3>
      <div className="form">
        {data.map((passenger, index) => {
          return (
            <div key={"passenger-" + index} >
              <input className="input"
                type={"text"}
                placeholder="Name"
                value={passenger.name}
                onChange={(event) => {
                  reactToChange(event, "name", index);
                }}
              />
              <input className="input"
                type={"text"}
                placeholder="Age"
                value={passenger.age}
                onChange={(event) => {
                  reactToChange(event, "age", index);
                }}
              />
              <input className="input"
                list="gender"
                type={"text"}
                placeholder="Gender"
                value={passenger.gender}
                onChange={(event) => {
                  reactToChange(event, "gender", index);
                }}
              />
              <datalist id="gender">
                <option value={"Male"} />
                <option value={"Female"} />
                <option value={"Transgender"} />
              </datalist>
              <input
                list="preference"
                type={"text"}
                placeholder="Preference"
                value={passenger.preference}
                onChange={(event) => {
                  reactToChange(event, "preference", index);
                }}
              />
              <datalist id="preference">
                <option value={"No Preference"} />
                <option value={"Lower"} />
                <option value={"Middle"} />
                <option value={"Upper"} />
              </datalist>
              <input className="input"
                list="nationality"
                type={"text"}
                placeholder="Nationality"
                value={passenger.nationality}
                onChange={(event) => {
                  reactToChange(event, "nationality", index);
                }}
              />
              <datalist id="nationality">
                <option value={"India"} />
                <option value={"other"} />
              </datalist>
            </div>
          );
        })}
      </div>
      <div className="button">
        <button className="buttons" onClickCapture={addaRow}>+ Add Passenger</button><br></br>
        <button className="buttons" onClickCapture={submit}>Continue</button>
      </div>
    </div>
  );
}

export default Passengerdetails;
