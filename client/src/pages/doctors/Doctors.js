
import "../../style/doctors.css";

const doctors = [
  {
    name: "Dr. Jason Kovalsky",
    specialty: "Cardiologist",
    img: "./assets/images/doctors/01 (1).jpg",
  },
  {
    name: "Patricia Mcneel",
    specialty: "Pediatricist",
    img: "./assets/images/doctors/02 (1).jpg",
  },
  {
    name: "William Khanna",
    specialty: "Throat Specialist",
    img: "./assets/images/doctors/03 (1).jpg",
  },
  {
    name: "Eric Patterson",
    specialty: "Therapy",
    img: "./assets/images/doctors/04 (1).jpg",
  },
  {
    name: "Mark Trevor",
    specialty: "Therapy",
    img: "./assets/images/doctors/04 (1).jpg",
  },
  {
    name: "Nolim Smith",
    specialty: "Volunteer",
    img: "./assets/images/doctors/01 (1).jpg",
  },
  {
    name: "Jason Kovalsky",
    specialty: "Rehabilitation",
    img: "./assets/images/doctors/02 (1).jpg",
  },
  {
    name: "Sarah Milles",
    specialty: "Volunteers",
    img: "./assets/images/doctors/03 (1).jpg",
  },
];

const Doctors = () => {
  return (
    <div>


      <section className="doctor-section">
        <div className="main-section-title">
          <span>Meet Our</span>
          <h1>Mukti Professional Doctors</h1>
        </div>
        <div className="container doctors">
          {doctors.map((doctor, index) => (
            <div className="card" key={index}>
              <div className="card-img">
                <img src={doctor.img} alt={doctor.name} />
              </div>
              <div className="card-body">
                <div className="card-title">{doctor.name}</div>
                <div className="card-text">{doctor.specialty}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Doctors;