import React, { useState } from "react";

function ToggleGroup() {
  const [active, setActive] = useState("web");

  const buttons = [
    { id: "web", label: "WEB DEV." },
    { id: "ui", label: "UI DESIGN" },
    { id: "api", label: "API" },
  ];

  return (
    <div className="flex border rounded-lg overflow-hidden bg-white w-[337px]" >
      {buttons.map((btn, index) => (
        <button
          key={btn.id}
          onClick={() => setActive(btn.id)}
          className={`px-4 py-2 text-sm font-semibold transition-colors duration-200 w-[112px] 
            ${
              active === btn.id
                ? "bg-[#2A5286] text-white"
                : "bg-white text-black"
            }
            ${index !== buttons.length - 1 ? "border-r" : ""}
          `}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}

export default ToggleGroup;
