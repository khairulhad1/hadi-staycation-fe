import React from "react";
import Breadcrumb from "../../src/elements/Breadcrumb/index";

export default function PageDetailsTitle({ data, breadcrumb }) {
  return (
    <div className="container mx-auto mt-14">
      <div className="grid grid-cols-3 gap-4 h-[82px] items-center">
        <Breadcrumb data={breadcrumb} className={`col-start-1 col-end-2 `} />
        <div className="col-start-2 col-end-3  text-center">
          <div className="text-center text-blue-950 text-4xl font-semibold mb-3">
            {data.name}
          </div>
          <span className="h-6 text-center text-zinc-400 text-lg font-light">
            {data.city}, {data.country}
          </span>
        </div>
      </div>
    </div>
  );
}
