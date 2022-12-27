import { useSelector, useDispatch } from 'react-redux'
import { fetchTrains } from './TrainsListSlice'
import { from, to, date, general, quota } from './TrainsListSlice'

function TrainsList() {
    //const trainsList = useSelector(state => {return state.TrainsList.trains});
    const searchParams = useSelector(state => {return state.TrainsList.searchParams})
    const dispatch = useDispatch();
    return (
      <>
        <h3>BOOK TICKET</h3>
        <div>
            <input list='Cities' placeholder='From' onChange={(event) => dispatch(from(event.target.value))}></input>
            <input list='Cities' placeholder='To' onChange={(event) => dispatch(to(event.target.value))}></input>
            <datalist id='Cities'>
                <option value="BANGALORE"/>
                <option value="MUMBAI"/>
                <option value="CHENNAI"/>
                <option value="CALCUTTA"/>
                <option value="DELHI"/>
            </datalist>
        </div><br/>
        <div>
            <label>DD/MM/YYYY:
                <input type="date" placeholder='Date' onChange={(event) => dispatch(date(event.target.value))}></input>
            </label>
        </div><br/>
        <div>
            <input list='Classes' placeholder='All Classes' onChange={(event) => dispatch(general(event.target.value))}></input>
            <datalist id='Classes'>
                <option value="All Classes"/>
                <option value="Sleeper"/>
                <option value="AC"/>
            </datalist>
            <input list='Quota' placeholder='General' onChange={(event) => dispatch(quota(event.target.value))}></input>
            <datalist id='Quota'>
                <option value="General"/>
                <option value="Senior Citizen"/>
            </datalist>
        </div><br/>
        <button onClick={() => dispatch(fetchTrains(searchParams))}>Search</button>
      </>
    )
  }

export default TrainsList

