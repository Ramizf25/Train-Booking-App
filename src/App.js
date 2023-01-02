import TrainsList from "./features/TrainsList/TrainsList";
import UsersList from "./features/Users/UsersList";
import Registration from "./Registration";
import HomePage from "./home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./home/About";
import LoginPage from "./home/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="registration" element={<Registration />} />
          <Route path="/" element={<HomePage />} />
          <Route path="About" element={<About />} />
          <Route path="LoginPage" element={<LoginPage />} />
          {/* <TrainsList /> <UsersList /> */},{/* <Registration /> */},
          {/* <HomePage /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
