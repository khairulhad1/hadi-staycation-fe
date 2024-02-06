import React from "react";
import IconText from "./IconText";
import Button from "../elements/button";

export default function Footer() {
  return (
    <footer className="container mx-auto mb-24">
      <div className="flex flex-wrap lg:flex-row px-6 mx-auto">
        <div className="lg:basis-2/5 w-full md:w-1/2 ">
          <IconText />
          <p className="text-base font-light text-[#B0B0B0] mt-[23px]">
            We kaboom your beauty holiday <br /> instantly and memorable.
          </p>
        </div>
        <div className="lg:basis-[25%] w-full md:w-1/2">
          <h6 className="text-[#152C5B] text-lg font-medium mb-[23px] mt-1">
            For Beginners
          </h6>
          <ul className="text-base font-light text-[#B0B0B0]">
            <li className="mb-2">
              <Button className="" type="link" href={`/register`}>
                New Account
              </Button>
            </li>
            <li className="mb-2">
              <Button className="" type="link" href={`/properties`}>
                Start Booking a Room
              </Button>
            </li>
            <li className="mb-2">
              <Button className="" type="link" href={`/payment-use`}>
                Use Payments
              </Button>
            </li>
          </ul>
        </div>
        <div className="lg:basis-[25%] w-full md:w-1/2">
          <h6 className="text-[#152C5B] text-lg font-medium mb-[23px] mt-1">
            Explore Us
          </h6>
          <ul className="text-base font-light text-[#B0B0B0]">
            <li className="mb-2">
              <Button className="" type="link" href={`/careers`}>
                Our Careers
              </Button>
            </li>
            <li className="mb-2">
              <Button className="" type="link" href={`/Privacy`}>
                Privacy
              </Button>
            </li>
            <li className="mb-2">
              <Button className="" type="link" href={`/terms`}>
                Terms & Conditions
              </Button>
            </li>
          </ul>
        </div>
        <div className="lg:basis-[25%] w-full md:w-1/2">
          <h6 className="text-[#152C5B] text-lg font-medium mb-[23px] mt-1">
            Connect Us
          </h6>
          <ul className="text-base font-light text-[#B0B0B0]">
            <li className="mb-2">
              <Button
                className=""
                isExternal
                type="link"
                href={`mailto:support@staycation.id`}
              >
                support@staycation.id
              </Button>
            </li>
            <li className="mb-2">
              <Button className="" type="link" href={`tel:+6202122081996`}>
                021 - 2208 - 1996
              </Button>
            </li>
            <li className="mb-2">
              <span className="">Staycation, Kemang, Jakarta</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
