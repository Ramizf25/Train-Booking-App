import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./TrainsList.css";
import { trainID, seatOpted, bookingDate } from "../../Slices/TrainsListSlice";

function TrainsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const trainsList = useSelector((state) => {
    return state.TrainsList.trains;
  });
  const searchParams = useSelector((state) => {
    return state.TrainsList.searchParams;
  });

  const routeToBooking = (train) => {
    dispatch(trainID(train.train_no));
    dispatch(bookingDate(train.date));
    navigate("/passenger/");
  };

  const listItems = trainsList.map((train) => (
    <div className="train">
      <div>
        <b>
          {train.train_name}
          {"("}
          {train.train_no}
          {")"}
        </b>
        <b>{train.date}</b> | {searchParams.from} {train.time.slice(14, 19)}{" "}
        {"=>"} {searchParams.to}
      </div>
      <div>
        <input
          type="radio"
          value="AC"
          name="seats"
          onClick={() => {
            dispatch(seatOpted("AC"));
          }}
        />{" "}
        AC(
        {train.seats_AC_general})
        <input
          type="radio"
          value="Sleeper"
          name="seats"
          onClick={() => {
            dispatch(seatOpted("Sleeper"));
          }}
        />{" "}
        Sleeper ({train.seats_Sleeper_general})
      </div>
      <button
        onClick={() => {
          routeToBooking(train);
        }}
      >
        Book Now
      </button>
    </div>
  ));

  return (
    <>
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
    </>
  );
}

export default TrainsList;
