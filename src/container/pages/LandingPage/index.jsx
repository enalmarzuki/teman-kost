import Header from "../../../components/molecules/Header";
import Slider from "../../../components/molecules/Slider";
import SlickCard from "../../../components/molecules/SlickCard";
import Testimoni from "../../../components/atoms/Testimoni";
import Footer from "../../../components/molecules/Footer";

import Fade from "react-reveal/Fade";

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

      <Fade delay={300}>
        <Slider />
      </Fade>

      <Fade delay={300}>
        <SlickCard
          image={Img3}
          slideHire="rekomendasar"
          name="Rekomendasi Kost"
          lokasi="Makassar"
        />
      </Fade>

      <Fade delay={300}>
        <SlickCard
          image={Img3}
          slideHire="kost-promo"
          name="Kost Yang Lagi Promo"
          lokasi="Makassar"
        />
      </Fade>

      <Fade delay={300}>
        <Testimoni />
      </Fade>

      <Footer />
    </div>
  );
}
