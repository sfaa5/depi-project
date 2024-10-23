import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "../../APIs/DoctorApis";

import Doctor from "./Doctor";
import Modal from "./Modal";
import "../../style/home.css";
import Appointment from "./Appointment";

import { motion } from "framer-motion";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { doctors, status, error } = useSelector((state) => state.doctors);

  // useEffect(() => {
  //   dispatch(fetchDoctors());
  // }, [dispatch]);

  useEffect(() => {
    console.log("SectionRef:", sectionRef.current);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when section is in view
          observer.disconnect(); // Stop observing once the section is visible
        }
      },
      {
        threshold: 0.1, // Adjust threshold as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    console.log("SectionRef:", sectionRef.current);
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  if (status === "loading") {
    return <div className="animate-pulse">Loading...</div>;
  }

  if (status === "failed") {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <motion.div
        className="landing"
        initial={{ opacity: 0 }} // Optional: To fade in the landing div
        animate={{ opacity: 1 }} // Optional: Fade in effect for the landing div
        transition={{ duration: 0.7 }}
      >
        <div class="container">
          <motion.div
            className="content"
            initial={{ opacity: 0, x: -200 }} // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }} // Move to the original position
            transition={{ duration: 0.7 }} // Animation duration
          >
            <h4>Best Medical Clinic</h4>

            <b class="blue-color">
              Bringing Health{" "}
              <b style={{ color: "black", fontSize: "1em" }}>To </b>{" "}
            </b>
            <b> Life For The Whole</b>
            <b>Family...</b>

            <button class="btn btn-primary">Get Appoinments »</button>
          </motion.div>
        </div>
      </motion.div>

      <div className="specialized">
        <div className="container" ref={sectionRef}>
        <div className="text-section">
          <motion.p
            initial={{  x: 300 }} // Start off-screen to the right
            animate={isVisible ?{  x: 0} : {}}  // Animate to the original position
            transition={{ duration: 0.7 }} // Set the animation duration
          >
            We Offer Specialized
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -300 }} // Start off-screen to the left
            animate={isVisible ?{ opacity: 1, x: 0} : {}} // Animate to the original position
            transition={{ duration: 0.7, delay: 0.2 }} // Set the duration and add delay for staggered effect
          >
            Orthopedics To Meet Your Needs
          </motion.h1>
          </div>

          <div className="specialisations" ref={sectionRef}>
            {/* First Card Group Coming From the Right */}
            <motion.div
              className="card"
              initial={{ opacity: 0, x: 100 }} // Start from the right
              animate={isVisible ? { opacity: 1, x: 0 } : {}} // Animate to original position
              transition={{ duration: 0.5 }}
            >
              <img src="./assets/images/home/medical-symbol.png" alt="" />
              <div className="card-body">
                <b className="card-title">Medical Treatment</b>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vlo
                  te optio animi?
                </p>
                <span className="card-text">Read More »</span>
              </div>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, x: 100 }} // Start from the right
              animate={isVisible ? { opacity: 1, x: 0 } : {}} // Animate to original position
              transition={{ duration: 0.5, delay: 0.2 }} // Add delay for staggered effect
            >
              <img
                src="./assets/images/home/delivery-truck.png"
                alt="Medical Treatment"
              />
              <div className="card-body">
                <b className="card-title">Emergency Help</b>
                <p className="card-text m-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vlo
                  te optio animi?
                </p>
                <span className="card-text">Read More »</span>
              </div>
            </motion.div>

            {/* Second Card Group Coming From the Left */}
            <motion.div
              className="card"
              initial={{ opacity: 0, x: -100 }} // Start from the left
              animate={isVisible ? { opacity: 1, x: 0 } : {}} // Animate to original position
              transition={{ duration: 0.5, delay: 0.4 }} // Add delay for staggered effect
            >
              <img
                src="./assets/images/home/hospital-building.png"
                alt="Medical Treatment"
              />
              <div className="card-body">
                <b className="card-title">Medical Professionals</b>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vlo
                  te optio animi?
                </p>
                <span className="card-text">Read More »</span>
              </div>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, x: -100 }} // Start from the left
              animate={isVisible ? { opacity: 1, x: 0 } : {}} // Animate to original position
              transition={{ duration: 0.5, delay: 0.6 }} // Add delay for staggered effect
            >
              <img
                src="./assets/images/home/doctor.png"
                alt="Medical Treatment"
              />
              <div className="card-body">
                <b className="card-title">Qualified Doctors</b>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vlo
                  te optio animi?
                </p>
                <span className="card-text">Read More »</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

 

<section className="Best-centers" >
  <div className="container" ref={sectionRef}>
    
    {/* Animate the text */}
    <div className="text-section">
      <motion.p
        initial={{ opacity: 0, x: -100 }}  // Slide in from the left
        animate={isVisible ?{ opacity: 1, x: 0 }:{}}     // Animate to the original position
        transition={{ duration: 0.7 }}     // Set the animation duration
      >
        we are the
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, x: 100 }}  // Slide in from the right
        animate={isVisible ?{ opacity: 1, x: 0 }:{}}    // Animate to the original position
        transition={{ duration: 0.7, delay: 0.2 }}  // Add a delay for staggered effect
      >
        best our departments centers
      </motion.h1>
    </div>
    
    {/* Animate icons with staggered effect */}
    <div className="icons">
      {["./assets/images/home/01.png", "./assets/images/home/01.png", "./assets/images/home/03.png", "./assets/images/home/04.png", "./assets/images/home/05.png", "./assets/images/home/06.png", "./assets/images/home/07.png", "./assets/images/home/08.png", "./assets/images/home/09.png", "./assets/images/home/01.png"].map((src, index) => (
        <motion.img
          key={index}
          className="icon"
          src={src}
          alt=""
          initial={{ opacity: 0, y: 50 }} 
          animate={isVisible ?{ opacity: 1, y: 0 }:{}}  
          transition={{ duration: 0.5, delay: index * 0.1 }} 
        />
      ))}
    </div>


    <div className="speciality-rhinology">
      <motion.div
        className="left"
        initial={{ opacity: 0, x: -300 }}  
        animate={isVisible ?{ opacity: 1, x: 0 }:{}}    
        transition={{ duration: 0.7 }}    
      >
        <b>speciality rhinology 1</b>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem quia debitis sint ex obcaecati dolor iure repellat cum! Debitis placeat accusantium error vitae, ad cum unde alias corrupti iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptate, fugit nobis fugiat officia expedita. Laborum voluptates culpa nostrum. Adipisci assumenda autem et odit inventore natus aperiam nesciunt excepturi vitae!
        </p>
        <div className="services">
          <span> qualified doctors</span>
          <span> qualified doctors</span>
          <span> qualified doctors</span>
          <span> qualified doctors</span>
          <span> qualified doctors</span>
          <span> qualified doctors</span>
        </div>
        <button className="btn">Appointment Now</button>
      </motion.div>

      <motion.div
        className="right"
        initial={{ opacity: 0, x: 300 }}  
        animate={isVisible ?{ opacity: 1, x: 0 }:{}}    
        transition={{ duration: 0.7 }}    
      >

      </motion.div>
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
        <Appointment />
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
                <strong>
                  globa empoer extenve chanels extensve creat method
                </strong>
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
                <strong>
                  globa empoer extenve chanels extensve creat method
                </strong>
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
                rapidiously seize wireless strategic theme areas and corporate
                testing procedures uniquely
              </p>
              <ul class="d-flex flex-column gap-1">
                <li>
                  <i class="fa-solid fa-house me-1"></i> suite 02 new elephant
                  road usa
                </li>
                <li>
                  <i class="fa-solid fa-phone me-1"></i> +880 142 258
                  123,02-96936
                </li>
                <li>
                  <i class="fa-solid fa-envelope me-1"></i> info@muki.com
                </li>
                <li>
                  <i class="fa-solid fa-globe me-1"></i> info@mukti.com
                </li>
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
              Copyright © 2021 <span className="site-name">Mukti</span>. All
              Rights Reserved. By
              <span className="developer">LabArtisan</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
