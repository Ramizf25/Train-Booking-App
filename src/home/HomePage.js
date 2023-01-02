import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <form>
        <header>
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnerves7081.blogspot.com%2F2020%2F12%2F40-logo-png-full-hd-indian-railway-logo.html&psig=AOvVaw2OZ1LYWbNmDiJPAVl6OaGN&ust=1672399876141000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIjD1JXdnvwCFQAAAAAdAAAAABBY"
              alt=""
              width="40"
              height="40"
            ></img>
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarExample01"
                aria-controls="navbarExample01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars" />
              </button>
              <div className="collapse navbar-collapse" id="navbarExample01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item active">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="http://localhost:3001/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      My account
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="LoginPage">
                      {/* <a className="nav-link" href=""> */}
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Registration">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="About">
                      About
                    </Link>

                    {/* </li>< className="nav-link" href=""> */}
                    {/* About */}
                    {/* </a> */}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

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

      {/* Footer */}
      <footer className="text-center text-lg-start bg-light text-muted">
        <div className="text-center">
          <button type="button" className="btn btn-link btn-floating mx-1">
            <a
              className="bi bi-facebook "
              target="_blank"
              href="https://www.facebook.com/"
            ></a>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <a
              className="bi bi-linkedin "
              target="_blank"
              href="https://www.facebook.com/"
            ></a>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <a
              className="bi bi-youtube "
              target="_blank"
              href="https://www.youtube.com/"
            ></a>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <a className="bi bi-google" href="https://www.google.com/"></a>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <a
              className="bi bi-instagram"
              herf="https://www.instagram.com/"
            ></a>
          </button>
        </div>
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-1">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  About IRCTC
                </h6>
                <p>Here you can use anything to show info</p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Booking
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Info
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Profile
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a>
                    <Link to="registration">Register</Link>
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Search
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3" /> Urban Vault 721 ,blah blah
                  blah, Mumbai ,200313
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  IRCTC@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3" /> + 01 234 567 89
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            IRCTCgovt.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
}
export default HomePage;
