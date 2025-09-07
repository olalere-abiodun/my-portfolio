import React from "react";

function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="
  bg-gray-100 p-2 border-2 border-gray-800 
  focus:outline-none focus:ring-2 focus:ring-blue-500 
  rounded-[10px] py-[13px] mb-2 
  w-[331px] sm:w-[360px] md:w-[420px] lg:w-[480px] 
  max-w-full
"
    />
  );
}

export default Input;
