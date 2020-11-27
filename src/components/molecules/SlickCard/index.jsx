import TitleSection from "../../../components/atoms/TitleSection";
import Card from "../../../components/atoms/Card";

import btnLeft from "../../../assests/img/icon/btn-left.png";
import btnRight from "../../../assests/img/icon/btn-right.png";
// import Img3 from "../../../assests/img/image/3.jpg";

import "./SlickCard.scss";

export default function index(props) {
  const nextSlider = (e) => {
    const sliderContainer = document.querySelector(`#${props.slideHire}`);
    sliderContainer.scrollLeft += 557;
  };

  const prevSlider = (e) => {
    const sliderContainer = document.querySelector(`#${props.slideHire}`);
    sliderContainer.scrollLeft -= 557;
  };
  return (
    <div className="container container-slider-card">
      <div className="row">
        <div className="col">
          <TitleSection name={props.name} lokasi={props.lokasi} />
        </div>
      </div>

      <div className="row card-slider mt-3">
        <span className="btn-prev" onClick={prevSlider}>
          <img src={btnLeft} alt="btn-left" />
        </span>
        <span className="btn-next" onClick={nextSlider}>
          <img src={btnRight} alt="btn-left" />
        </span>
        <div className="card-wrapper" id={props.slideHire}>
          <Card
            _id="123"
            image={props.image}
            title="Kost Putri Mustafa"
            lokasi="Makassar"
            harga="700.000"
          />
          <Card
            _id="asd123"
            image={props.image}
            title="Kost Putri Mustafa"
            lokasi="Makassar"
            harga="700.000"
          />
          <Card
            _id="zxc345"
            image={props.image}
            title="Kost Putri Mustafa"
            lokasi="Makassar"
            harga="700.000"
          />
          <Card
            _id="uio789"
            image={props.image}
            title="Kost Putri Mustafa"
            lokasi="Makassar"
            harga="700.000"
          />
          <Card
            _id="345cvb"
            image={props.image}
            title="Kost Putri Mustafa"
            lokasi="Makassar"
            harga="700.000"
          />
        </div>
      </div>
    </div>
  );
}
