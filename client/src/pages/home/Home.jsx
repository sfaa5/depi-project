import {useEffect,useState} from 'react'

import Doctor from '../../components/Doctor';
import Modal from './Modal';
import  "../../style/home.css"
import Appointment from './Appointment';


const Home = () => {


  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/doctor'); // Adjust the URL
        if (!response.ok) {
          throw new Error('Failed to fetch doctors');
        }
        const data = await response.json();
        setDoctors(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);



  return (
    <>
    <div class="landing">
    <div class="container">
      <div class="content">
        <h4>Best Medical Clinic</h4>
       
          <b class="blue-color">Bringing Health  <b style={{color:"black",fontSize:"1em"}}>To </b> </b>
          <b> Life For The Whole</b>
          <b>Family...</b>
      

        <button class="btn btn-primary">Get Appoinments »</button>
      </div>
    </div>
  </div>

  <div class="specialized">



    <div class="container">


      <div class="text-section ">
        <p>We Offer Specialized</p>
        <h1>Orthopedics To Meet Your Needs</h1>
      </div>

      <div class="specialisations">




        <div class="card">
          <img src="./assets/images/home/medical-symbol.png" alt=""/>
          <div class="card-body">

            <b class="card-title  ">
              Medical Treatment
            </b>

            <p class="card-text  ">
              Lorem ipsum dolor sit amete
              consectetur adipisicing elite.
              vlote optio animi?
            </p>

            <span class="card-text ">Read More »</span>
          </div>
        </div>


        <div class="card">
          <img src="./assets/images/home/delivery-truck.png" alt=""/>
          <div class="card-body">

            <b class="card-title ">
           Emergency Help 
            </b>
            <p class="card-text m-2 ">
              Lorem ipsum dolor sit amete
              consectetur adipisicing elite.
              vlote optio animi?
            </p>

            <span class="card-text ">Read More »</span>
          </div>
        </div>

        <div class="card">
          <img src="./assets/images/home/hospital-building.png" alt=""/>
          <div class="card-body">

            <b class="card-title ">
              Medical Professionals
            </b>

            <p class="card-text ">
              Lorem ipsum dolor sit amete
              consectetur adipisicing elite.
              vlote optio animi?
            </p>
            <span class="card-text ">Read More »</span>
          </div>
        </div>

        <div class="card">
          <img src="./assets/images/home/doctor.png" alt=""/>
          <div class="card-body">

            <b class="card-title ">
              Qualified Doctors
            </b>
            <p class="card-text  ">
              Lorem ipsum dolor sit amete
              consectetur adipisicing elite.
              vlote optio animi?
            </p>
            <span class="card-text ">Read More »</span>
          </div>
        </div>


</div>
      </div>
    </div>


    <section class="Best-centers">
      <div class="container">
        <div class="text-section">
          <p>we are the</p>
          <h1>best our departments centers</h1>
        </div>
        <div class="icons ">
          <img class="icon " src="././assets/images/home/01.png" alt="" />
          <img class="icon " src="././assets/images/home/01.png" alt="" />
          <img class="icon " src="././assets/images/home/03.png" alt="" />
          <img class="icon " src="././assets/images/home/04.png" alt="" />
          <img class="icon " src="././assets/images/home/05.png" alt="" />
          <img class="icon " src="././assets/images/home/06.png" alt="" />
          <img class="icon " src="././assets/images/home/07.png" alt="" />
          <img class="icon " src="././assets/images/home/08.png" alt="" />
          <img class="icon " src="././assets/images/home/09.png" alt="" />
          <img class="icon " src="././assets/images/home/01.png" alt="" />
        </div>

        <div class="speciality-rhinology">
          <div class="left ">
            <b >speciality rhinology 1</b>
            <p >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              iure tempore ullam aperiam! Laboriosam, ipsa nobis velit,
              doloribus quis quaerat tempore enim ratione iste aperiam
              praesentium. Veniam sapiente qua Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus magni ducimus maxime voluptatem tenetur iste quia necessitatibus molestiae mollitia magnam voluptatum neque nam, blanditiis sit modi sunt, nulla suscipit numquam.
            </p>
            <div class="services">
    
                <span> qualified doctors</span>
                <span> qualified doctors</span>
                <span> qualified doctors</span>
       
             
                <span> qualified doctors</span>
                <span> qualified doctors</span>
                <span> qualified doctors</span>
              
            </div>
            <button class="btn">Appointment Now </button>
          </div>
          <div class="right">
           
          </div>
        </div>
      </div>
    </section>


    <section class="info">
      <div class="container">
        <div class="informtions">
          <div class="single-info">
            <i class="fa-solid fa-hospital-user"></i>
            <div class="details ">
              <strong>152+</strong>
              <span>patients every day</span>
            </div>
          </div>




          <div class="single-info">
            <i class="fa-solid fa-hospital-user"></i>
            <div class="details">
              <strong>122+</strong>
              <span>patients every day</span>
            </div>
          </div>
          <div class="single-info">
            <i class="fa-solid fa-hospital-user"></i>
            <div class="details ">
              <strong>3+</strong>
              <span>patients every day</span>
            </div>
          </div>
          <div class="single-info">
            <i class="fa-solid fa-hospital-user"></i>
            <div class="details d-flex flex-column">
              <strong>105+</strong>
              <span>patients every day</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="Doctors">
      <div class="container ">
        <div class="text-section">
          <p>meet our</p>
          <h1>mukti professional docrors</h1>
        </div>

       

<Doctor doctors={doctors} />


     
     
<button className="btn doc-btn" onClick={openModal}>
          View All Doctors
        </button>

        {/* Render the Modal if showModal is true */}
        {showModal && <Modal doctors={doctors} onClose={closeModal} />}

      </div>
    </section>




    <section class="order">

      <Appointment/>

    </section>

    <section class="news-feed ">
      <div class="container">
        <div class="text-section">
          <p>news feed</p>
          <h1>be the first to new stories</h1>
        </div>

        <div class="cards">
          <div class="card">
            <img src="./assets/images/home/1 (1).jpg" alt="" />

            <div class="mid ">
              <span>by admin march 24, 2021</span>
              <h5>globa empoer extenve chanels extensve creat method</h5>
              <p>
                complete actuaze centi centrcing colora and shatin without
                anstaled anding bases aweme meicalpus template.
              </p>
            </div>
            <b>read more</b>
          </div>

          <div class="card">
            <img src="./assets/images/home/2 (1).jpg" alt="" />

            <div class="mid ">
              <span>by admin march 24, 2021</span>
              <strong>globa empoer extenve chanels extensve creat method</strong>
              <p>
                complete actuaze centi centrcing colora and shatin without
                anstaled anding bases aweme meicalpus template.
              </p>
            </div>
            <b>read more</b>
          </div>

          <div class="card">
            <img src="./assets/images/home/3.jpg" alt="" />

            <div class="mid ">
              <span>by admin march 24, 2021</span>
              <strong>globa empoer extenve chanels extensve creat method</strong>
              <p>
                complete actuaze centi centrcing colora and shatin without
                anstaled anding bases aweme meicalpus template.
              </p>
            </div>
            <b>read more</b>
          </div>
        </div>
      </div>
    </section>

    <section class="logos">
      <div class="container">
        <div class="logs ">
          <div class="col">
            <img src="././assets/images/home/1 (1).png" alt="" />
          </div>
          <div class="col">
            <img src="./assets/images/home/2 (1).png" alt="" />
          </div>
          <div class="col">
            <img src="./assets/images/home/3 (1).png" alt="" />
          </div>
          <div class="col">
            <img src="./assets/images/home/4.png" alt="" />
          </div>
          <div class="col">
            <img src="./assets/images/home/5.png" alt="" />
          </div>
          <div class="col">
            <img src="./assets/images/home/6.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="join">
      <div class="container">
        <div class="row ">
          <div class="col">
            <h1>join our newsletter</h1>
          </div>

          <div class="col-left">
            <div class="input-filed">
              <i class="fa-solid fa-paper-plane"></i>
              <input type="email" placeholder="Enter Your Email" />
              <button>Subscribe Now</button>
            </div>




          </div>
        </div>
      </div>
    </section>

    <section class="footer">
      <div class="container">
        <div class="row ">
          <div class="first">
            <h3>contact info</h3>
            <p>
              rapidiously seize wireless strategic theme areas and
              corporate testing 
              procedures uniquely
            </p>
            <ul class="d-flex flex-column gap-1">
              <li>
                <i class="fa-solid fa-house me-1"></i> suite 02 new elephant
                road usa
              </li>
              <li>
                <i class="fa-solid fa-phone me-1"></i> +880 142 258 123,02-96936
              </li>
              <li><i class="fa-solid fa-envelope me-1"></i> info@muki.com</li>
              <li><i class="fa-solid fa-globe me-1"></i> info@mukti.com</li>
            </ul>
          </div>

          <div class="seconnd">
            <h3>our doctors</h3>
            <ul class="d-flex flex-column gap-1 arrow">
              <li>dr.nick sims</li>
              <li>dr.michael linden</li>
              <li>dr.max turner</li>
              <li>dr.amy adams</li>
              <li>dr.julia jameson</li>
              <li>dr michael lindem</li>
            </ul>
          </div>

          <div class="third">
            <h3>our services</h3>
            <ul class="d-flex flex-column gap-1 arrow">
              <li>ourparient surgery</li>
              <li>cardic linic</li>
              <li>ophthalmology</li>
              <li>gynaecological clinc</li>
              <li>outpatient</li>
              <li>outpateint rehabilitation</li>
            </ul>
          </div>

          <div class="fourth">
            <h3>opening hours</h3>
            <div class="row ">
              <div class="col">satarday</div>
              <div class="col">8:00 am-10:00 pm</div>
            </div>

            <div class="row">
              <div class="col">satarday</div>
              <div class="col">8:00 am-10:00 pm</div>
            </div>
            <div class="row">
              <div class="col">satarday</div>
              <div class="col">8:00 am-10:00 pm</div>
            </div>
            <div class="row">
              <div class="col">satarday</div>
              <div class="col">8:00 am-10:00 pm</div>
            </div>
            <div class="row">
              <div class="col">satarday</div>
              <div class="col">8:00 am-10:00 pm</div>
            </div>
            <div class="row">
              <div class="col">satarday</div>
              <div class="col">8:00 am-10:00 pm</div>
            </div>
          </div>


   
        </div>

        <div className="footer-bottom">
        <div className="container">
          Copyright © 2021 <span className="site-name">Mukti</span>. All Rights
          Reserved. By
          <span className="developer">LabArtisan</span>
        </div>
      </div>

      </div>
    </section>


</>

  )
}

export default Home