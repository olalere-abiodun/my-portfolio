import React, { useState } from "react";
import Projectoggle from "./components/Projectoggle"
import Portofoliocard from "./components/Projectcard";
import { webdev, api, ux } from "../skillsdata";
function Portfolio() {
    const [active, setActive] = useState("web");

  const getProjects = () => {
    if (active === "web") return webdev;
    if (active === "api") return api;
    if (active === "ui") return ux;
    return [];
  };
    return (
    <div className="portfolio-container py-[50px]">
      <section className="flex justify-between items-center">
        <h1 className="titles">PROJECTS</h1>
        <Projectoggle active={active} setActive={setActive} />
      </section>

      <div className="project-cards grid gap-6 mt-6">
        {getProjects().map((record) => (
          <Portofoliocard
            key={record.id}
            image={record.image}
            projectname={record.projectname}
            icon={record.icon}
            icon2={record.icon2}
            icon3={record.icon3}
            description={record.description}
            url={record.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;