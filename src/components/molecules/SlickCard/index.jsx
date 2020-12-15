import TitleSection from "../../../components/atoms/TitleSection";
import Card from "../../../components/atoms/Card";

import btnLeft from "../../../assests/img/icon/btn-left.png";
import btnRight from "../../../assests/img/icon/btn-right.png";
// import Img3 from "../../../assests/img/image/3.jpg";

import "./SlickCard.scss";

export default function index(props) {
  const { data } = props;
  const nextSlider = (e) => {
    const sliderContainer = document.querySelector(`#${data._id}`);
    sliderContainer.scrollLeft += 557;
  };

  const prevSlider = (e) => {
    const sliderContainer = document.querySelector(`#${data._id}`);
    sliderContainer.scrollLeft -= 557;
  };

  return (
    <>
      <TitleSection name={data.title} lokasi={data.lokasi} />

      <div className="container container-slider-card">
        <div className="row card-slider mt-3">
          <span className="btn-prev" onClick={prevSlider}>
            <img src={btnLeft} alt="btn-left" />
          </span>
          <span className="btn-next" onClick={nextSlider}>
            <img src={btnRight} alt="btn-left" />
          </span>
          <div className="card-wrapper" id={data._id}>
            {data.kost.map((kost, index) => {
              return (
                <Card
                  key={index}
                  _id={kost._id}
                  image={kost.imageUrl}
                  title={kost.title}
                  lokasi={kost.lokasi}
                  harga={kost.harga}
                />
              );
            })}

            <Card isSeeAll seeAllKost={data.urlSeeAll} />
          </div>
        </div>
      </div>
    </>
  );
}
