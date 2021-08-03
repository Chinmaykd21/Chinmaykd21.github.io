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
          I am a software engineer with industry experience of working on a
          large-scale project with multiple team members for 2.5 years. This
          time period was fruitful for me as it gave me exposure to Software
          Development Life Cycle (SDLC) and standard Software Development
          Practices which are followed in the technical industry. Conducted
          various knowledge transfer sessions to make the move in of the new
          team members a lot smoother.
        </p>
        <p className="about-text">
          While working as a software engineer obtained hands-on experience with
          Oracle SQL database, Mainframe technology, and Java programming
          language. Created an automated tool by integrating JCL mainframe and
          Excel VBA. This automated tool helped team to reduce their manual
          efforts by 2-3 hours/week. Received the "Employee of The Month" award
          from the company in the same project in January 2018.
        </p>
        <p className="about-text">
          Completed my Masters of Computer Science from the University of
          Georgia. Took various courses such as Algorithms, Database Management
          Systems, Computer Networks, Cloud Computing, Special Topics in CSCI,
          Machine Learning which complimented me to grow my expertise and
          knowledge in software development. Developed various projects using
          Java, Python, MySQL, PostgreSQL, play2, JDBC, c++, docker, AWS as a
          part of the coursework assignments.
        </p>
        <p className="about-text">
          Using Python, Docker swarm, apache-benchmark, shell scripting, and
          OpenFaaS open-source serverless framework(FaaS) benchmarked edge
          devices such as NVIDIA Jetson nano & Raspberry pi 4 to investigate
          performance heterogeneity of real-world serverless and FaaS
          applications to make an informed decision on an edge device selection
          under the guidance of prof.In Kee Kim and co-contributor Kaustubh
          Rajput.
        </p>
        <p className="about-text">
          As I have journied through my under-gradution till my masters, I have
          worked with different people
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
