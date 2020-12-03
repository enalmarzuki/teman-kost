import React from "react";

import "./HeroDetailKamar.scss";

export default function index(props) {
  const { data } = props;
  return (
    <div className="container container-detail-kamar-hero">
      <div className="row ">
        <div className="col-md-7 detail-kamar-image">
          <img src={data.image} alt="asdasd" />
        </div>
        <div className="col text-center align-self-center">
          <h2 className="font-weight-bold">{data.kost}</h2>
          <p className="text-secondary">{data.alamat}</p>
        </div>
      </div>
    </div>
  );
}
