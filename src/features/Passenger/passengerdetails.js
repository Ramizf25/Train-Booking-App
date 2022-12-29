import axios from "axios";
import React, { useEffect, useState } from "react";
import './style.css'
const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/passenger-details/"
});


function Passengerdetails() {
    const initialState = [{ name: "", age: "", gender: '', nationality: '', preference: '' }];
    const [data, setData] = useState(initialState);

    useEffect(() => {
        console.log("DATA MUTATED", data);
    }, [data]);

    console.log(data)

    function submit(event) {
        axios.post("http://127.0.0.1:8000/api/passenger-details/", data.data).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    function addRow(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log("THIS IS THE EVENT PAYLOAD", event.isDefaultPrevented(), event.isPropagationStopped());
        setData((d) => { console.log("data---x", d, data, [...d, { ...initialState[0] }]); return [...d, { ...initialState[0] }] })
    }

    function reactToChange(event, property, index) {
        setData((data) => {
            data[index][property] = event.target.value;
            return [...data]
        })
    }

    return (
        <div>
            <div className="form">
                {
                    data.map((passenger, index) => {
                        return (
                            <div key={"passenger-" + index}>
                                <input type={"text"} placeholder="Name" value={passenger.name}
                                    onChange={(event) => { reactToChange(event, 'name', index) }} />
                                <input type={"text"} placeholder="Age" value={passenger.age}
                                    onChange={(event) => { reactToChange(event, 'age', index) }} />
                                <input type={"text"} placeholder="Gender" value={passenger.gender}
                                    onChange={(event) => { reactToChange(event, 'gender', index) }} />
                                <input type={"text"} placeholder="Preference" value={passenger.preference}
                                    onChange={(event) => { reactToChange(event, 'preference', index) }} />
                                <input type={"text"} placeholder="Nationality" value={passenger.nationality}
                                    onChange={(event) => { reactToChange(event, 'nationality', index) }} />
                            </div>
                        )

                    })
                }
            </div>
            <div className="button">
                <button onClickCapture={addRow}>Add</button>
                <button onClickCapture={submit}>Continue</button>
            </div>
        </div>
    )

}

export default Passengerdetails;