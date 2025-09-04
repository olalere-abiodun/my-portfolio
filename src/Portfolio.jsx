import React from "react";
import Projectoggle from "./components/Projectoggle"
import Portofoliocard from "./components/Projectcard";
function Portfolio() {
    return (
    <div className="portfolio-container py-[50px]">
        <section>
            <h1 className="titles">PROJECTS</h1>
            <Projectoggle/>
        </section>
        <div className="project-cards">
            <Portofoliocard/>
            <Portofoliocard/>
            <Portofoliocard/>
            

        </div>
    </div>
    );
}

export default Portfolio;