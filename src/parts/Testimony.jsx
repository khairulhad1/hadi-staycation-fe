import React from "react";
import Star from "../elements/star";
import testimonyFrame from "../../src/assets/images/testimony-frame.jpg";
import Button from "../elements/button/Button";

export default function Testimony({ data }) {
  return (
    <section className="container mx-auto px-6 mb-28">
      <div className="flex flex-wrap items-center md:flex-nowrap w-full lg:h-[541px]">
        <div className="lg:w-[457px]">
          <div className="relative -left-2 mt-10 lg:right-10">
            <img
              src={`${import.meta.env.VITE_BASE_API_URL}/${data.imageUrl}`}
              alt="testimonial"
              className=" lg:h-[486px] lg:w-[356px]"
            />
            <img
              src={testimonyFrame}
              alt="testimonyFrame"
              className="absolute -bottom-0 left-[57%] -z-10 -translate-x-1/2 h-[486px] w-[356px]"
            />
          </div>
        </div>
        <div className=" lg:ml-40 mt-24 flex justify-center items-center mx-auto lg:w-[600px]">
          <div className="">
            <h4 className="mb-12 text-2xl font-medium text-[#152C5B]">
              {data.name}
            </h4>
            <div className="mb-12">
              <Star value={data.rate} width={35} height={35} spacing={4}></Star>
              <h5 className="font-normal text-2xl md:text-3xl lg:text-[32px] text-[#152C5B]">
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
      </div>
    </section>
  );
}
