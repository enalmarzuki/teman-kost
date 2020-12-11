import React from "react";

import Header from "../../../components/molecules/Header";
import HeroDetailKamar from "../../../components/molecules/HeroDetailKamar";
import BookingForm from "../../../components/molecules/BookingForm";
import TitleSection from "../../../components/atoms/TitleSection";
import Footer from "../../../components/molecules/Footer";

import Button from "../../../components/atoms/Button";

import Img3 from "../../../assests/img/image/3.jpg";
import wifi from "../../../assests/img/icon/wifi.png";
import ruang_kerja from "../../../assests/img/icon/ruang_kerja.png";
import ac from "../../../assests/img/icon/ac.png";
import parkir from "../../../assests/img/icon/parkir.png";

import "./DetailKamar.scss";

export default function DetailKamar(props) {
  const detailKamar = {
    hero: {
      image: Img3,
      kost: "Kost Putri Mustafa",
      alamat: "Jl. Sultan Alauddin",
    },

    fasilitasKost: [
      { name: "Wifi", image: wifi },
      { name: "Ruang Kerja", image: ruang_kerja },
      { name: "AC", image: ac },
      { name: "Parkir", image: parkir },
    ],
  };

  return (
    <div className="detail-kamar">
      <Header {...props} />
      <HeroDetailKamar data={detailKamar.hero} />
      <TitleSection name="Fasilitas Kost" />
      <BookingForm data={detailKamar} {...props} />
      <Footer />
    </div>
  );
}
