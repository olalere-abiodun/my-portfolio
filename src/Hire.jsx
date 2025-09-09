import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Input from "./components/Input";
import Textarea from "./components/Textarea";
import Button from "./components/Button";
import Socials from "./components/Socials";
import emailjs from "emailjs-com";


function Hire() {
     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_m4he469",   // from EmailJS
      "template_ea575ut",  // from EmailJS
      form.current,
      "Mytzhc_Ggxzd-P_Ab"    // from EmailJS
    ).then(
      (result) => {
        alert("Message sent successfully ✅");
      },
      (error) => {
        alert("Failed to send ❌: " + error.text);
      }
    );
  };
    return(
        <div className="hire-container" id="contact">
            <h1 className="titles">CONTACT ME</h1>
            <div className="hire-card flex flex-col gap-8 lg:flex-row justify-between">
                <section className="contacts">
                   <div className="email-tel">
                     <div className="w-full sm:w-[164px]">
                        <section className="contact-icon flex justify-center items-center"><FontAwesomeIcon icon={faPhone} shake /> <span className="font-bold ml-5 text[16px]">PHONE</span></section>
                        <section className="flex flex-col gap-4 mt-7 font-medium text-[14px] border-r-2">
                            <a href="tel:+2349068877855">+2349068877855</a>
                            <a href="tel:+22990085518">+22990085518</a>
                        </section>
                    </div>
                    <div className="w-full sm:w-[224px]">
                        <section className="contact-icon flex justify-center items-center"><FontAwesomeIcon icon={faEnvelope} shake /> <span className="font-bold ml-5">EMAIL</span></section>
                         <section className="flex flex-col gap-4 mt-7 ml-5 font-medium text-[12px] sm:text-[14px]">
                            <a href="mailto:abbytechconsult@gmail.com">abbytechconsult@gmail.com</a>
                            <a href="mailto:shervie20@gmail.com">shervie20@gmail.com</a>
                        </section>
                    </div>
                   </div>
                   <Socials />

            

                </section>
                <section >
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col sm:w-[480px] ">
                        <Input 
                            type="text"
                            placeholder="FullName"
                            name="FullName"

                        />
                        <Input 
                            type="email"
                            placeholder="Email"
                            name="Email"

                        />
                        <Textarea
                            placeholder="Message"
                            name="Message"
                        />
                        <Button 
                            size="large"
                            value="SEND"
                            type="submit"
                        />
                        
                    </form>



                </section>
            </div>
        </div>
    );
}

export default Hire;