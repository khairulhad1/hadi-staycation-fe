import React from "react";
import Button from "../elements/button/Button";

export default function IconText() {
  return (
    <Button isLarge className="brand-text-icon" type="link" href="">
      Stay<span className="text-gray-900 ">cation.</span>
    </Button>
  );
}
