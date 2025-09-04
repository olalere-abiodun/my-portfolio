import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Socials({ animation }) {
  return (
    <div className="social-icons flex gap-4 text-xl">
      <a href="#" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} {...{ [animation]: true }} />
      </a>
      <a href="#" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} {...{ [animation]: true }} />
      </a>
      <a href="#" aria-label="Twitter">
        <FontAwesomeIcon icon={faTwitter} {...{ [animation]: true }} />
      </a>
      <a href="#" aria-label="Instagram">
        <FontAwesomeIcon icon={faInstagram} {...{ [animation]: true }} />
      </a>
      
      <a href="#" aria-label="Facebook">
        <FontAwesomeIcon icon={faFacebook} {...{ [animation]: true }} />
      </a>
    </div>
  );
}

export default Socials;
