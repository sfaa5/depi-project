import { useEffect, useRef, useState } from "react";
import Doctor from '../Doctor'
import Modal from '../Modal'


const Doctors = () => {

    


    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

 


  return (
    <section class="Doctors">
    <div class="container ">
      <div class="text-section">
        <p>meet our</p>
        <h1>mukti professional docrors</h1>
      </div>

      <Doctor/>

      <button className="btn doc-btn" onClick={openModal}>
        View All Doctors
      </button>

      {/* Render the Modal if showModal is true */}
      {showModal && <Modal onClose={closeModal} />}
    </div>
  </section>
  )
}

export default Doctors