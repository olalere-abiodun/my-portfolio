import React from "react";

function Portfoliocard() {
  return (
    <div className="w-[340px] h-[467px] overflow-hidden rounded-xl bg-white shadow ">
      <div className="flex flex-col">
        <div className="shrink-0 p-4 ">
          <a
            href="https://kitabservices.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="h-55 w-full object-cover rounded"
              src="./assets/images/project1.png"
              alt="kitab"
            />
          </a>
        </div>
        <div className="pt-0 px-5 pb-5 ">
          <div className="text-sm mb-2 font-semibold tracking-wide text-[#2A5286] uppercase">
            K-I.T.A.B SERVICES
          </div>
          <section className="flex item-center w-6 gap-3 mt-2">
            <img src="./assets/icons/html.svg" alt="" />
            <img src="./assets/icons/css.svg" alt="" />
            <img src="./assets/icons/js.svg" alt="" />
            <img src="./assets/icons/phpicon.svg" alt="" />
          </section>
          <p className="mt-0 text-gray-600 text-sm leading-relaxed">
            A responsive business website developed for{" "}
            <span className="font-semibold">KITAB Services</span>, designed
            using <span className="text-[#2A5286]">HTML CSS</span>. The project
            showcases the company’s consulting, advertising, and property
            services with a clean, professional design.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfoliocard;
