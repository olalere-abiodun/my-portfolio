import React from "react";


function SkillCard(props) {
  return (
    <div className="skill-container">
      <div className="skill-card flex flex-row items-center justify-center text-x font-medium shadow-lg">
        <img src={props.icon} alt="skill-icon" className="skill-icon" />
        {props.icon2 && (
          <img src={props.icon2} alt="skill-icon" className="skill-icon" />
        )}
        <h3 className="skill-name">{props.name}</h3>
      </div>
      <p>{props.description}</p>
    </div>
  );
}

export default SkillCard;
