import axios from "axios";
import { useState } from "react";
import './style.css'
const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/passenger-details/" 
 });


function Passengerdetails(){
    const initialState =[{name:"",age: "", gender: '',nationality: '', preference: ''}];
    const [data, setData]= useState(initialState);
    console.log(data)
    function submit(event){
        
        event.preventDefault()
        axios.post("http://127.0.0.1:8000/api/passenger-details/",data.data).then(function (response) {
            console.log(response);}).catch(function (error) {
                console.log(error);
              });
    }
 
    function addRow(){ 
        setData((d) => {console.log("data---x",d,data,initialState); return [...d,{...initialState[0]}]})
    }
    return(
        
        <form className="form" >
        <div className="form">
            {data.map((passenger,index)=>{ 
            return(
            <div key = {"passenger-"+index}>
            <input type={"text"} placeholder="Name" value={passenger.name} 
            onChange={(event)=> setData((data) => {data[index].name = event.target.value;
                console.log("======");
            return [...data]
            })}/>
            {/* <input type={"text"} placeholder="Age"  />
            <input type={"text"} placeholder="Gender" />
            <input type={"text"} placeholder="Nationality" />
            <input type={"text"} placeholder="Preference" /> */}
            </div>   
)
            
            })}
               
        </div>  
            <div className="button"><button onClick={addRow }>Add</button></div>

            
            {/* <button type="submit">continue</button> */}
            {/* <h1>{data.name}{" "}{data.age}{" "}{data.gender}{" "}{data.nationality}{" "}{data.preference}</h1> */}

            <p></p>

        </form>
        
    )

}

export default Passengerdetails;