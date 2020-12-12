import React from "react";
import Owner from "../../../assests/img/image/testimoni.jpg";

import "./OwnerKost.scss";

export default function index(props) {
  console.log(props);
  return (
    <div className="container container-owner-kost">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="owner-kost-image">
            <img src={Owner} alt="Pemilik Kost" />
            <h3 className="font-weight-bold text-center mt-4">{props.data}</h3>
            <p className="font-weight-bold text-center text-secondary">
              Pemilik Kost
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
