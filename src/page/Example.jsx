// import Breadcrumb from "../elements/Breadcrumb/index";
// import PageDetailsTitle from "../parts/PageDetailsTitle";
import InputNumber from "../../src/elements/Form/inputNumber/index";
import React, { Component } from "react";

export default class Example extends Component {
  state = {
    value: "1",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="grid bg-blue-100 min-h-screen place-content-center ">
        {/* <Breadcrumb data={breadcrumb} /> */}
        {/* <PageDetailsTitle /> */}
        <InputNumber
          max={30}
          onChange={this.handleChange}
          isSuffixPlurer
          name="value"
          value={this.state.value}
          suffix="nigth"
        />
      </div>
    );
  }
}
