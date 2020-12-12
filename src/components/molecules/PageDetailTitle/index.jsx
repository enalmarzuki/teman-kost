import React from "react";
import Breadcrumb from "../../atoms/Breadcrumb";

import "./PageDetailTitle.scss";

export default function index(props) {
  const { breadcrumb, title, subTitle } = props;
  return (
    <div className="container container-page-title">
      <div className="row align-items-center">
        {breadcrumb ? (
          <div className="col">
            <Breadcrumb data={breadcrumb} />
          </div>
        ) : (
          <div className="col"></div>
        )}

        <div className="col-auto">
          <h2 className="font-weight-bold text-center">{title}</h2>
          <p className="text-center text-secondary">{subTitle}</p>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
