import React from "react";
import uga from "../img/uga.svg";
import Tittle from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import softwareEngineer from "../img/softwareEngineer.svg";
import ExperienceSection from "../Components/ExperienceSection";
import EducationSection from "../Components/EducationSection";
import MumbaiUniversity from "../img/MumbaiUniversity.png";
import GeorgiaUniversity from "../img/GeorgiaUniversity.jpg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle tittle={"About Me"} span={"About Me"} />
      <ImageSection />
      <Tittle tittle={"Skills"} span={"Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Python"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Java"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"React"} progress={"30%"} width={"30%"} />
        <SkillsSection skill={"Javascript"} progress={"40%"} width={"40%"} />
        <SkillsSection skill={"C++"} progress={"30%"} width={"30%"} />
        <SkillsSection skill={"HTML"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"CSS"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"SQL"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Bootstrap"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"MySQL"} progress={"30%"} width={"30%"} />
      </div>
      <Tittle tittle={"Experience"} span={"Experience"} />
      <div className="experience-container">
        <ExperienceSection
          image={softwareEngineer}
          title={"Software Engineer"}
          duration={"Jul 2016 - Dec 2018"}
          text={
            "Worked as a Software Engineer for Business Insurance client associated with LTI. The project involved providing real-time monitoring of batch programs, resolving batch program failures with its root cause analysis. Developed, maintained & updated the software solutions as per the customer requirements. Received client appreciation for creating an automation tool, which integrated Mainframe and Excel VBA & reduced the manual efforts by approx. 2-3 hours per week. Awarded with an “Employee of the month” award in January 2018 in the same project."
          }
        />
        <ExperienceSection
          image={uga}
          title={"UGA Mentor Program Ambassador"}
          duration={"Aug 2020 - May 2021"}
          text={
            "Worked as a Software Engineer for Business Insurance client associated with LTI. The project involved providing real-time monitoring of batch programs, resolving batch program failures with its root cause analysis. Developed, maintained & updated the software solutions as per the customer requirements. Received client appreciation for creating an automation tool, which integrated Mainframe and Excel VBA & reduced the manual efforts by approx. 2-3 hours per week. Awarded with an “Employee of the month” award in January 2018 in the same project."
          }
        />
      </div>
      <Tittle tittle={"Education"} span={"Education"} />
      <div className="education-container">
        <EducationSection
          image={GeorgiaUniversity}
          degree={"Master of Science in Computer Science"}
          duration={"Aug 2019 - Aug 2021"}
          university={"The University of Georgia"}
          gpa={"3.74/4.00"}
        />
        <EducationSection
          image={MumbaiUniversity}
          degree={"Bachelor of Electronics Engineering"}
          duration={"Jun 2012 - Aug 2016"}
          university={"The University of Mumbai"}
          gpa={"7.17/10.00"}
        />
      </div>
    </div>
  );
}

export default AboutPage;
