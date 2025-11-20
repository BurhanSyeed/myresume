import React, {  useRef } from "react";
import image from "../img/p5.jpg";
import cv from "../doc/BurhanCv.docx"
// import Navbar from './Navbar';
// import Footer from './Footer';

function About() {
 
  const margin = {
    marginTop: "150px",
  };
  const img = {
    width: "80%",
    height: "450px",

    // boxShadow: '10px 10px 10px rgba(128, 153, 194, 0.4) inset',
    boxShadow: "10px 10px 5px rgba(128, 153, 194, 0.4)",
  };
  // const fileInputRef = useRef();
  
   

  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row" style={margin}>
          <div className="col-lg-3 col-md-6">
            <img src={image} alt="logo" style={img} />
          </div>
          <div className="col-lg-9 col-md-6">
            <h2>My Bio-Data</h2>
            <span>
              <hr style={{ width: "20%" }} />
            </span>
            <p>
              Laravel developer with 2+ years of full-stack experience, building
              complex systems, robust APIs, multi-role admin panels, and
              Education & Hotel Management platforms.
            </p>
            <label htmlFor="customRange1" class="form-label">
              HTML
            </label>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <label htmlFor="customRange1" class="form-label">
              CSS
            </label>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <label htmlFor="customRange1" class="form-label">
              JS
            </label>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                60%
              </div>
            </div>
            <label htmlFor="customRange1" class="form-label">
              PHP
            </label>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                70%
              </div>
            </div>
            <label htmlFor="customRange1" class="form-label">
              Laravel
            </label>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                80%
              </div>
            </div>
            <label htmlFor="customRange1" class="form-label">
              React
            </label>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <a
              className="btn btn-sm"
              style={{
                color: "white",
                marginTop: "35px",
                backgroundColor: "rgba(128, 153, 194)",
              }}
              href={cv}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default About;
