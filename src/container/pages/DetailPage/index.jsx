import React from "react";
import Header from "../../../components/molecules/Header";
import PageDetailTitle from "../../../components/molecules/PageDetailTitle";
import FeaturedImage from "../../../components/molecules/FeaturedImageDetailKost";
import Description from "../../../components/molecules/DescriptionDetailKost";
import Fasilitas from "../../../components/molecules/FasilitasKost";
import ChooseRoom from "../../../components/molecules/ChooseRoom";
import OwnerKost from "../../../components/molecules/OwnerKost";
import ReviewKost from "../../../components/molecules/ReviewKost";
import TitleSection from "../../../components/atoms/TitleSection";
import TextArea from "../../../components/atoms/Form/TextArea";
import Testimoni from "../../../components/atoms/Testimoni";
import Footer from "../../../components/molecules/Footer";

// import Img3 from "../../../assests/img/image/3.jpg";
import wifi from "../../../assests/img/icon/wifi.png";
import ruang_kerja from "../../../assests/img/icon/ruang_kerja.png";
import ac from "../../../assests/img/icon/ac.png";
import parkir from "../../../assests/img/icon/parkir.png";
import mall from "../../../assests/img/icon/mall.png";
import kampus from "../../../assests/img/icon/kampus.png";
import atm from "../../../assests/img/icon/atm.png";
import pasar from "../../../assests/img/icon/pasar.png";

import "./DetailPage.scss";

export default function index(props) {
  const breadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "Detail Kost", pageHref: "" },
  ];

  const fasilitasKost = [
    { name: "Wifi", image: wifi },
    { name: "Ruang Kerja", image: ruang_kerja },
    { name: "AC", image: ac },
    { name: "Parkir", image: parkir },
  ];
  const sekitaranKost = [
    { name: "Mall", image: mall },
    { name: "Kampus", image: kampus },
    { name: "ATM", image: atm },
    { name: "Pasar", image: pasar },
  ];

  const ownerKost = ["Ibu Putri Nurcahya"];

  return (
    <div className="detail-page">
      <Header {...props} />
      <PageDetailTitle breadcrumb={breadcrumb} />
      <FeaturedImage />
      <TitleSection name="Pilihan Kamar" />
      <ChooseRoom />
      <TitleSection name="Tentang Kost" />
      <Description />
      <TitleSection name="Fasilitas Kost" />
      <Fasilitas images={fasilitasKost} />
      <TitleSection name="Sekitaran Kost" />
      <Fasilitas images={sekitaranKost} />
      <OwnerKost data={ownerKost} />

      <TitleSection name="Review Kost" />
      <ReviewKost />

      <Testimoni />
      <TitleSection name="Berikan Testimoni Anda" />
      <TextArea />

      <Footer />
    </div>
  );
}
