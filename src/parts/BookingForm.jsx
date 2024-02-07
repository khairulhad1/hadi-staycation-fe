import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import InputDate from "../elements/Form/inputDate/InputDateCalender";
import InputNumber from "../elements/Form/inputNumber/inputNumber";
import Button from "../elements/button/Button";

function BookingForm({ itemDetails, startBooking }) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    duration: 1,
    date: {
      startDate: new Date(), // Menggunakan format tanggal ISO
      endDate: new Date(),
      key: "selection",
    },
  });

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const startDate = new Date(data.date.startDate);
    const endDate = new Date(
      startDate.setDate(startDate.getDate() + Number(data.duration) - 1)
    );
    setData((prevData) => ({
      ...prevData,
      date: {
        ...prevData.date,
        endDate: endDate, // Menggunakan format tanggal ISO
      },
    }));
  }, [data.duration, data.date.startDate]);

  const startBookingHandler = () => {
    startBooking({
      _id: itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
    navigate("/checkout");
  };

  return (
    <div className="lg:basis-2/5 lg:h-[550px] w-full mt-6 rounded-[15px] border border-neutral-200 py-[64px] px-6 lg:px-[110px]">
      <h4 className="text-blue-950 text-xl font-medium mb-[14px]">
        Start Booking
      </h4>
      <h5 className="text-teal-500 text-4xl font-medium my-6">
        {itemDetails.price}{" "}
        <span className="text-zinc-400 text-4xl">per {itemDetails.unit}</span>
      </h5>
      <label htmlFor="duration">How long you will stay</label>
      <div className="my-4">
        <InputNumber
          max={30}
          suffix=" nigth"
          isSuffixPlurer
          onChange={updateData}
          name="duration"
          value={data.duration}
        />
      </div>
      <label htmlFor="date">Pick a date</label>
      <div className="my-4">
        <InputDate onChange={updateData} name="date" value={data.date} />
      </div>
      <h6 className="text-gray-500 font-light mb-10">
        You will pay{" "}
        <span className="text-blue-950 leading-7 text-base font-medium">
          ${itemDetails.price * data.duration} USD
        </span>{" "}
        per{" "}
        <span className="text-blue-950 leading-7 text-base font-medium">
          {data.duration} {itemDetails.unit}
        </span>
      </h6>
      <div className=" w-full mx-auto grid place-items-center">
        <Button
          isPrimary
          isShadow
          onClick={startBookingHandler}
          className={`w-full`}
        >
          Continue to Book
        </Button>
      </div>
    </div>
  );
}

BookingForm.propTypes = {
  itemDetails: PropTypes.object.isRequired,
  startBooking: PropTypes.func.isRequired,
};

export default BookingForm;
