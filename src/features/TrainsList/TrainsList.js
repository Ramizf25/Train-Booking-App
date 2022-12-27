import { useSelector } from 'react-redux'

function TrainsList() {
    const trainsList = useSelector(state => {return state.TrainsList.trains});
    const listItems = trainsList.map(train =>
        <li key={train.id}>
          {"name: "}{train.train_name}{" ,"}   
          {"number: "}{train.train_no }{" ,"}  
          {"date: "}{train.date}{" ,"}  
          {"seats AC: "}{train.seats_AC}{" ,"}  
          {"seats sleeper: "}{train.seats_Sleeper}
        </li>
      );
        
    return (
        <>
            <h3>Search Results</h3>
            <ul>{listItems}</ul>
        </>
        
    )
  }

export default TrainsList