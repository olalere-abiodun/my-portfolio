import "./style.css";
import Navigator from "./components/Navigator";
import Button from "./components/Button";
import Socials from "./components/Socials";
function Hero() {
  return (
    
      <div className="hero">
       <header className="flex flex-col sm:flex-row gap-3 items-center justify-center sm:justify-end w-full">
  <div className="flex justify-center w-full sm:w-auto">
    <Navigator />
  </div>
  <div className="flex justify-center w-full sm:w-auto">
    <Button size="medium" value="DOWNLOAD CV" />
  </div>
</header>
            <main className="flex flex-col sm:flex-row sm:gap-0 justify-between items-center">
            <div className="info w-[370px] h-[364px]">
              <h2>Hello I'm</h2>
              <h1>Olalere S. Abiodun</h1>
              <h2>Web Designer & Web Developer </h2>
              <p>
                Passionate about creating beautiful, user-friendly websites that
                deliver real results. I blend design aesthetics with clean,
                efficient code to bring ideas to life on the web.
              </p>
              <section className="hero-social">
                <Button size="small" value="HIRE ME" />
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