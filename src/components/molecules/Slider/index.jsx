import propTypes from "prop-types";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";

import Button from "../../atoms/Button";
import TitleSection from "../../atoms/TitleSection";
import Card from "../../atoms/Card";

import Img1 from "../../../assests/img/image/1.jpg";
import Img2 from "../../../assests/img/image/2.jpg";
import Img3 from "../../../assests/img/image/3.jpg";

import "./Slider.css";

const content = [
  {
    title: "Lagi Mencari Kost ?",
    description:
      "Bergabung bersama kami dan dapatkan info-nya dan langsung sewa di TemanKost.",
    button: "Cari Kost",
    image: Img1,
  },
  {
    title: "Lagi Ada Promo Buat Kamu",
    description:
      "Bergabung bersama kami dan dapatkan info-nya dan langsung sewa di TemanKost.",
    button: "Ambil Promo",
    image: Img2,
  },
  {
    title: "Kost Paling Laris",
    description:
      "Bergabung bersama kami dan dapatkan info-nya dan langsung sewa di TemanKost.",
    button: "Lihat Kost",
    image: Img3,
  },
];

export default function index(props) {
  return (
    <div className="container container-hero">
      <div className="row">
        <div className="col-lg-12">
          <Slider className="slider-wrapper" autoplay={3000}>
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{
                  background: `url('${item.image}') no-repeat center center`,
                }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <Button
                    type="link"
                    className="btn btn-primary px-5 btn-hero font-weight-bold"
                    href="/"
                  >
                    {item.button}
                  </Button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
