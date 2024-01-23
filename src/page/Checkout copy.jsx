// import React, { Component } from "react";
// import Header from "../parts/Header";
// import BookingInformation from "../parts/Checkout/BookingInformation";
// import ItemDetails from "../../src/json/itemDetails.json";
// import Complated from "../parts/Checkout/Complated";
// import Payment from "../parts/Checkout/Payment";
// import { useSelector } from "react-redux";
// import selectBooking from "../store/reducers/index";
// import Stepper, {
//   Numbering,
//   Meta,
//   MainContent,
//   Controller,
// } from "../../src/elements/Stepper/";
// import Button from "../elements/button";

// export default class Checkout extends Component {

//   state = {
//     data: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       proofPayment: "",
//       bankName: "",
//       bankHolder: "",
//     },
//   };

//   onChange = (event) => {
//     this.setState({
//       data: {
//         ...this.state.data,
//         [event.target.name]: event.target.value,
//       },
//     });
//   };

//   componentDidMount() {
//     window.scroll(0, 0);
//     document.title = "Staycation | Checkout";
//   }

//   render() {
//     const { _id, duration, date } = useSelector(selectBooking);
//     const { data } = this.state;
//     const checkout = {
//       duration: duration,
//     };

//     const steps = {
//       bookingInformation: {
//         title: "Booking Information",
//         description: "Please fill up the blank fields below",
//         content: (
//           <BookingInformation
//             data={data}
//             checkout={checkout}
//             onChange={this.onChange}
//             itemDetails={ItemDetails}
//           />
//         ),
//       },

//       payment: {
//         title: "Payment",
//         description: "Kindly follow the instructions below",
//         content: (
//           <Payment
//             data={data}
//             checkout={checkout}
//             onChange={this.onChange}
//             itemDetails={ItemDetails}
//           />
//         ),
//       },

//       completed: {
//         title: "Yay! Completed",
//         description: "yy",
//         content: <Complated />,
//       },
//     };

//     return (
//       <div>
//         <Header isCentered />
//         <Stepper steps={steps} initialStep="bookingInformation">
//           {(prevStep, nextStep, CurrentStep, steps) => (
//             <>
//               <Numbering data={steps} current={CurrentStep} />

//               <Meta data={steps} current={CurrentStep} />

//               <MainContent data={steps} current={CurrentStep} />
//               {CurrentStep === "bookingInformation" && (
//                 <Controller>
//                   {data.firstName !== "" &&
//                     data.lastName !== "" &&
//                     data.email !== "" &&
//                     data.phone !== "" && (
//                       <Button
//                         className="btn mb-3"
//                         type="button"
//                         isBlock
//                         isPrimary
//                         hasShadow
//                         onClick={nextStep}
//                       >
//                         Continue to Book
//                       </Button>
//                     )}
//                   <Button
//                     className="btn"
//                     type="link"
//                     isBlock
//                     isLight
//                     href={`/properties/${checkout._id}`}
//                   >
//                     Cancel
//                   </Button>
//                 </Controller>
//               )}

//               {CurrentStep === "payment" && (
//                 <Controller>
//                   {data.proofPayment !== "" &&
//                     data.bankName !== "" &&
//                     data.bankHolder !== "" && (
//                       <Button
//                         className="mb-3 w-[300px]"
//                         type="button"
//                         isBlock
//                         isPrimary
//                         hasShadow
//                         onClick={nextStep}
//                       >
//                         Continue to Book
//                       </Button>
//                     )}
//                   <Button
//                     className="btn"
//                     type="button"
//                     isBlock
//                     isLight
//                     onClick={prevStep}
//                   >
//                     Cancel
//                   </Button>
//                 </Controller>
//               )}

//               {CurrentStep === "completed" && (
//                 <Controller>
//                   <Button
//                     className="btn"
//                     type="link"
//                     isPrimary
//                     hasShadow
//                     href="/"
//                   >
//                     Back to Home
//                   </Button>
//                 </Controller>
//               )}
//             </>
//           )}
//         </Stepper>
//       </div>
//     );
//   }
// }
