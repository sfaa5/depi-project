import React from "react";
import "./HeroSection.css";

function HeroSection({ children }) {
  return (
    <div className="main-header">
      <div className="container">
        <h1 className="main-title">{children}</h1>
        <div className="breadcrumbs">
          <a href="index.html">Home</a> -
          <a className="active" href="blogs.html">
            Services
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
