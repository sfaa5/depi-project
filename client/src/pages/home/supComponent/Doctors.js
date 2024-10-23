import { useEffect, useRef, useState } from "react";
import Doctor from '../Doctor'
import Modal from '../Modal'
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "../../../APIs/DoctorApis";

const Doctors = () => {


    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const dispatch = useDispatch();
    const { doctors, status, error } = useSelector((state) => state.doctors);

    useEffect(()=>{
        // Dispatch action to fetch doctors
        dispatch(fetchDoctors());
    },[dispatch])



  return (
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
  )
}

export default Doctors