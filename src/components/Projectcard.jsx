import React from "react";

function Portfoliocard(props) {
  return (
    <div className="w-[340px] h-[490px] overflow-hidden rounded-xl bg-white shadow ">
      <div className="flex flex-col">
        <div className="shrink-0 p-3 ">
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="h-55 w-full object-cover rounded"
              src={props.image}
              alt="kitab"
            />
          </a>
        </div>
        <div className="pt-0 px-5 pb-5 ">
          <div className="text-sm mb-2 font-semibold tracking-wide text-[#2A5286] uppercase">
            {props.projectname}
          </div>
          <div className="flex items-center justify-start gap-4 mt-3">
            {props.icon && <img src={props.icon} alt="icon" />}
            {props.icon2 && <img src={props.icon2} alt="icon" />}
            {props.icon3 && <img src={props.icon3} alt="icon" />}
          </div>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfoliocard;
