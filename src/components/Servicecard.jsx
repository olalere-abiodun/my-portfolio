import React from "react";

function Servicecard() {
  return (
    <div className="service-card w-[276px] h-[250px] px-[25px] py-[20px]" >
      <img src="../assets/icons/WebDesign.svg" alt="" />
     <div className="flex flex-col text-center items-center gap-[15px]">
         <h3 className="font-bold text-[16px]">UI/UX Design</h3>
      <p className="text-[14px]">
        Designing intuitive, user-centered interfaces that deliver seamless and
        engaging experiences.<br/> I focus on usability, accessibility, and aesthetic
        appeal to ensure products not only look great but also function
        flawlessly.
      </p>
     </div>
    </div>
  );
}

export default Servicecard;
