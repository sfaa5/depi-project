import React from 'react'


const Header = () => {
  return (

    <header>

    <div class="top-header">
      <div class="container">
        <img src="../assets/images/home/logo (1).png" alt=""/>
        <button class="nav-btn">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="contact">
          <div class="col">
            <img src="./assets/images/home/1.png" alt="phone" />
            <span>
              Number : <br />
              <b>+880123456789</b>
            </span>
          </div>

          <div class="col"> <img src="./assets/images/home/2.png" alt="phone" />
            <span>
              Email : <br />
              <b>Mukti@gmail.com</b>
            </span>
          </div>

          <div class="col"><img src="./assets/images/home/3.png" alt="phone" />
            <span>
              Address : <br />
              <b>12 North West New York</b>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="bottem-nav ">
      <div class="container">
        <ul>

          <li><a href="index.html">Home</a></li>
          <li><a href="#">Departments</a></li>
          <li><a href="doctors.html">Doctors</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="about-us.html">About us</a></li>
          <li><a href="#">Contact Us</a></li>

        </ul>
      </div>
    </div>

   

  </header> 
  )
}

export default Header