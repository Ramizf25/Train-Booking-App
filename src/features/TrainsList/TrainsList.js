import { useSelector } from 'react-redux'

function TrainsList() {
    const trainsList = useSelector(state => {return state.TrainsList.trains});
    const listItems = trainsList.map(train =>
        <><tr key={train.id}>
            <td>{train.train_name}</td>
            <td>{train.train_no}</td>
            <td>{train.date}</td>
            <td><button>{train.seats_AC}</button></td>
            <td><button>{train.seats_Sleeper}</button></td>
            <td><button disabled>Book Now</button></td>
        </tr></>
      );
        
    return (
        <>
            <h3>Search Results</h3>
            <p>{trainsList.length} Results</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>   
                        <th>Number</th> 
                        <th>Date</th>
                        <th>AC seats</th> 
                        <th>Sleeper seats</th>
                    </tr>
                </thead>
                <tbody>{listItems}</tbody>
            </table>
        </>
        
    )
  }

export default TrainsList