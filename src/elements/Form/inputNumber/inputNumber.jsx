import React, { useState } from "react";

import propTypes from "prop-types";

export default function Number(props) {
  const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlurer } =
    props;
  const [InputValue, setInputValue] = useState(`${prefix} ${value} ${suffix}`);

  const onChange = (e) => {
    let value = String(e.target.value);
    if (prefix) value = value.replace(prefix);
    if (suffix) value = value.replace(suffix);
    const patternNumeric = new RegExp("[0-9]*");
    const isNumeric = patternNumeric.test(value);

    if (isNumeric && +value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
      setInputValue(
        `${prefix} ${value} ${suffix}${isSuffixPlurer && +value > 1 ? "s" : ""}`
      );
    }
  };

  const minus = () => {
    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };

  return (
    <div
      className={["h-12 max-w-sm bg-[#F5F6F8]", props.outerClassName].join(" ")}
    >
      <div className="flex flex-row h-10 w-full relative  mt-1">
        <button
          onClick={minus}
          className="bg-[#E74C3C] text-white hover:bg-gray-400 h-12 w-20 rounded-lg cursor-pointer"
        >
          <span className="m-auto text-2xl font-extrabold">−</span>
        </button>
        <input
          min={min}
          max={max}
          readOnly
          name={name}
          pattern="[0-9]*"
          className="focus:outline-none text-center w-full font-semibold bg-[#F5F6F8] text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
          onChange={onChange}
          placeholder={placeholder ? placeholder : "0"}
          value={String(InputValue)}
        />
        <button
          onClick={plus}
          className="bg-[#1ABC9C] text-white hover:bg-gray-400 h-12 w-20 rounded-lg cursor-pointer"
        >
          <span className="m-auto text-2xl font-extrabold">+</span>
        </button>
      </div>
    </div>
  );
}

Number.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

Number.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  isSuffixPlurer: propTypes.bool,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
