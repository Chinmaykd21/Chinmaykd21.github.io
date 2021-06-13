import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typical from "react-typical";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hello, I am
          <span> Chinmay Kulkarni.</span>
        </h1>
        <p className="h-sub-text">
          {/* Using react-typical component animated the text */}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "A Software Engineer.",
              2000,
              "A Web Developement Enthusiast.",
              2000,
              "A Python Developer.",
              2000,
              "An Electronics Engineer.",
              2000,
              "An Anime Fan.",
              2000,
            ]}
          />
        </p>
        <div className="icons">
          <a
            className="icon-holder"
            href="https://www.facebook.com/chinmay.kulkarni.7921"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </a>
          <a
            className="icon-holder"
            href="https://github.com/Chinmaykd21"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a
            className="icon-holder"
            href="https://www.linkedin.com/in/chinmaykulkarni21"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon li" />
          </a>
          <a
            className="icon-holder"
            href="https://twitter.com/chinmaykd21"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon tw" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
