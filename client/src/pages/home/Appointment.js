import React, { useState } from "react";
import { createAppointment } from "../../APIs/appointmentApi"; // Import the API function

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    phoneNumber: "",
    date: "",
    DoctorName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createAppointment(formData); // Use the API call from appointmentApi.js
      console.log("Appointment created:", result);

      // Show an alert on successful appointment creation
      alert("Appointment created successfully!");

      // Optionally, you can reset the form or show a success message
      setFormData({
        name: "",
        department: "",
        phoneNumber: "",
        date: "",
        DoctorName: "",
      });
    } catch (error) {
      console.error("Error creating appointment:", error);
      alert("Error creating appointment. Please try again.");
    }
  };

  return (
    <section class="order">
    <div className="container">
      <div className="orders">
        <div className="left">
          <div className="appointemnts">
            <h1 className="hours ">
              24 hours <br></br> opening our services
            </h1>

            {/* Appointment timing details */}
  
            <div class="appointemnt ">
              <div class="col">satarday</div>
              <div class="col">8:00 am-10:00 pm</div>
            </div>

            <div class="appointemnt">
              <div class="col">satarday</div>
              <div class="col">8:00 am-10:00 pm</div>
            </div>
            <div class="appointemnt">
              <div class="col">satarday</div>
              <div class="col">8:00 am-10:00 pm</div>
            </div>
            <div class="appointemnt">
              <div class="col">satarday</div>
              <div class="col">8:00 am-10:00 pm</div>
            </div>
            <div class="appointemnt">
              <div class="col">satarday</div>
              <div class="col">8:00 am-10:00 pm</div>
            </div>
            <div class="appointemnt">
              <div class="col">satarday</div>
              <div class="col">8:00 am-10:00 pm</div>
            </div>

          </div>
        </div>

        <div className="right">
          <div className="form-right">
            <h1>
              Make an <br /> appointment now
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Oncology">Oncology</option>
              </select>

              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="DoctorName"
                placeholder="Doctor's name"
                value={formData.DoctorName}
                onChange={handleChange}
                required
              />

              <button className="btn" type="submit">
                Appointment Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Appointment;
