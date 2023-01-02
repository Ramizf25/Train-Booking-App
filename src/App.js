import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SearchTrain from './features/TrainsList/SearchTrain'
import ContactUs from './features/help/help'
import About from './features/About/about'
import TrainsList from './features/TrainsList/TrainsList'
import Passengerdetails from './features/Passenger/passengerdetails'
//import './App.css'

function App() {
  return(
  <div>
    <Router>
      <Routes>
        <Route exact path="/contact" element={<ContactUs/>}/>
        <Route exact path="/"  element={<SearchTrain/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path='/searchResults/' element={<TrainsList/>}/>
        <Route exact path="/passenger/" element={<Passengerdetails/>}/>
      </Routes>
    </Router>
  </div>
  )
}

export default App;

