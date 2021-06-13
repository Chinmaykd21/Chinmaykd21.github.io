import React from "react";
import about from "../img/about.jpg";
import downloadFile from "../Download/Chinmay_Kulkarni_Resume.pdf";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          {" "}
          I am
          <span> Chinmay Kulkarni</span>
        </h4>
        <p className="about-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Birthday</p>
            <p>Nationality</p>
            <p>Address</p>
          </div>
          <div className="right-section">
            <p>: Chinmay Dilip Kulkarni</p>
            <p>: 26</p>
            <p>: September 21, 1994</p>
            <p>: Indian</p>
            <p>: 1000 Lakeside Drive, Apt 102, Athens GA 30605, USA</p>
          </div>
        </div>
        <a href={downloadFile} download>
          <button className="btn">Download Resume</button>
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
