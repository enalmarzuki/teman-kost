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
    category: {
      rekomendasi: {
        _id: "rekomen123",
        title: "Rekomendasi Kost",
        lokasi: "Makassar",
        urlSeeAll: "/see-all/rekomendasi-kost",
        kost: [
          {
            _id: "123asd",
            imageUrl: Img3,
            title: "Kost Putri Mustafa",
            lokasi: "Makassar",
            harga: "700.000",
          },
          {
            _id: "zxczxc",
            imageUrl: Img3,
            title: "Kost Putri Mustafa",
            lokasi: "Makassar",
            harga: "700.000",
          },
          {
            _id: "dazxcv",
            imageUrl: Img3,
            title: "Kost Putri Mustafa",
            lokasi: "Makassar",
            harga: "700.000",
          },
          {
            _id: "xccsdf",
            imageUrl: Img3,
            title: "Kost Putri Mustafa",
            lokasi: "Makassar",
            harga: "700.000",
          },
          {
            _id: "qrhdf",
            imageUrl: Img3,
            title: "Kost Putri Mustafa",
            lokasi: "Makassar",
            harga: "700.000",
          },
          {
            _id: "hjkcbcb",
            imageUrl: Img3,
            title: "Kost Putri Mustafa",
            lokasi: "Makassar",
            harga: "700.000",
          },
        ],
      },

      kostPromo: {
        _id: "promoKost123",
        title: "Kost Yang Lagi Promo",
        lokasi: "Makassar",
        urlSeeAll: "/see-all/kost-promo",
        kost: [
          {
            _id: "xgsd",
            imageUrl: Img3,
            title: "Kost Putri Mustafa",
            lokasi: "Makassar",
            harga: "700.000",
          },
          {
            _id: "wqerhfd",
            imageUrl: Img3,
            title: "Kost Putri Mustafa",
            lokasi: "Makassar",
            harga: "700.000",
          },
          {
            _id: "werwe",
            imageUrl: Img3,
            title: "Kost Putri Mustafa",
            lokasi: "Makassar",
            harga: "700.000",
          },
          {
            _id: "dfgfdg",
            imageUrl: Img3,
            title: "Kost Putri Mustafa",
            lokasi: "Makassar",
            harga: "700.000",
          },
          {
            _id: "fegw",
            imageUrl: Img3,
            title: "Kost Putri Mustafa",
            lokasi: "Makassar",
            harga: "700.000",
          },
          {
            _id: "khjkhj",
            imageUrl: Img3,
            title: "Kost Putri Mustafa",
            lokasi: "Makassar",
            harga: "700.000",
          },
        ],
      },
    },
  };
  return (
    <div className="landing-page">
      <Header {...props} />

      <Fade delay={300}>
        <Slider />
      </Fade>

      <Fade delay={300}>
        <SlickCard data={data.category.rekomendasi} />
      </Fade>

      <Fade delay={300}>
        <SlickCard data={data.category.kostPromo} />
      </Fade>

      <Fade delay={300}>
        <Testimoni />
      </Fade>

      <Footer />
    </div>
  );
}
