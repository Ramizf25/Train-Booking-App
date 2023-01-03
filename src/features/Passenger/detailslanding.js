import { useSelector, useDispatch } from "react-redux";
import { trainID } from "../../Slices/TrainsListSlice";
import './style.css'

export default function Detailslanding() {
    /*Passenger Details */
    const passengerdata = useSelector((state) => {
        return state.PassengerDetails.passenger;
    });
    const passengerlist = passengerdata.map(passengr =>
        <li key={passengr.id}>
            {passengr.name}{" - "}{passengr.age}{" | "}{passengr.gender}{" | "}{passengr.nationality}
        </li>)

    /*Booking Details */
    const bookingdata1 = useSelector((state) => {
        return state.TrainsList.bookingDetails;
    });
    const bookingdata2 = useSelector((state) => {
        return state.TrainsList.searchParams;
    });
    console.log("detailspage", bookingdata2.from)

    const trainId = bookingdata1.trainID
    const seatOptd = bookingdata1.seatOpted
    const bookingDat = bookingdata1.bookingDate
    const frm = bookingdata2.from
    const to = bookingdata2.to
    const date = bookingdata2.date

    return (
        <> <div className="container">
            <h3> Booking Details: </h3>
            <h5>{"Booking date: "}{bookingDat}</h5>
            <h5>{frm}{" ->"}{to}{" | Journey date: "}{date}{" | "}{seatOptd}</h5><br></br>

            <h3> Passenger Details:</h3>
            <h5> {passengerlist}</h5><br></br>
            <p>Rs 495*</p>
            <button className="buttons">Pay</button>
        </div>

        </>
    )
}