import React, { Component } from "react";
import Header from "../parts/Header";
import PageDetailsTitle from "../parts/PageDetailsTitle";
import itemDetails from "../../src/json/itemDetails.json";
import FeatureImg from "../parts/FeatureImg";
import Catagories from "../parts/Catagories";
import PageDetailsDec from "../parts/PageDetailsDec";
import BookingForm from "../parts/BookingForm";
import Testimony from "../parts/Testimony";
import Footer from "../parts/Footer";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "Hause Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailsTitle breadcrumb={breadcrumb} data={itemDetails} />
        <FeatureImg data={itemDetails.imageUrls} />
        <section className="container mx-auto mb-24">
          <div className="flex justify-between flex-row">
            <PageDetailsDec data={itemDetails} />
            <BookingForm itemDetails={itemDetails} />
          </div>
        </section>
        <Catagories data={itemDetails.categories} />
        <Testimony data={itemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}
