import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

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
          <div className="wrapper bg-black">
            <form action="#">
              <div className="form-group d-sm-flex margin">
                <div className="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">
                  <input
                    type="text"
                    required=""
                    placeholder="From"
                    className="form-control"
                  />
                  <div className="label" id="from" />
                  <span className="fas fa-dot-circle text-muted" />
                </div>
                <div className="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                  <input
                    type="text"
                    required=""
                    placeholder="To"
                    className="form-control"
                  />
                  <div className="label" id="to" />
                  <span className="fas fa-map-marker text-muted" />
                </div>
              </div>
              <div className="form-group d-sm-flex margin">
                <div className="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative">
                  <input
                    type="date"
                    required=""
                    placeholder="Depart Date"
                    className="form-control"
                  />
                  <div className="label" id="depart" />
                </div>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Class
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="">
                        General
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        AC
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Quota
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="">
                        General
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        Senior Citizen
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="form-group my-3">
                <div className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3">
                  Search Trains
                </div>
              </div>
            </form>
          </div>
        </div>
      </form>
    </>
  );
}
export default HomePage;
