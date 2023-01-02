import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./features/help/help";
import About from "./features/About/about";
import TrainsList from "./features/TrainsList/TrainsList";
import Registration from "./features/Users/Registration"
import LoginPage from "./features/Users/LoginPage";
import Passengerdetails from "./features/Passenger/passengerdetails";
import HomePage from "./home/HomePage";
import CommonHF from "./home/commonHF";
//import './App.css'

function App() {
  return (
    <div>
      <Router>
      <CommonHF>
        <Routes>
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/LoginPage" element={<LoginPage />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Registration" element={<Registration/>} />
          <Route exact path="/searchResults/" element={<TrainsList />} />
          <Route exact path="/passenger/" element={<Passengerdetails />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </CommonHF>
      </Router>
    </div>
  );
}

export default App;
