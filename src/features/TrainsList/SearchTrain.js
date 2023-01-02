import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTrains } from "../../Slices/TrainsListSlice";
import { from, to, date, general, quota } from "../../Slices/TrainsListSlice";

function SearchTrain() {
  const searchParams = useSelector((state) => {
    return state.TrainsList.searchParams;
  });
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const cities = ['BANGALORE', 'CALCUTTA', 'CHENNAI', 'DELHI', 'MUMBAI'];

  const routeChange = () => {
    if (cities.includes(searchParams.from) && cities.includes(searchParams.to)) {
      dispatch(fetchTrains(searchParams));
      let search_path = "/searchResults";
      navigate(search_path);
    } else {
      return (
        <span className="error">Invalid Input!</span>
      )
    }
    
  };

  return (
    <>
      <div className="wrapper bg-black">
        <form action="#">
          <h3>BOOK TICKET</h3>
          <div className="form-group d-sm-flex margin">
            <div></div>
            <div className="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">
              <input
                list="Cities"
                type="text"
                required=""
                placeholder="From"
                className="form-control"
                onChange={(event) => dispatch(from(event.target.value))}
              />

              <div className="label" id="from" />
              <span className="fas fa-dot-circle text-muted" />
            </div>
            <div className="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
              <input
                list="Cities"
                type="text"
                required=""
                placeholder="To"
                className="form-control"
                onChange={(event) => dispatch(to(event.target.value))}
              />
              <div className="label" id="to" />
              <span className="fas fa-map-marker text-muted" />
            </div>
            <datalist id="Cities">
              <option value="BANGALORE" />
              <option value="MUMBAI" />
              <option value="CHENNAI" />
              <option value="CALCUTTA" />
              <option value="DELHI" />
            </datalist>
          </div>
          <div className="form-group d-sm-flex margin">
            <div className="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative">
              <input
                type="date"
                required=""
                placeholder="Depart Date"
                className="form-control"
                onChange={(event) => dispatch(date(event.target.value))}
              />
              <div className="label" id="depart" />
            </div>
            <div>
              <input
                list="Classes"
                placeholder="All Classes"
                onChange={(event) => dispatch(general(event.target.value))}
              ></input>
              <datalist id="Classes">
                <option value="All Classes" />
                <option value="Sleeper" />
                <option value="AC" />
              </datalist>
              <input
                list="Quota"
                placeholder="General"
                onChange={(event) => dispatch(quota(event.target.value))}
              ></input>
              <datalist id="Quota">
                <option value="General" />
                <option value="Senior Citizen" />
                <option value="Tatkal" />
              </datalist>
            </div>
          </div>

          <div className="form-group my-3">
            <button
              className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3"
              onClick={routeChange}
            >
              Search Trains
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchTrain;
