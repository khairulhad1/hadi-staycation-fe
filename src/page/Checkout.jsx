import React, { useState, useEffect } from "react";
import Header from "../parts/Header";
import BookingInformation from "../parts/Checkout/BookingInformation";
import Complated from "../parts/Checkout/Complated";
import Payment from "../parts/Checkout/Payment";
import { useSelector, useDispatch } from "react-redux";
import {
  getDetailPage,
  detailPageSelector,
} from "../store/reducers/fetchDetailPageSlice";
import {
  postCheckout,
  checkoutSelector,
} from "../store/reducers/checkoutSlice";
import { useNavigate } from "react-router-dom";

import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "../../src/elements/Stepper/";
import Button from "../elements/button";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    proofPayment: "",
    bankName: "",
    bankHolder: "",
  });

  const bookingState = useSelector((state) => state.booking);
  const { _id, duration, date } = bookingState || {};
  const allDetailPageSelector = useSelector(detailPageSelector);
  const itemDetails = allDetailPageSelector.data;

  useEffect(() => {
    dispatch(getDetailPage(_id));
    document.title = "Staycation | Checkout";
    window.scrollTo(0, 0);
  }, [dispatch, _id]);

  const checkout = {
    duration: duration,
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSubmit = (nextStep) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phone);
    formData.append("idItem", _id);
    formData.append("duration", duration);
    formData.append("bookingStartDate", date.startDate);
    formData.append("bookingEndDate", date.endDate);
    formData.append("accountHolder", data.bankHolder);
    formData.append("bankFrom", data.bankName);
    formData.append("image", data.proofPayment[0]);

    dispatch(postCheckout(formData)).then(() => {
      nextStep();
    });
  };

  if (!duration) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">Anda Harus Pilih Kamar Dulu</p>
          <Button
            onClick={handleGoBack}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
          >
            Back To Home
          </Button>
        </div>
      </div>
    );
  }

  if (!itemDetails || Object.keys(itemDetails).length === 0) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">Loading...</p>
        </div>
      </div>
    );
  }

  const onChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const steps = {
    bookingInformation: {
      title: "Booking Information",
      description: "Please fill up the blank fields below",
      content: (
        <BookingInformation
          data={data}
          checkout={checkout}
          onChange={onChange}
          itemDetails={itemDetails}
        />
      ),
    },

    payment: {
      title: "Payment",
      description: "Kindly follow the instructions below",
      content: (
        <Payment
          data={data}
          checkout={checkout}
          onChange={onChange}
          itemDetails={itemDetails}
        />
      ),
    },

    completed: {
      title: "Yay! Completed",
      description: "",
      content: <Complated />,
    },
  };

  return (
    <div className="mb-10">
      <Header isCentered />
      <Stepper steps={steps} initialStep="bookingInformation">
        {(prevStep, nextStep, CurrentStep, steps) => (
          <>
            <Numbering data={steps} current={CurrentStep} />

            <Meta data={steps} current={CurrentStep} />

            <MainContent data={steps} current={CurrentStep} />
            {CurrentStep === "bookingInformation" && (
              <Controller>
                {data.firstName !== "" &&
                  data.lastName !== "" &&
                  data.email !== "" &&
                  data.phone !== "" && (
                    <Button
                      className="btn mb-3"
                      type="button"
                      isBlock
                      isPrimary
                      hasShadow
                      onClick={nextStep}
                    >
                      Continue to Book
                    </Button>
                  )}
                <Button
                  className="btn"
                  type="link"
                  isBlock
                  isLight
                  href={`/properties/${_id}`}
                >
                  Cancel
                </Button>
              </Controller>
            )}

            {CurrentStep === "payment" && (
              <Controller>
                {data.proofPayment !== "" &&
                  data.bankName !== "" &&
                  data.bankHolder !== "" && (
                    <Button
                      className="mb-3 w-[300px]"
                      type="button"
                      isBlock
                      isPrimary
                      hasShadow
                      onClick={() => handleSubmit(nextStep)}
                    >
                      Continue to Book
                    </Button>
                  )}
                <Button
                  className="btn"
                  type="button"
                  isBlock
                  isLight
                  onClick={prevStep}
                >
                  Cancel
                </Button>
              </Controller>
            )}

            {CurrentStep === "completed" && (
              <Controller>
                <Button
                  className="btn"
                  type="link"
                  isPrimary
                  hasShadow
                  href="/"
                >
                  Back to Home
                </Button>
              </Controller>
            )}
          </>
        )}
      </Stepper>
    </div>
  );
};

export default Checkout;
