import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Socials({ animation }) {
  return (
    <div className="social-icons flex gap-4 text-xl">
      <a href="https://github.com/olalere-abiodun" target="_blank" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} {...{ [animation]: true }} />
      </a>
      <a href="https://www.linkedin.com/in/olalere-sherifdeen-8197962b2/" target="_blank" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} {...{ [animation]: true }} />
      </a>
      <a href="https://x.com/shervie1234?s=11" target="_blank" aria-label="Twitter">
        <FontAwesomeIcon icon={faTwitter} {...{ [animation]: true }} />
      </a>
      <a href="https://www.instagram.com/abby__ola01?igsh=MTNkenZmdG55azVzNA%3D%3D&utm_source=qr" target="_blank" aria-label="Instagram" >
        <FontAwesomeIcon icon={faInstagram} {...{ [animation]: true }} />
      </a>
      
    </div>
  );
}

export default Socials;
