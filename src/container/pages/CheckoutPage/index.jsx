import React from "react";

import Header from "../../../components/molecules/Header";
import Footer from "../../../components/molecules/Footer";

export default function index(props) {
  // console.log(props.history);
  // console.log(props.location.state.data);
  const { location } = props;

  return (
    <div className="checkout-page">
      <Header {...props} />
      <Footer />
    </div>
  );
}
