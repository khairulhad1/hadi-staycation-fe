import React, { useEffect, useRef } from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";
import Categories from "../parts/Categories";
import Testimony from "../parts/Testimony";
import Footer from "../parts/Footer";
import { useSelector, useDispatch } from "react-redux";
import { getPage, pageSelector } from "../store/reducers/fetchPageSlice";

const LandingPage = () => {
  const dispatch = useDispatch();
  const mostPickedRef = useRef();

  const allPageSelector = useSelector(pageSelector);
  const landingPage = allPageSelector.data;

  useEffect(() => {
    dispatch(getPage());
    document.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }, [dispatch]);

  if (!landingPage || Object.keys(landingPage).length === 0) {
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
      <Hero data={landingPage.hero} mostPickedRef={mostPickedRef} />
      <MostPicked data={landingPage.mostPick} mostPickedRef={mostPickedRef} />
      <Categories data={landingPage.category} />
      <Testimony data={landingPage.testimonial} />
      <Footer />
    </>
  );
};

export default LandingPage;
