import propTypes from "prop-types";
import { useState } from "react";

export default function Text(props) {
  const {
    value,
    type,
    placeholder,
    append,
    prepend,
    name,
    outerClassName,
    inputClassName,
    errorResponse,
  } = props;
  const [HasError, setHasError] = useState(null);

  let pattern = "";
  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === "tel") pattern = "[0-9]*";

  const handleChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };
    if (type === "email") {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }
    if (type === "tel") {
      if (event.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
  };

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="flex items-center">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          name={name}
          type={type}
          pattern={pattern}
          className={[
            "form-input bg-neutral-100 rounded w-80 h-[45px] pl-5 mt-2",
            inputClassName,
          ].join(" ")}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
      {HasError && <span className="error-helper">{HasError}</span>}
    </div>
  );
}

Text.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "please type here....",
  errorResponse: "please math the requested format.",
};

Text.propTypes = {
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
