import React from "react";

function Textarea(props) {
  return (
    <textarea
      placeholder={props.placeholder}
      className="
  resize-none bg-gray-100 p-2 border-2 border-gray-800 
  focus:outline-none focus:ring-2 focus:ring-blue-500 
  rounded-[10px] py-[13px] mb-2
  w-[331.2px] sm:w-[360px] md:w-[420px] lg:w-[480px] 
  h-[90px] sm:h-[100px] md:h-[111px]
  max-w-full
"
    />
  );
}

export default Textarea;
