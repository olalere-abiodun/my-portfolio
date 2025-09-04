import React from "react";

const Button = (props) => {
    const sizeClass = {
        small:"py-[13px] px-[38px]",
        medium:"py-[13px] px-[17px]",
        large:"py-[13px] px-[219px]"
    }
  return (
    <button className={`bg-[#2B5288] text-[#FFFFFF] font-bold ${sizeClass[props.size]} rounded-[10px] w-auto self-center`} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Button;
