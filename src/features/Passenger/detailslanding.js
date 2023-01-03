import { useSelector, useDispatch } from "react-redux";
import { trainID } from "../../Slices/TrainsListSlice";


export default function Detailslanding() {
    /*Passenger Details */
    const passengerdata = useSelector((state) => {
        return state.PassengerDetails.passenger; });
    const passengerlist = passengerdata.map(passengr => 
        <li key={passengr.id}> 
        {passengr.name}{" - "}{passengr.age}{" | "}{passengr.gender}{" | "}{passengr.nationality}
        </li>)

    /*Booking Details */
    const bookingdata1 = useSelector((state) => { 
        return state.TrainsList.bookingDetails; });
    const bookingdata2 = useSelector((state) => { 
        return state.TrainsList.searchParams; });
    console.log("detailspage", bookingdata2.from)
  
    const trainId = bookingdata1.trainID
    const seatOptd = bookingdata1.seatOpted
    const bookingDat = bookingdata1.bookingDate
    const frm = bookingdata2.from
    const to = bookingdata2.to
    const date = bookingdata2.date
    
    return (
        <>
            <h1> Booking Details: </h1>
            <h5>{"Booking date: "}{bookingDat}{frm}{" ->"}{to}
            {" | Journey date: "}{date}{" | Seat no. "}{seatOptd}{" | Train number"}{trainID}</h5>

            <h1> Passenger Details:</h1>
            <h5> {passengerlist}</h5>
            <p>Rs 495*</p>
            <button>Pay</button>
        </>
    )
}