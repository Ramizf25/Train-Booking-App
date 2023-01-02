import React from "react";
import "./HomePage.css";
import SearchTrain from "../features/TrainsList/SearchTrain";

function HomePage() {
  return (
    <>
      <form>
        <div
          className="bg-image"
          style={{
            backgroundImage:
              'url("https://www.ap365days.in/wp-content/uploads/2018/11/IRCTC-Registration-2048x1152.jpg")',
            height: "100vh",
            backgroundSize: "cover",
          }}
        >
          <SearchTrain />
        </div>
      </form>
    </>
  );
}
export default HomePage;
