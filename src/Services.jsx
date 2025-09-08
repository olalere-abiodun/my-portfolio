import React, {useEffect} from "react";
import Servicecard from "./components/Servicecard";
import { servicedata } from "../skillsdata";


function Services () {
      useEffect(() => {
        const serviceCard = document.querySelectorAll(".service-card");
    
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
    
        serviceCard.forEach((card) => observer.observe(card));
    
        // cleanup when component unmounts
        return () => {
          serviceCard.forEach((card) => observer.unobserve(card));
        };
      }, []);

    return (
    <div className="services-container" id="services">
        <h1 className="titles">SERVICES</h1>
        <div className="service-cards">
            {
                servicedata.map((service) => (
                    <Servicecard 
                    key={service.id}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    />

                ))
            }
        </div>
    </div>
    );
}


export default Services;