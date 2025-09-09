import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./style.css";
import Navigator from "./components/Navigator";
import Button from "./components/Button";
import Socials from "./components/Socials";
function downloadFile() {
  const link = document.createElement('a');
  link.href = '/assets/mycv/cv.pdf';
  link.download = 'Olalere.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link); // Clean up
}
function gotoContact(){
  const section = document.querySelector('#contact');
  if (section) {
    section.scrollIntoView({behavior:"smooth"})
  }

}
function Hero() {
  return (
    
      <div className="hero" id="home">
       <header className="flex flex-col sm:flex-row gap-5 items-center justify-center sm:justify-end w-full">
  <div className="flex justify-center w-full sm:w-auto">
    <Navigator />
  </div>
  <div className="flex justify-center w-full sm:w-auto">
    <Button size="medium" value="DOWNLOAD CV" onClick={downloadFile}/>
  </div>
</header>
            <main className="flex flex-col gap-2 sm:flex-row sm:gap-0 justify-between items-center">
            <div className="info w-[370px] h-[364px]">
              <h2>Hello I'm</h2>
                <h1>
    <TypeAnimation
      sequence={[
        "Olalere S. Abiodun", // just your name
      ]}
      wrapper="span"
      cursor={false}   // hides the blinking cursor after typing
      repeat={0}       // type once only
      style={{ display: "inline-block" }}
    />
  </h1>
              <h2>Web Designer & Web Developer </h2>
              <p>
                Passionate about creating beautiful, user-friendly web applications that
                deliver real results. I blend design aesthetics with clean and
                efficient code to bring ideas to life on the web.
              </p>
              <section className="hero-social">
                <Button size="small" value="CONTACT ME" onClick={gotoContact}/>
                <Socials 
                animation="beatFade"/>
              </section>
            </div>
            <div>
              <img src="./assets/images/abiola.png" alt="my image"/>
            </div>
          </main>
      </div>
    
  );
}

export default Hero;