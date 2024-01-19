import React from "react";
import Star from "../elements/star";
import testimonyFrame from "../../src/assets/images/testimony-frame.jpg";
import Button from "../elements/button";

export default function Testimony({ data }) {
  return (
    <section className="container mx-auto mb-28">
      <div className="flex items-center w-full h-[541px]">
        <div className="w-[457px]">
          <div className="relative left-28">
            <img
              src={data.imageUrl}
              alt="testimonial"
              className="absolute z-10 h-[486px] w-[356px] -bottom-[275px] left-12"
            />
            <img
              src={testimonyFrame}
              alt="testimonyFrame"
              className="absolute z-0 h-[486px] w-[356px] -bottom-[240px]"
            />
          </div>
        </div>
        <div className=" ml-40 w-[600px] h-[337px]">
          <h4 className="mb-12 text-2xl font-medium text-[#152C5B]">
            {data.name}
          </h4>
          <div className="mb-12">
            <Star value={data.rate} width={35} height={35} spacing={4}></Star>
            <h5 className="font-normal text-[32px] text-[#152C5B]">
              {data.content}
            </h5>
            <div className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </div>
          </div>
          <Button
            isPrimary
            className=""
            type="link"
            href={`/testimonial/${data._id}`}
          >
            Read Their Story
          </Button>
        </div>
      </div>
    </section>
  );
}
