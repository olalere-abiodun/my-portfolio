import React, { useEffect } from "react";
import "./style.css";
import skillsdata from "../skillsdata";
import SkillCard from "./components/Skillcard";

function Skills() {
  useEffect(() => {
    const skillCards = document.querySelectorAll(
      ".javascript, .html, .bootstrap, .react, .api, .wordpress, .digital, .figma"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active"); // optional reset
          }
        });
      },
      { threshold: 0.5 }
    );

    skillCards.forEach((card) => observer.observe(card));

    // cleanup when component unmounts
    return () => {
      skillCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="skills-section" id="skills">
      <h1 className="titles">SKILLS</h1>
      <div className="skill-cards">
        {skillsdata.map((skill) => (
          <SkillCard
            key={skill.id}
            classname={skill.classname}
            icon={skill.icon}
            icon2={skill.icon2}
            name={skill.name}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
