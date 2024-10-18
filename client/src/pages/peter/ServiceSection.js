import React from "react";
import "./ServiceSection.css";

function ServiceSection() {
  return (
    <section className="blog">
      <div className="container">
        <div className="single-blog">
          <div className="single-img">
            <img src="01.jpg" alt="doctor" />
          </div>
          <div className="text">
            <h1>Family Health Solutions</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis et repellendus rerum eum. Asperiores laborum tempore
              itaque voluptatibus sapiente cum quibusdam! Alias Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Ea nihil quam
              dolores soluta. Id repudiandae eligendi rerum dolor tempore iure
              quidem doloribus temporibus sit nisi quae, eveniet quisquam iste
              assumenda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
