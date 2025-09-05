import React from "react";

function Navigator() {
  return (
   <nav className="navigator">
  <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 pt-4">
    <li>
      <a
        href="/"
        className="text-[#2A5286] font-bold text-sm sm:text-base md:text-lg px-2 sm:px-3 py-1 border-b border-[#2A5286] hover:border-b-2"
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="#skills"
        className="text-[#2A5286] font-bold text-sm sm:text-base md:text-lg px-2 sm:px-3 py-1 border-b border-[#2A5286] hover:border-b-2"
      >
        Skills
      </a>
    </li>
    <li>
      <a
        href="#contact"
        className="text-[#2A5286] font-bold text-sm sm:text-base md:text-lg px-2 sm:px-3 py-1 border-b border-[#2A5286] hover:border-b-2"
      >
        Services
      </a>
    </li>
    <li>
      <a
        href="#"
        className="text-[#2A5286] font-bold text-sm sm:text-base md:text-lg px-2 sm:px-3 py-1 border-b border-[#2A5286] hover:border-b-2"
      >
        Portfolio
      </a>
    </li>
    <li>
      <a
        href="#"
        className="text-[#2A5286] font-bold text-sm sm:text-base md:text-lg px-2 sm:px-3 py-1 border-b border-[#2A5286] hover:border-b-2"
      >
        Hire Me
      </a>
    </li>
  </ul>
</nav>

  );
}

export default Navigator;
