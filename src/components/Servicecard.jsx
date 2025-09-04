import React from "react";

function Servicecard(props) {
  return (
    <div className="service-card w-[340px] h-[300px] px-[30px] py-[30px]" >
      <img src={props.icon} alt="" />
     <div className="flex flex-col text-center items-center gap-[15px]">
         <h3 className="font-bold text-[16px]">{props.title}</h3>
      <p className="text-[14px]">
        {props.description}
      </p>
     </div>
    </div>
  );
}

export default Servicecard;
