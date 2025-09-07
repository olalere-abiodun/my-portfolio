import React from "react";

const Button = (props) => {
    const sizeClass = {    
      small: "py-[13px] px-[20px] sm:px-[32px] md:px-[38px]",
      medium: "py-[13px] px-[18px] sm:px-[17px] md:px-[17px]",
      large: "py-[13px] px-[144.1px] sm:px-[160px] md:px-[219px] lg:px-[219px]",
    }
  return (
    <button className={`
      ${props.size}
    bg-[#2B5288]
     text-[#FFFFFF]
      font-bold 
      ${sizeClass[props.size]} 
      rounded-[10px] 
      w-auto 
      self-center
      `} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Button;
