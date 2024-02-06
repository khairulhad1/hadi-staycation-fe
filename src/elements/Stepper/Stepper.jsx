import propTypes from "prop-types";
import { useState } from "react";

export default function Stepper(props) {
  const { steps, initialStep } = props;
  const stepKeys = Object.keys(steps);

  const [CurrentStep, setCurrentStep] = useState(
    stepKeys.indexOf(initialStep) > -1 ? initialStep : stepKeys[0]
  );
  const totalStep = stepKeys.length;
  const indexStep = stepKeys.indexOf(CurrentStep);

  const prevStep = () => {
    if (+indexStep > 0) setCurrentStep(stepKeys[indexStep - 1]);
  };

  const nextStep = () => {
    if (+indexStep < totalStep) setCurrentStep(stepKeys[indexStep + 1]);
  };

  return (
    <section className="container mx-auto">
      {props.children(prevStep, nextStep, CurrentStep, steps)}
    </section>
  );
}

Stepper.propTypes = {
  steps: propTypes.object.isRequired,
  initialStep: propTypes.string,
};

export { default as Numbering } from "./Numbering/Numbering";
export { default as Meta } from "./Meta/Meta";
export { default as Controller } from "./Contoller/Controller";
export { default as MainContent } from "./MainContent/MainContent";
