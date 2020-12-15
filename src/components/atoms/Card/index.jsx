import propTypes from "prop-types";
import Button from "../Button";

import "./Card.scss";

export default function Card(props) {
  if (props.isSeeAll) {
    return (
      <div className="col-md-4 col-lg-3 px-2">
        <div className="card h-100">
          <div className="card-see-all">
            <Button
              type="link"
              className="h5 card-title font-weight-bold mb-1 stretched-link d-block"
              href={`/see-all/${props.seeAllKost}`}
            >
              Lihat Semua
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-md-4 col-lg-3 px-2">
      <div className="card  h-100">
        <div className="card-image">
          <img className="card-img-top" src={props.image} alt="Kost" />
        </div>
        <div className="card-body">
          <Button
            type="link"
            className="h5 card-title font-weight-bold mb-1 stretched-link d-block"
            href={`/detail-kost/${props._id}`}
          >
            {props.title}
          </Button>
          <p className="card-location text-secondary mb-3">{props.lokasi}</p>
          <p className="card-text font-weight-bold">
            Rp. {props.harga}{" "}
            <span className="font-weight-normal">/ bulan</span>
          </p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: propTypes.string,
  lokasi: propTypes.string,
  harga: propTypes.string,
};
