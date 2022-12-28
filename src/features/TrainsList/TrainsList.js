import { useSelector, useDispatch } from "react-redux";
import { fetchTrains } from "./TrainsListSlice";

function TrainsList() {
  const trains_list = useSelector((state) => {
    return state.TrainsList.trains;
  });

  const dispatch = useDispatch();
  trains_list.forEach((element) => {
    console.log(element);
  });

  return (
    <>
      <button onClick={() => dispatch(fetchTrains())}>trains</button>
    </>
  );
}

export default TrainsList;
