import React from "react";

function ExperienceSection({ image, title, duration, text }) {
  const li_text = text.split("\n").map((each_line, key) => {
    return <li key={key}>{each_line}</li>;
  });
  return (
    <div className="ExperienceSection">
      <div className="experience">
        <div className="experience-content">
          <img src={image} alt="" />
          <h5 className="e-title">{title}</h5>
          <p className="e-duration">{duration}</p>
          <p className="e-text">{li_text}</p>
        </div>
      </div>
    </div>
  );
}
export default ExperienceSection;
