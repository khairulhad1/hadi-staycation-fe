import React from "react";

export default function FeatureImg({ data }) {
  return (
    <section className="container mx-auto mt-24 mb-24">
      <div className="grid gap-7 grid-rows-2 grid-cols-12 place-content-center">
        {data.map((item, index) => {
          return (
            <div
              key={`featureImg-${index}`}
              className={`rounded-lg ${
                index === 0 ? "row-span-2 col-span-7" : "col-span-5"
              }`}
            >
              <div className=" h-full">
                <figure className="w-full h-auto">
                  <img
                    src={item.url}
                    alt={`featureImg${item._id}`}
                    className="object-cover transition-transform hover:scale-105 "
                  />
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
