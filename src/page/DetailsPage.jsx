// DetailsPage.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkoutBooking } from "../store/reducers/bookingSlice";
import Header from "../parts/Header";
import PageDetailsTitle from "../parts/PageDetailsTitle";
import FeatureImg from "../parts/FeatureImg";
import PageDetailsDec from "../parts/PageDetailsDec";
import BookingForm from "../parts/BookingForm";
import Testimony from "../parts/Testimony";
import Footer from "../parts/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getDetailPage,
  detailPageSelector,
} from "../store/reducers/fetchDetailPageSlice";
import Activities from "../parts/Activities";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allDetailPageSelector = useSelector(detailPageSelector);
  const itemDetails = allDetailPageSelector.data;

  useEffect(() => {
    dispatch(getDetailPage(id));

    document.title = "Details Page";
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  const handleStartBooking = ({ _id, duration, date }) => {
    // const totalPrice = itemDetails.price * duration;
    dispatch(checkoutBooking({ _id, duration, date }));
  };

  if (!itemDetails || Object.keys(itemDetails).length === 0) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <PageDetailsTitle breadcrumb={breadcrumb} data={itemDetails} />
      <FeatureImg data={itemDetails} />
      <section className="container mx-auto mb-24 px-6">
        <div className="flex flex-wrap lg:justify-between mt-24 lg:flex-row">
          <PageDetailsDec data={itemDetails} />
          <BookingForm
            itemDetails={itemDetails}
            startBooking={handleStartBooking}
          />
        </div>
      </section>
      <Activities data={itemDetails} />
      <Testimony data={itemDetails.testimonial} />
      <Footer />
    </>
  );
};

export default DetailsPage;
