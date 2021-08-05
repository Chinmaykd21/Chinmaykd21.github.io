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
          I am a software engineer with 2.5 years of experience working in the
          industry on a team-based, large-scale project. As a Software Engineer
          at Larsen & Toubro Infotech, I gained valuable skills involving
          multi-team collaboration and leadership, as well as a deeper
          understanding of work ethics, and most importantly, the impact of
          effective communication in the IT industry. Additionally, I gained
          technical experience with Oracle SQL database, IBM Mainframe
          Technology, and Excel VBA. Apart from my responsibilities as a team
          member, I took the initiative of conducting and documenting knowledge
          transfer sessions to ease the onboarding process for new members.
        </p>
        <p className="about-text">
          I recently obtained my Master's in Computer Science from the
          University of Georgia, where I worked under the guidance of Prof. In
          Kee Kim. While working on my masters' project I utilized my knowledge
          and understanding of Python, Docker Swarm and OpenFaaS to develop, and
          build/deploy/invoke applications such as Image classification, matrix
          multiplication, etc., on edge devices respectively.
        </p>
        <p className="about-text">
          My programming expertise lies in Python, but I am keen on taking
          responsibility to continuously develop my technical and knowledge base
          in an effort to enhance my critical-thinking and problem-solving
          skills. I am actively learning React JS, and this website is
          implemented using React, HTML, and CSS. I am currently exploring other
          projects that require end-to-end development to better understand the
          process of designing and releasing a web application.
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
            <p>: 2165 South Milledge Avenue, Apt E8, Athens GA 30605, USA</p>
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
