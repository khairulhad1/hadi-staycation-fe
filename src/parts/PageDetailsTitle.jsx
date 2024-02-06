import React from "react";
import Breadcrumb from "../../src/elements/Breadcrumb/index";

export default function PageDetailsTitle({ data, breadcrumb }) {
  return (
    <div className="container mx-auto px-6 mt-14">
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:h-[82px] lg:items-center">
        <Breadcrumb
          data={breadcrumb}
          className={`lg:col-start-1 lg:col-end-2 `}
        />
        <div className="flex items-center justify-center lg:col-start-2 lg:col-end-3  lg:text-center">
          <div className="mt-6">
            <div className="text-center text-blue-950 text-2xl lg:text-4xl font-semibold lg:mb-3">
              {data.title}
            </div>
            <span className="lg:h-6 px-4 text-center text-zinc-400 text-base lg:text-lg font-light">
              {data.city}, {data.country}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
