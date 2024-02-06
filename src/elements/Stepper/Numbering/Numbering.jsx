import propTypes from "prop-types";

export default function Numbering({ className, data, current }) {
  const KeysOfData = Object.keys(data);
  return (
    <>
      <ol className={["stepper", className].join(" ")}>
        {KeysOfData.map((list, index) => {
          let isActive = list === current ? "active" : "";
          if (index + 1 === KeysOfData.length) {
            isActive = "";
            return null;
          }
          return (
            <li className={[isActive, "mt-10"].join(" ")} key={`list-${index}`}>
              {index + 1}
            </li>
          );
        })}
      </ol>
    </>
  );
}

Numbering.propTypes = {
  className: propTypes.string,
  data: propTypes.object,
  current: propTypes.string,
};
