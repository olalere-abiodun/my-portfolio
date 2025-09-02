import React from "react";

function Textarea(props) {
  return (
    <textarea
      placeholder={props.placeholder}
      className="resize-none bg-gray-100 p-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[10px] py-[13px] w-[480px] h-[111px] mb-2"
    />
  );
}

export default Textarea;
