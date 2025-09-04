import "./style.css";
import Navigator from "./components/Navigator";
import Button from "./components/Button";
import Socials from "./components/Socials";
function Hero() {
  return (
    
      <div className="hero">
        <header className="flex gap-5 justify-end">
          <Navigator />
          <Button size="medium" value="DOWNLOAD CV" />
        </header>
         <main className="flex flex-col sm:flex-row sm:gap-0 justify-between items-center">
            <div className="info w-[346px] h-[364px]">
              <h2>Hello I'm</h2>
              <h1>Olalere S. Abiodun</h1>
              <h2>Web Designer & Web Designer </h2>
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