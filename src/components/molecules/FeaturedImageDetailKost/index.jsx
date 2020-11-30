import React from "react";
import Img3 from "../../../assests/img/image/3.jpg";

import "./FeaturedImageDetailKost.scss";

export default function index() {
  return (
    <div className="container container-hero-detail-kost">
      <div className="row">
        <div className="col-md-7">
          <div className="img-detail-kost">
            <img src={Img3} alt="asdasdasd" />
          </div>
        </div>
        <div className="col">
          <div className="detail-feature-image">
            <img src={Img3} alt="zxvzxv" />
            <img src={Img3} alt="qweqwe" />
          </div>
        </div>
      </div>
    </div>
  );
}
