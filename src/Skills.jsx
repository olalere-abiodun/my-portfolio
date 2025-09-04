import React from "react";
import "./style.css";
import skillsdata from "../skillsdata";
import SkillCard from "./components/Skillcard";

function Skills() {
    return (
    <div className="skills-section">
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

