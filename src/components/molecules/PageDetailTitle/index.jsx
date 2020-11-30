import React from "react";
import Breadcrumb from "../../atoms/Breadcrumb";

import "./PageDetailTitle.scss";

export default function index(props) {
  const { breadcrumb } = props;
  return (
    <div className="container container-page-title">
      <div className="row align-items-center">
        <div className="col">
          <Breadcrumb data={breadcrumb} />
        </div>
        <div className="col-auto">
          <h2 className="font-weight-bold text-center">Kost Putri Mustafa</h2>
          <p className="text-center text-secondary">
            Jl. Sultan Alauddin, Makassar
          </p>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
