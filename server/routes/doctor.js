const { Appointment } = require("../models/appointment");
const { Doctor, handleDoctorValidation } = require("../models/doctor");

const upload = require("./image_uploader");
const express = require("express");
const router = express.Router();

/**************************************************************************************************/
// Render add course form
router.get("/new", async (req, res) => {
  // Pass authors to the template along with an empty course object
  res.render("add_doctor", { errors: [], doctor: {} });
});

// router.get("/:id/edit", async (req, res) => {
//   try {
//     const course = await Course.findById(req.params.id);
//     // const authors = await Author.find(); // Fetch all authors
//     if (!course) {
//       return res.status(404).send("Course not found");
//     }
//     // Pass the course data and authors to the edit form
//     res.render("edit_course", { errors: [], course: course });
//   } catch (err) {
//     res.status(500).send("An error occurred while fetching course or authors");
//   }
// });

/**************************************************************************************************/
// Get all courses
router.get("/", async (req, res) => {
  try {
    const doctor = await Doctor.find()
      .sort("name")
      .populate("appointments", "date");
    res.render("doctor", { doctor });
  } catch (err) {
    console.error("error fettching doctors", err);
    res.status(500).send("Server error");
  }
  // render the courses html (ejs))
});

/**************************************************************************************************/
// Get course by ID
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const doctor = await Doctor.findById(req.params.id);

  if (!doctor) {
    return res.status(404).send("the course is not available");
  }
  // res.send(course);
  res.render("view_doctor", { doctor });
});

/**************************************************************************************************/
// Adding course ,
router.post("/", upload.single("img"), async (req, res) => {
  console.log(req.doctor);

  const { error } = handleDoctorValidation(req.body);

  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    console.log("gfgfg");
    // const authors = await Author.find();
    return res
      .status(400)
      .render("add_doctor", { errors: errorMessages, doctor: req.body });
  }

  // const author = await Author.findById(req.body.authorId);
  // if (!author) return res.status(400).send('Invalid author');

  if (!req.file) {
    console.log("jjjjj");
    res.status(400).send("course cover is required..");
  }

  const impPath = req.file.path.replace(/\\/g, "/"); // Normalize backslashes to forward slashes

  let doctor = new Doctor({
    name: req.body.name,
    department: req.body.department,
    phoneNumber: req.body.phoneNumber,
    date: req.body.date,
    isPublished: req.body.isPublished,
    // author: {
    //   _id: author._id,
    //   name: author.name
    // },
    img: impPath,
  });

  try {
    doctor = await doctor.save();
    res.status(201).redirect("/doctor");
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

/**************************************************************************************************/
// // Updating dotor
router.put("/:id", upload.single('img'), async (req, res) => {

  // Validate the course
  const { error } = handleAppointmentValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    // return res.status(400).send(errorMessages);
    return res.status(400).render('edit_course', { errors: errorMessages, appointment: req.body });
  }

  // const author = await Author.findById(req.body.authorId);
  // if (!author) return res.status(400).send('Invalid author');

  let appontment = await Appointment.findById(req.params.id);
  if (!appontment) return res.status(404).send('The course with the given ID was not found');

  // Prepare the updated data
  const updatedData = {
    name: req.body.name,
    department: req.body.department,
    phoneNumber: req.body.phoneNumber,
    date: req.body.date,
    isPublished: req.body.isPublished,
    // author: {
    //   _id: author._id,
    //   name: author.name
    // },
    img: impPath,
  };

  if (req.file) {
    req.body.img = req.file.path.replace(/\\/g, '/');
    updatedData.img = req.file.path;
  }

  // Update the course in the database
  appontment = await Appointment.findByIdAndUpdate(req.params.id, updatedData, { new: true });
  res.status(200).send(appontment);
});

/**************************************************************************************************/
// Deleting course
router.delete("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) {
      return res.status(404).send("The course is not available");
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send("An error occurred during deletion");
  }
});

module.exports = router;
