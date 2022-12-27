import { useSelector, useDispatch } from 'react-redux'
import { fetchTrains } from './TrainsListSlice'

function TrainsList() {
    const dispatch = useDispatch();

    const trains_list = useSelector(state => {return state.TrainsList.trains});
    console.log(trains_list)
 
    const listItems = trains_list.map(train =>
      <li key={train.id}>
        {"name: "}{train.train_name}{" ,"}   
        {"number: "}{train.train_no }{" ,"}  
        {"date: "}{train.date}{" ,"}  
        {"seats AC: "}{train.seats_AC}{" ,"}  
        {"seats sleeper: "}{train.seats_Sleeper}
      </li>
    );
    
    // trains_list.forEach(element => {
    //     console.log(element)
    // });

    return (
      <>
      <button onClick={() => dispatch(fetchTrains())}>trains</button>
      <ul>{listItems}</ul>
      </>
    )
  }

export default TrainsList

