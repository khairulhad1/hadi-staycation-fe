import React, { useEffect, useState, useRef } from "react";
import propTypes from "prop-types";
import iconCalender from "../../../../src/assets/images/icons/calendar.svg";
import formatDate from "../../../../src/utils/formatDate";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function InputDateCalender(props) {
  const { value, placeholder, name } = props;
  const [isShowed, setIsShowed] = useState(false);

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection, // Menggunakan value secara keseluruhan
        name: name,
      },
    };
    props.onChange(target);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsite);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsite);
    };
  });

  const refDate = useRef(null);
  const handleClickOutsite = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };
  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""} ${
    value.endDate ? " - " + formatDate(value.endDate) : ""
  }`;

  return (
    <div className="container mx-auto" ref={refDate}>
      <div className="max-w-sm relative">
        <div className="input-group bg-white">
          <div className="input-group-prepend">
            <span className="input-group-text pointer-events-none p-2 flex justify-center bg-gray-900 z-40 rounded w-[45px] h-[45px] absolute">
              <img src={iconCalender} alt="icon calender" />
            </span>
          </div>
          <input
            readOnly
            type="text"
            value={displayDate}
            className="form-control border-gray-300 text-gray-900 cursor-pointer text-sm rounded-none outline-none shadow-none bg-gray-100 py-2 px-[45px] text-center justify-center w-full h-[45px]"
            placeholder={placeholder}
            onClick={() => setIsShowed(!isShowed)}
          />
          {isShowed && (
            <div className="absolute date-range-wrapper px-1 bg-white shadow-sm rounded top-11 ">
              <DateRange
                editableDateInputs={true}
                onChange={datePickerChange}
                moveRangeOnFirstSelection={false}
                onRangeFocusChange={check}
                ranges={[value]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

InputDateCalender.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
