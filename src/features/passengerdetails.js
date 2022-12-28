import axios from "axios";
import { useState } from "react";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/passenger-details/" 
 });

 const initialState =[{name:"",age: "", gender: '',nationality: '', preference: ''}];
function Passengerdetails(){
    const [data, setData]= useState(initialState);
    console.log(data)
    function submit(event){
        
        event.preventDefault()
        axios.post("http://127.0.0.1:8000/api/passenger-details/",data.data).then(function (response) {
            console.log(response);}).catch(function (error) {
                console.log(error);
              });
    }
    // createDetails = async () => {
    //     let res = await api.post('/',{ "name": 'Ramiz', "age": "30", "gender": 'male',
    //          "nationality": 'Indian', "preference": null})
    // }
    
    return(
        <form onSubmit={(event) => submit(event)}>
            <input type={"text"} placeholder="Name" onChange={event => setData({...data, name: event.target.value })}/>
            <input type={"text"} placeholder="Age"  onChange={event => setData({...data, age: event.target.value })}/>
            <input type={"text"} placeholder="Gender" onChange={event => setData({...data, gender: event.target.value })}/>
            <input type={"text"} placeholder="Nationality" onChange={event => setData({...data, nationality: event.target.value })}/>
            <input type={"text"} placeholder="Preference" onChange={event => setData({...data, preference: event.target.value })}/>
            <button>Add</button>
            <button type="submit">continue</button>
            <h1>{data.name}{" "}{data.age}{" "}{data.gender}{" "}{data.nationality}{" "}{data.preference}</h1>

            <p></p>

        </form>
    )

}

export default Passengerdetails;