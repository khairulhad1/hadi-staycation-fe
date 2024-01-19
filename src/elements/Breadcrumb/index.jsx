import propTypes from "prop-types";
import Button from "../button";

export default function Breadcrumb(props) {
  const className = [props.className];
  return (
    <nav className="" aria-label="breadcrub">
      <ol className={`flex ${className}`}>
        {props.data.map((items, index) => {
          return (
            <li
              key={`breadcrum-${index}`}
              className={`${
                index === props.data.length - 1
                  ? " font-medium text-slate-900"
                  : "text-slate-400 hover:text-slate-900"
              }`}
            >
              {index === props.data.length - 1 ? (
                items.pageTitle
              ) : (
                <Button type={`link`} href={items.pageHref}>
                  {items.pageTitle}
                  <span className="mx-4 ">/</span>
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  date: propTypes.array,
  className: propTypes.string,
};
