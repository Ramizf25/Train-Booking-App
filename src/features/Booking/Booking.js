import { useSelector, useDispatch } from 'react-redux'
import { fetchbookings } from './BookingSlice'; 

function Booking() {
    const booking_list = useSelector(state => {return state.Booking.booking});
    console.log("XXX",booking_list)
    const dispatch = useDispatch();
    // trains_list.forEach(element => {
    //     console.log(element)
    // });
    const listItems = booking_list.map(booking =>
        <li key={booking.id}>
          {"user id: "}{booking.user_id}{" ,"}   
          {"train: "}{booking.train }{" ,"}  
          {"status: "}{booking.status}
        </li>
      );
    return (
      <>
      <button onClick={() => dispatch(fetchbookings())}>Booking</button>
      <ul>{listItems}</ul>
      </>
    )
  }

export default Booking

