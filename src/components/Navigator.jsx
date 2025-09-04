import React from "react";

function Navigator() {
  return (
    <nav className="navigator">
      <ul className="flex space-x-2 pt-4">
        <li>
          <a href="#about" className="text-[#2A5286] font-bold px-3 py-1 border-b-1 border-[#2A5286] hover:border-b-2">
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className="text-[#2A5286] font-bold  px-3 py-1 border-b-1 border-[#2A5286] hover:border-b-2">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="text-[#2A5286] font-bold px-3 py-1 border-b-1 border-[#2A5286] hover:border-b-2">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-[#2A5286] font-bold px-3 py-1 border-b-1 border-[#2A5286] hover:border-b-2">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#" className="text-[#2A5286] font-bold px-3 py-1 border-b-1 border-[#2A5286] hover:border-b-2">
            Hire Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigator;
