import React from "react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";

import { render } from "@testing-library/react";

test("should not allow to click burron if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);
  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);
  expect(container.querySelector("a")).toBeInTheDocument();
});

test("should render <Link> component", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );
  expect(container.querySelector("a")).toBeInTheDocument();
});
