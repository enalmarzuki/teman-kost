import Header from "../../../components/molecules/Header";
import Slider from "../../../components/molecules/Slider";
import SlickCard from "../../../components/molecules/SlickCard";

import Img3 from "../../../assests/img/image/3.jpg";

import "./LandingPage.scss";

export default function index(props) {
  let data = {
    category: [
      {
        name: "Rekomendasi Kost",
        lokasi: "Makassar",
        listKost: [
          {
            _id: "123asd",
            imageUrl: "/asd/asd",
            title: "Kost Putri Mustafa",
            lokasi: "Makassar",
            Harga: "700.000",
          },
        ],
      },
    ],
  };
  return (
    <div className="landing-page">
      <Header {...props} />
      <Slider />
      <SlickCard image={Img3} slideHire="rekomendasar" />
      <SlickCard image={Img3} slideHire="kost-promo" />
    </div>
  );
}
