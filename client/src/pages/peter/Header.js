import React from "react";
import "./Header.css";

function Header({ setChange, logo }) {
  return (
    <header className="header">
      <TopBar logo={logo} />
      <BottBar setChange={setChange} />
    </header>
  );
}

function TopBar({ logo }) {
  return (
    <div className="top-header">
      <div className="container">
        {logo}
        <button className="nav-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="contact">
          <div className="col">
            <img src="1.png" alt="phone" />
            <span>
              Number : <br />
              <b>+880123456789</b>
            </span>
          </div>

          <div className="col">
            <img src="2.png" alt="phone" />
            <span>
              Email : <br />
              <b>Mukti@gmail.com</b>
            </span>
          </div>

          <div className="col">
            <img src="3.png" alt="phone" />
            <span>
              Address : <br />
              <b>12 North West New York</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottBar({ setChange }) {
  return (
    <div className="bottom-nav">
      <div className="container">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="departments.html">Departments</a>
          </li>
          <li>
            <a href="doctors.html">Doctors</a>
          </li>
          <li>
            <a href="#" onClick={() => setChange("Services")}>
              Services
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setChange("Blog")}>
              Blog
            </a>
          </li>
          <li>
            <a href="about-us.html">About us</a>
          </li>
          <li>
            <a href="#" onClick={() => setChange("Contact")}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
