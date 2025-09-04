import React from "react";
import Servicecard from "./components/Servicecard";
import { servicedata } from "../skillsdata";


function Services () {
    return (
    <div className="services-container">
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