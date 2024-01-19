import React, { Component, useRef } from "react";
import Header from "../parts/Header";
import landingPage from "../json/landingPage.json";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";
import Catagories from "../parts/Catagories";
import Testimony from "../parts/Testimony";
import Footer from "../parts/Footer";

class LandingPage extends Component {
  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }

  constructor(props) {
    super(props);
    this.heroRef = React.createRef();
    this.mostPickedRef = React.createRef();
  }
  render() {
    return (
      <>
        <Header />
        <Hero data={landingPage.hero} mostPickedRef={this.mostPickedRef} />
        <MostPicked
          data={landingPage.mostPicked}
          mostPickedRef={this.mostPickedRef}
        />
        <Catagories data={landingPage.categories} />
        <Testimony data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}

export default LandingPage;
