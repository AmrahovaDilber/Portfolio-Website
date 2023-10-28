import React from "react";
import "../assets/styles/Expertise.scss";

function Expertise({ id, data }) {
  return (
    
    <ul id={id}>
      <h1>Experience</h1>
      {data.map((experience, index) => (
        <li key={index}>
          <div className="company-date">
            <h3 className="experience-company">{experience.info.company}</h3>
            <div className="experience-date">{experience.date}</div>
          </div>

          <div className="experience-details">
            <h3 className="experience-job">{experience.info.job}</h3>
            <div className="experience-description">
              {experience.info.description}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Expertise;
