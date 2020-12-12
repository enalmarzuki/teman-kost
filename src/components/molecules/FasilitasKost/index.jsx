import React from "react";
import propTypes from "prop-types";

import "./FasilitasKost.scss";

export default function Fasilitas(props) {
  const { fasilitas, isDetailKamar } = props;

  return (
    <div className="container container-fasilitas-kost mt-4">
      <div className="row">
        {fasilitas.map((fasilitas, index) => {
          return (
            <div className="col" key={index}>
              <div className="fasilitas-image-wrapper d-flex justify-content-center mb-3">
                <img
                  src={fasilitas.image}
                  alt="wifi"
                  style={{
                    width: "50px",
                  }}
                />
              </div>
              <h4 className="font-weight-bold text-center">{fasilitas.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Fasilitas.propTypes = {
  fasiltas: propTypes.array,
  isDetailKamar: propTypes.bool,
};
