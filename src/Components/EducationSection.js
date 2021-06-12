import React from "react";

function EducationSection({ degree, duration, university, gpa }) {
  return (
    <div className="EducationSection">
      <div className="education">
        <div className="education-content">
          {/* <img src={image} alt="" /> */}
          <h5 className="ed-degree">
            {degree}
            <i className="ed-duration"> ({duration})</i>
          </h5>
          <p className="ed-university">{university}</p>
          <p className="ed-gpa">GPA:{gpa}</p>
        </div>
      </div>
    </div>
  );
}
export default EducationSection;
