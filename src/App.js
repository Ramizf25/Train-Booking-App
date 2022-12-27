import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SearchTrain from './features/TrainsList/SearchTrain'
import ContactUs from './features/help/help'
import About from './features/About/about'
import TrainsList from './features/TrainsList/TrainsList'

function App() {
  return(
  <>
    <Router>
      <Routes>
        <Route exact path="/contact" element={<ContactUs/>}/>
        <Route exact path="/"  element={<SearchTrain/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path='/trains/list/' element={<TrainsList/>}/>
      </Routes>
    </Router>
  </>
  )
}

export default App;

