import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Input from "./components/Input";
import Textarea from "./components/Textarea";
import Button from "./components/Button";


function Hire() {
    return(
        <div className="hire-container">
            <h1 className="titles">HIRE ME</h1>
            <div className="hire-card flex justify-between">
                <section className="contacts">
                    <div className="w-[164px]">
                        <section className="contact-icon flex justify-center items-center"><FontAwesomeIcon icon={faPhone} shake /> <span className="font-bold ml-5 text[16px]">PHONE</span></section>
                        <section className="flex flex-col gap-4 mt-7 font-medium text-[14px] border-r-2">
                            <a href="tel:+2349068877855">+2349068877855</a>
                            <a href="tel:+22990085518">+22990085518</a>
                        </section>
                    </div>
                    <div className="w-[224px]">
                        <section className="contact-icon flex justify-center items-center"><FontAwesomeIcon icon={faEnvelope} shake /> <span className="font-bold ml-5">EMAIL</span></section>
                         <section className="flex flex-col gap-4 mt-7 ml-5 font-medium text-[14px]">
                            <a href="mailto:abbytechconsult@gmail.com">abbytechconsult@gmail.com</a>
                            <a href="mailto:shervie20@gmail.com">shervie20@gmail.com</a>
                        </section>
                    </div>
            

                </section>
                <section className="">
                    <form className="flex flex-col w-[480px] ">
                        <Input 
                            type="text"
                            placeholder="FullName"

                        />
                        <Input 
                            type="email"
                            placeholder="Email"

                        />
                        <Textarea
                            placeholder="Message"
                        />
                        <Button 
                            size="large"
                            value="SEND"
                        />
                        
                    </form>



                </section>
            </div>
        </div>
    );
}

export default Hire;