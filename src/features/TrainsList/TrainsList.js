import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./TrainsList.css";
import { trainID, seatOpted, bookingDate } from "../../Slices/TrainsListSlice";
import { useState } from "react";

function TrainsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [BookingStatus, setBookingStatus] = useState(true)


  const trainsList = useSelector((state) => {
    return state.TrainsList.trains;
  });
  const searchParams = useSelector((state) => {
    return state.TrainsList.searchParams;
  });

  const onchangeDetails = (seat, train) => {
    dispatch(trainID(train.train_no));
    dispatch(bookingDate(train.date));
    dispatch(seatOpted(seat));
    setBookingStatus(false)
  }

  const routeToBooking = () => {
    let path = "/passenger"
    navigate(path);
  };

  const listItems = trainsList.map((train) => (
    <div className="train">
      <div>
        <b>
          {train.train_name}
          {" ("}
          {train.train_no}
          {") "}
        </b>
        <b>{train.date}</b> {" | "} {searchParams.from}{" "}
        {train.time.slice(14, 19)} {"=>"} {searchParams.to}{" "}
        {train.arrival_time.slice(14, 19)}
      </div>
      <div>
        <input
          type="radio"
          value="AC"
          name="seats"
          onClick={(event) => {onchangeDetails(event.target.value, train);}}
        />{" "}
        AC(
        {train.seats_AC_general})
        <input
          type="radio"
          value="Sleeper"
          name="seats"
          onClick={(event) => {onchangeDetails(event.target.value, train);}}
        />{" "}
        Sleeper ({train.seats_Sleeper_general})
      </div>
      
    </div>
  ));

  return (
    <>
      <div className="container">
        <div>
          {trainsList.length} Results for{" "}
          <b>
            {searchParams.from} {"=>"} {searchParams.to} | {searchParams.date}
          </b>{" "}
          for Quota | {searchParams.quota}
        </div>
        <br />
        <div>{listItems}</div>
        <br />
        <button  className="bookNow"
        onClick={routeToBooking}
      >
        Book Now
      </button>
      </div>
    </>
  );
}

export default TrainsList;
