import React from "react";

import Header from "../../../components/molecules/Header";
import PageDetailTitle from "../../../components/molecules/PageDetailTitle";
import BookingInformation from "../../../components/molecules/BookingInformation";
import TitleSection from "../../../components/atoms/TitleSection";

import Footer from "../../../components/molecules/Footer";

import "./CheckoutPage.scss";

export default function index(props) {
  // console.log(props.history);
  // console.log(props.location.state.data);

  return (
    <div className="checkout-page">
      <Header {...props} />
      <PageDetailTitle
        title="Informasi Penyewa"
        subTitle="Tolong diisi semua informasi yang diminta"
      />

      <TitleSection name="Transfer Pembayaran" />
      <BookingInformation {...props} />
      <Footer />
    </div>
  );
}
