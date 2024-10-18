const {Appointment, handleAppointmentValidation} = require('../models/appointment');
const { Doctor } = require('../models/doctor');

const upload = require('./image_uploader');
const express = require("express");
const router = express.Router();

/**************************************************************************************************/
// Render add course form
router.get("/new",async (req, res) => {
const doctors =await Doctor.find();
  // Pass authors to the template along with an empty course object
  res.render("add_appointment", { errors: [], appointment: {} , doctors:doctors });
});

router.get("/:id/edit", async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    const doctors = await Doctor.find();
    console.log(doctors)
    console.log("up")
    // Fetch all doctors
    const selectedDoc = appointment.DoctorName;  // The doctor assigned to this appointment

    if (!appointment) {
      return res.status(404).send("Appointment not found");
    }

    // Pass appointment data, doctors, and the selected doctor to the template
    res.render("edit_appointment", { errors: [], appointment, doctors, selectedDoc });
  } catch (err) {
    res.status(500).send("An error occurred while fetching appointment or doctors");
  }
});


/**************************************************************************************************/
// Get all courses
router.get("/", async (req, res) => {
  try {
    const appointment = await Appointment.find()
      .sort("name")
      .populate("DoctorName", "name"); // Ensure the 'name' field of the doctor is populated

    res.render("appointment", { appointment });
  } catch (err) {
    console.error("Error fetching appointments:", err);
    res.status(500).send("Server error");
  }
});


/**************************************************************************************************/
// Get course by ID
router.get("/:id", async (req, res) => {
  console.log(req.params.id)
  const appointment = await Appointment.findById(req.params.id);
  
  if (!appointment) {
    return res.status(404).send("the course is not available");
  }
  // res.send(course);
  res.render("view_appointment", { appointment });
});

/**************************************************************************************************/
// Adding course upload.single('img'),
router.post("/",  async (req, res) => {
  console.log(req.body)
  console.log(req.appointment)
  try {
  const { error } = handleAppointmentValidation(req.body);
  
  if (error) {
    console.log("777")
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).render('add_appointment', { errors: errorMessages, appointment: req.body });
  }

  const doctor = await Doctor.findOne({name:req.body.DoctorName,department:req.body.department})

  if (!doctor) {
    return response.status(404).send({ message: "Doctor not found" });
  }



  let appontment = new Appointment({
    name: req.body.name,
    department: req.body.department,
    phoneNumber: req.body.phoneNumber,
    date: req.body.date,
    isPublished: req.body.isPublished,
    DoctorName:doctor._id,
 
  });

  if(doctor){
    doctor.appointments.push(appontment._id)
    await doctor.save();
  }

 
    appontment = await appontment.save();
    res.status(201).redirect("/appointment");
  } catch (error) {
    if(error.code===11000){
      console.log("work")
      return res.status(400).render('add_appointment',{errors:["the docotr already taken"],appointment: req.body})
    }

    res.status(500).send('An error occurred');
  }
});

/**************************************************************************************************/
// // Updating doctor
// // Updating doctor
router.put("/:id",  async (req, res) => {
  console.log("track");

  // Validate the appointment
  const { error } = handleAppointmentValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).render('edit_appointment', { errors: errorMessages, appointment: req.body });
  }

  const doctor = await Doctor.findOne({ name: req.body.DoctorName, department: req.body.department });

  if (!doctor) {
    return res.status(404).send({ message: "Doctor not found" });
  }

  let appointment = await Appointment.findById(req.params.id);
  if (!appointment) return res.status(404).send('The appointment with the given ID was not found');

  console.log("yyyyy")
  // Prepare the updated data
  const updatedData = {
    name: req.body.name,
    department: req.body.department,
    phoneNumber: req.body.phoneNumber,
    date: req.body.date,
    isPublished: req.body.isPublished,
    DoctorName: doctor._id,
  };
  console.log("2yyyyy")

  // Uncomment if you handle image uploads
  // if (req.file) {
  //   req.body.img = req.file.path.replace(/\\/g, '/');
  //   updatedData.img = req.file.path;
  // }

  // Update the appointment in the database
  appointment = await Appointment.findByIdAndUpdate(req.params.id, updatedData, { new: true });
  res.status(200).send(appointment);
});


/**************************************************************************************************/
// Deleting course
router.delete("/:id", async (req, res) => {
  try {
    const appontment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appontment) {
      return res.status(404).send("The course is not available");
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send("An error occurred during deletion");
  }
});
 
module.exports = router;
